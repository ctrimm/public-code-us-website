# Security TODO

## Rate Limiting (before enabling SSR/API routes)

The petition (`/api/sign`) and newsletter (`/api/subscribe`) API routes are currently **disabled** because the site uses `output: 'static'` in `astro.config.js`. Before switching to `output: 'server'` or `output: 'hybrid'` to enable them, add rate limiting at the infrastructure level.

### Recommended approach: AWS WAF on CloudFront

1. Create a WAF Web ACL in the AWS Console (or via CLI) in `us-east-1`
2. Add a **rate-based rule** targeting `/api/sign` and `/api/subscribe` paths — suggested limit: 20 requests per 5 minutes per IP
3. Associate the Web ACL with CloudFront distribution `E33D2XQ66KR55X`

### Also consider

- **CAPTCHA** on both forms (e.g., Cloudflare Turnstile or hCaptcha) to prevent automated submissions
- **DynamoDB** to replace the in-memory `signatures` Map in `api/sign.ts` — the current implementation loses all data on restart and deduplication breaks across restarts
- **Unsubscribe page** — the welcome email links to `https://publiccode.us/unsubscribe` but that route does not yet exist
