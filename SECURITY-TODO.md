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

## Security Headers (before going live)

This is a static site (`output: 'static'`), so security headers **cannot** be set via Astro middleware — they must be configured at the CDN layer. See **Step 8b** in `AWS-DEPLOYMENT.md` for the full CloudFront response headers policy command.

Headers to add via CloudFront response headers policy:

| Header | Value |
|--------|-------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.resend.com; frame-ancestors 'none';` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

> The `unsafe-inline` CSP allowances are required by Astro's inline hydration scripts. This can be hardened with a nonce-based CSP if SSR is enabled in the future.
