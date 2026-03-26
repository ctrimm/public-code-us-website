# Automated Deployment Guide (AWS S3 + CloudFront)

This repository uses **GitHub Actions** to automatically build and deploy the Astro static site to an **AWS S3 Bucket** and invalidate the **AWS CloudFront** edge cache whenever code is merged into the `main` branch.

## How the Pipeline Works

The workflow configuration is natively defined at `.github/workflows/main-deploy.yml`. 
Upon any commit to `main`, the workflow will:
1. **Checkout & Build:** Establish a Node 20 environment, run `npm ci` to cleanly install dependencies, and run `npm run build` to generate the `dist/` folder.
2. **Authenticate with AWS:** Securely load IAM credentials passed from GitHub Secrets.
3. **Sync S3:** Run an exact replication command (`aws s3 sync dist/ s3://publiccodeus-static/ --delete`) to push the new build files and prune old orphaned files.
4. **Invalidate Cache:** Execute a CloudFront invalidation request (`aws cloudfront create-invalidation`) so visitors instantly receive the updated files.

## Setup Instructions

To enable successful automated deployments from this repository, you must supply GitHub with your secure AWS credentials.

### 1. Identify Your Target Resources
Ensure you have the target S3 bucket name (e.g. `publiccodeus-static`) created and mapped properly to a CloudFront distribution inside your AWS Console. Make sure the S3 bucket name matches the one hardcoded on line 29 of `.github/workflows/main-deploy.yml`. You can change that line to match your own custom bucket name if needed.

### 2. Configure GitHub Secrets
1. Navigate to your repository on GitHub.
2. Click **Settings** (the gear tab at the top).
3. In the left sidebar, expand **Secrets and variables** -> click **Actions**.
4. Click the green **New repository secret** button.
5. You need to add three (3) distinct variables matching the exact names below:

- `AWS_ACCESS_KEY_ID`: Provide the Access Key ID of an IAM User with S3 Put/Delete permissions and Cloudfront Invalidation permissions.
- `AWS_SECRET_ACCESS_KEY`: Provide the secret key value for that user.
- `CLOUDFRONT_DIST_ID`: The unique Distribution ID sequence (e.g., `E1MW12345EXAMPLE`) located in your AWS Cloudfront console.

### 3. Test the Deployment
Once your secrets are plugged in, you can push a commit directly to `main` (or merge a PR). 
Alternatively, go to the **Actions** tab on GitHub, select **Deploy to AWS S3 and CloudFront**, and click **Run workflow** to kick off a manual deployment.

---

---

### 4. Configure Cloudflare DNS

Since the domain is registered and managed in Cloudflare, you need to point DNS at your CloudFront distribution.

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com) and select your domain.
2. Go to **DNS** → **Records** → **Add record**.
3. Add a **CNAME** record for the root domain:
   - **Type**: `CNAME`
   - **Name**: `@`
   - **Target**: your CloudFront domain (e.g., `d1234abcd.cloudfront.net`)
   - **Proxy status**: **DNS only** (gray cloud) — do NOT enable Cloudflare proxying, as CloudFront manages its own CDN and SSL
4. Optionally add a second CNAME for `www` pointing to the same CloudFront domain.

> **Note:** Cloudflare supports CNAMEs at the root domain via CNAME Flattening, so `@` records work without issue.

#### SSL Certificate Setup (AWS ACM)

CloudFront handles SSL, not Cloudflare. Before your domain will serve HTTPS:

1. In the AWS Console, go to **Certificate Manager (ACM)** — must be in the **us-east-1** region (required for CloudFront).
2. Request a public certificate for your domain (e.g., `publiccode.us` and `www.publiccode.us`).
3. ACM will ask you to validate ownership via DNS. Add the provided CNAME validation records to Cloudflare DNS.
4. Once issued, attach the certificate to your CloudFront distribution under **Settings** → **Alternate domain names (CNAMEs)** → **Custom SSL certificate**.

---

### Troubleshooting
- **No Access Denied or 403 Errors on S3 Sync:** Verify your IAM User actually has `s3:PutObject` and `s3:DeleteObject` permissions associated with your bucket's ARN (`arn:aws:s3:::<your-bucket-name>/*`).
- **Cloudfront Invalidation Fails:** The IAM user must possess the `cloudfront:CreateInvalidation` permission.
