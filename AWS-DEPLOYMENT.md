# AWS Serverless Deployment Guide

This guide explains how to deploy Public Code US as a serverless application on AWS with minimal costs.

## Architecture Overview

```
CloudFront (CDN)
    ↓
┌─────────────────┬──────────────────┐
│   S3 Bucket     │  API Gateway     │
│ (Static Files)  │  + Lambda        │
└─────────────────┴──────────────────┘
        ↓                  ↓
    CSS, JS, HTML    Petition API
                           ↓
                     DynamoDB
                  (Signatures DB)
```

## Estimated Monthly Cost

- **CloudFront**: ~$0.50 (first 1GB free)
- **DynamoDB**: ~$10-20 (pay-per-request, ~1000 signatures/month)
- **Lambda**: ~$0 (1M free invocations/month)
- **S3**: ~$0.50 (minimal storage)
- **Total**: **$11-21/month** (or less with free tier)

## Prerequisites

- AWS Account (free tier eligible)
- AWS CLI installed and configured
- Node.js 20+
- Git

## Step 1: Build the Static Site

```bash
pnpm install
pnpm build
```

This creates a `dist/` folder with all static files ready for S3.

## Step 2: Create S3 Bucket

```bash
# Create bucket
aws s3api create-bucket \
  --bucket publiccodeus-static \
  --region us-east-1

# Enable public read access (CORS)
aws s3api put-bucket-policy \
  --bucket publiccodeus-static \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::publiccodeus-static/*"
    }]
  }'

# Upload built files
aws s3 sync dist/ s3://publiccodeus-static/ \
  --delete \
  --cache-control "public, max-age=3600" \
  --exclude "_astro/*"

# Upload versioned assets with long cache
aws s3 sync dist/_astro/ s3://publiccodeus-static/_astro/ \
  --cache-control "public, max-age=31536000, immutable"
```

## Step 3: Create DynamoDB Table

```bash
aws dynamodb create-table \
  --table-name petition_signatures \
  --attribute-definitions \
    AttributeName=email,AttributeType=S \
    AttributeName=timestamp,AttributeType=N \
  --key-schema \
    AttributeName=email,KeyType=HASH \
    AttributeName=timestamp,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1

# Optional: Add TTL to auto-delete old signatures
aws dynamodb update-time-to-live \
  --table-name petition_signatures \
  --time-to-live-specification AttributeName=expiresAt,Enabled=true \
  --region us-east-1
```

## Step 4: Create IAM Role for Lambda

```bash
# Create role
aws iam create-role \
  --role-name publiccode-lambda-role \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": "lambda.amazonaws.com"},
      "Action": "sts:AssumeRole"
    }]
  }'

# Attach DynamoDB policy
aws iam put-role-policy \
  --role-name publiccode-lambda-role \
  --policy-name dynamodb-access \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:Query",
        "dynamodb:Scan",
        "dynamodb:GetItem"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/petition_signatures"
    }]
  }'

# Attach basic Lambda execution policy
aws iam attach-role-policy \
  --role-name publiccode-lambda-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
```

## Step 5: Create Lambda Function

```bash
# Create Lambda function file
cat > lambda-index.mjs << 'EOF'
import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getResponseHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

export const handler = async (event) => {
  // Handle OPTIONS (CORS preflight)
  if (event.requestContext.http.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: ''
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    // Validate
    if (!body.name?.trim()) throw new Error('Name required');
    if (!body.email?.trim()) throw new Error('Email required');
    if (!validateEmail(body.email)) throw new Error('Invalid email');
    if (!body.state) throw new Error('State required');

    // Check for duplicate (last 24 hours)
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    const existing = await client.send(new QueryCommand({
      TableName: process.env.DYNAMODB_TABLE_NAME,
      KeyConditionExpression: 'email = :email AND #ts > :timestamp',
      ExpressionAttributeNames: { '#ts': 'timestamp' },
      ExpressionAttributeValues: {
        ':email': { S: body.email },
        ':timestamp': { N: oneDayAgo.toString() }
      },
      Limit: 1
    }));

    if (existing.Items?.length > 0) {
      return {
        statusCode: 409,
        headers: getResponseHeaders(),
        body: JSON.stringify({
          success: false,
          error: 'Already signed in the last 24 hours'
        })
      };
    }

    // Store signature
    const timestamp = Date.now();
    await client.send(new PutItemCommand({
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        email: { S: body.email },
        timestamp: { N: timestamp.toString() },
        name: { S: body.name },
        state: { S: body.state },
        zip: { S: body.zip || '' },
        message: { S: body.message || '' },
        wantsUpdates: { BOOL: body.wantsUpdates },
        createdAt: { S: new Date().toISOString() },
        expiresAt: { N: (timestamp + 90*24*60*60*1000).toString() } // TTL in 90 days
      }
    }));

    // Get count
    const scan = await client.send(new ScanCommand({
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Select: 'COUNT'
    }));

    return {
      statusCode: 200,
      headers: getResponseHeaders(),
      body: JSON.stringify({
        success: true,
        message: 'Signature added',
        totalSignatures: scan.Count
      })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      headers: getResponseHeaders(),
      body: JSON.stringify({
        success: false,
        error: error.message || 'Server error'
      })
    };
  }
};
EOF

# Create deployment package
zip -r lambda.zip lambda-index.mjs node_modules/

# Create function
aws lambda create-function \
  --function-name publiccode-petition-submit \
  --runtime nodejs20.x \
  --role arn:aws:iam::ACCOUNT_ID:role/publiccode-lambda-role \
  --handler lambda-index.handler \
  --zip-file fileb://lambda.zip \
  --timeout 30 \
  --memory-size 256 \
  --environment Variables="{DYNAMODB_TABLE_NAME=petition_signatures,AWS_REGION=us-east-1}" \
  --region us-east-1
```

## Step 6: Create API Gateway

```bash
# Create REST API
API_ID=$(aws apigateway create-rest-api \
  --name publiccode-api \
  --description "Public Code Petition API" \
  --region us-east-1 \
  --query 'id' --output text)

# Get root resource
ROOT_ID=$(aws apigateway get-resources \
  --rest-api-id $API_ID \
  --region us-east-1 \
  --query 'items[0].id' --output text)

# Create /sign resource
RESOURCE_ID=$(aws apigateway create-resource \
  --rest-api-id $API_ID \
  --parent-id $ROOT_ID \
  --path-part sign \
  --region us-east-1 \
  --query 'id' --output text)

# Create POST method
aws apigateway put-method \
  --rest-api-id $API_ID \
  --resource-id $RESOURCE_ID \
  --http-method POST \
  --authorization-type NONE \
  --region us-east-1

# Create OPTIONS method (CORS)
aws apigateway put-method \
  --rest-api-id $API_ID \
  --resource-id $RESOURCE_ID \
  --http-method OPTIONS \
  --authorization-type NONE \
  --region us-east-1

# Create Lambda integration
aws apigateway put-integration \
  --rest-api-id $API_ID \
  --resource-id $RESOURCE_ID \
  --http-method POST \
  --type AWS_PROXY \
  --integration-http-method POST \
  --uri arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:ACCOUNT_ID:function:publiccode-petition-submit/invocations \
  --region us-east-1

# Deploy API
DEPLOYMENT_ID=$(aws apigateway create-deployment \
  --rest-api-id $API_ID \
  --stage-name prod \
  --region us-east-1 \
  --query 'id' --output text)

# Get API endpoint
API_ENDPOINT=$(aws apigateway get-stage \
  --rest-api-id $API_ID \
  --stage-name prod \
  --region us-east-1 \
  --query 'invokeUrl' --output text)

echo "API Endpoint: $API_ENDPOINT/sign"
```

## Step 7: Allow Lambda to Be Called by API Gateway

```bash
# Get your account ID
ACCOUNT_ID=$(aws sts get-caller-identity --query 'Account' --output text)

# Add permission for API Gateway to call Lambda
aws lambda add-permission \
  --function-name publiccode-petition-submit \
  --statement-id apigateway-access \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --region us-east-1
```

## Step 8: Create CloudFront Distribution

```bash
# Create CloudFront distribution with S3 + API Gateway origins
cat > cloudfront-config.json << 'EOF'
{
  "CallerReference": "publiccode-$(date +%s)",
  "Comment": "Public Code US - Static + API",
  "DefaultRootObject": "index.html",
  "Origins": {
    "Items": [
      {
        "Id": "s3-origin",
        "DomainName": "publiccodeus-static.s3.us-east-1.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      },
      {
        "Id": "api-origin",
        "DomainName": "YOUR_API_ID.execute-api.us-east-1.amazonaws.com",
        "CustomOriginConfig": {
          "HTTPPort": 80,
          "HTTPSPort": 443,
          "OriginProtocolPolicy": "https-only",
          "OriginSSLProtocols": {
            "Items": ["TLSv1.2"]
          }
        }
      }
    ],
    "Quantity": 2
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Items": ["GET", "HEAD"],
      "Quantity": 2
    },
    "Compress": true,
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": { "Forward": "none" }
    },
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    }
  },
  "CacheBehaviors": [
    {
      "PathPattern": "/api/*",
      "TargetOriginId": "api-origin",
      "ViewerProtocolPolicy": "https-only",
      "AllowedMethods": {
        "Items": ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"],
        "Quantity": 7
      },
      "Compress": true,
      "ForwardedValues": {
        "QueryString": true,
        "Cookies": { "Forward": "all" },
        "Headers": {
          "Items": ["Content-Type", "Accept"],
          "Quantity": 2
        }
      },
      "TrustedSigners": {
        "Enabled": false,
        "Quantity": 0
      }
    },
    {
      "PathPattern": "/_astro/*",
      "TargetOriginId": "s3-origin",
      "ViewerProtocolPolicy": "allow-all",
      "AllowedMethods": {
        "Items": ["GET", "HEAD"],
        "Quantity": 2
      },
      "Compress": true,
      "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6"
    }
  ],
  "Enabled": true
}
EOF

aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

## Step 9: Configure Custom Domain (Optional)

```bash
# Create Route53 hosted zone (or update existing)
aws route53 create-hosted-zone \
  --name publiccodeus.org \
  --caller-reference publiccode-$(date +%s)

# Create A record pointing to CloudFront distribution
aws route53 change-resource-record-sets \
  --hosted-zone-id ZONE_ID \
  --change-batch '{
    "Changes": [{
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "publiccodeus.org",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "YOUR_CLOUDFRONT_DOMAIN.cloudfront.net",
          "EvaluateTargetHealth": false
        }
      }
    }]
  }'
```

## Step 10: Setup CI/CD (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install & Build
        run: |
          npm ci
          npm run build

      - name: Upload to S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          aws s3 sync dist/ s3://publiccodeus-static/ --delete

      - name: Invalidate CloudFront
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DIST_ID }} \
            --paths "/*"
```

## Monitoring & Maintenance

### Check DynamoDB Metrics
```bash
aws cloudwatch get-metric-statistics \
  --namespace AWS/DynamoDB \
  --metric-name ConsumedWriteCapacityUnits \
  --dimensions Name=TableName,Value=petition_signatures \
  --start-time $(date -u -d '1 hour ago' +%Y-%m-%dT%H:%M:%S) \
  --end-time $(date -u +%Y-%m-%dT%H:%M:%S) \
  --period 300 \
  --statistics Sum
```

### View Lambda Logs
```bash
aws logs tail /aws/lambda/publiccode-petition-submit --follow
```

### Query Signatures
```bash
aws dynamodb scan \
  --table-name petition_signatures \
  --select COUNT
```

## Troubleshooting

### 403 Forbidden on API Calls
- Check Lambda has permission from API Gateway
- Verify CORS headers are set correctly
- Check API Gateway resource policy

### DynamoDB Throttling
- Switch to PAY_PER_REQUEST if not already done
- Check CloudWatch metrics
- Add DAX for caching if needed

### CloudFront Caching Issues
- Invalidate distribution: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`
- Set shorter cache TTL during development
- Check Cache-Control headers in S3

## Cost Optimization Tips

1. **Use S3 Intelligent Tiering** - Auto moves old files to cheaper storage
2. **Enable CloudFront Compression** - Reduces bandwidth by 60%+
3. **Set appropriate cache TTLs** - HTML: 1 hour, CSS/JS: 1 year
4. **Monitor DynamoDB** - Switch off pay-per-request if over 1000 rps
5. **Set DynamoDB TTL** - Auto-delete signatures older than 90 days
6. **Use Lambda reserved concurrency** - Optional, for predictable costs

## Security Checklist

- [ ] Enable CloudFront logging
- [ ] Setup AWS WAF rules to block malicious requests
- [ ] Enable DynamoDB point-in-time recovery
- [ ] Encrypt data in transit (HTTPS only)
- [ ] Encrypt data at rest in DynamoDB
- [ ] Limit Lambda execution role to minimum required permissions
- [ ] Implement rate limiting on Lambda (CloudWatch)
- [ ] Regular security audits
- [ ] Monitor CloudTrail for unauthorized access

## Support & Scaling

If you exceed free tier limits:
- Expect ~$5-50/month for typical usage
- DynamoDB can handle millions of requests
- Lambda auto-scales up to 1000 concurrent
- CloudFront scales automatically

For production deployment:
- Setup health checks
- Configure auto-scaling policies
- Setup alerts for cost/usage spikes
- Regular backups of DynamoDB
- Multi-region for high availability (advanced)
