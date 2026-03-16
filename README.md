# Public Code US - Campaign Website

🚀 A serverless, open-source website for the Public Code US campaign - demanding that publicly-funded government software be made publicly owned and transparent.

## Overview

This is a **production-ready** serverless web application built with:
- **Astro 5** - Fast static site generation
- **React** - Interactive petition form
- **Tailwind CSS** - Neobrutalist design system
- **AWS** - CloudFront (CDN), S3, Lambda, DynamoDB, API Gateway

**Estimated cost**: $11-21/month on AWS (free tier for most)

## 🎨 Design System

**Neobrutalist / High-Contrast Pop** aesthetic:
- Bold borders (4px solid black)
- Hard shadows, no soft edges
- Sharp corners (no border-radius)
- Uppercase italic headings
- Vibrant color palette: Cyan, Pink, Purple, Yellow
- Physical "press" effects on buttons

See the [design system](./src/styles/global.css) for full details.

## 📄 Pages

The site has 7 pages (ready for extension):

1. **Home** (`/`) - Campaign overview, hero section, statistics
2. **Learn** (`/learn`) - Educational content about public code and ballot initiatives
3. **Sign Petition** (`/sign`) - Main conversion page with form + signature count
4. **Resources** (`/resources`) - Downloadable materials, social toolkit, external links
5. **About** (`/about`) - Mission statement, how to get involved, contact info
6. **Privacy** (`/privacy`) - GDPR/CCPA compliant privacy policy
7. **Terms** (`/terms`) - Terms of service for petition

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# Visit http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

```bash
# Copy example env file
cp .env.example .env

# Update with your values
SITE_URL=https://yourdomain.com
SITE_NAME=Public Code US
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.astro              # Sticky navigation
│   ├── Footer.astro              # Footer with links
│   ├── PetitionForm.tsx          # React form component
│   ├── SEO.astro                 # Meta tags helper
│   └── ui/                       # shadcn/ui components
│
├── pages/
│   ├── index.astro               # Home page
│   ├── learn.astro               # Educational content
│   ├── sign.astro                # Petition page
│   ├── resources.astro           # Resources page
│   ├── about.astro               # About page
│   ├── privacy.astro             # Privacy policy
│   ├── terms.astro               # Terms of service
│   └── api/
│       └── sign.ts               # Petition API endpoint
│
├── layouts/
│   └── main.astro                # Base page layout
│
├── styles/
│   └── global.css                # Global styles + utilities
│
└── lib/
    └── utils.ts                  # Utility functions
```

## 📊 Features

### Petition System
- ✅ Form validation (email, name, state, optional zip)
- ✅ Duplicate prevention (within 24 hours)
- ✅ Confetti animation on success
- ✅ Real-time signature count display
- ✅ Optional message collection
- ✅ Email subscription opt-in

### SEO & Performance
- ✅ Meta tags, Open Graph, Twitter Cards
- ✅ Automatic sitemap generation
- ✅ robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Image optimization
- ✅ CSS/JS minification
- ✅ Gzip compression ready

### Deployment Ready
- ✅ Static site generation (no servers to manage)
- ✅ API endpoint for petition submissions
- ✅ CORS support for cross-origin requests
- ✅ Environment variable configuration
- ✅ CI/CD ready (GitHub Actions included)

## 🔧 Technology Stack

**Frontend:**
- Astro 5.16+ (static site generator)
- React 19 (interactive components)
- Tailwind CSS 4 (styling)
- TypeScript (type safety)

**Backend:**
- AWS Lambda (serverless functions)
- AWS DynamoDB (petition storage)
- AWS API Gateway (REST API)
- AWS CloudFront (CDN)
- AWS S3 (static file hosting)

**Development:**
- Node.js 20+
- npm/pnpm
- GitHub Actions (CI/CD)

## 📚 API Documentation

### POST `/api/sign`

Submit a petition signature.

**Request:**
```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "state": "California",
  "zip": "90210",
  "message": "Optional personal message",
  "wantsUpdates": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for signing!",
  "totalSignatures": 2847,
  "timestamp": "2026-03-16T19:51:00Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Already signed in the last 24 hours"
}
```

## 🚀 Deployment

### AWS (Recommended - Minimal Cost)

See [AWS-DEPLOYMENT.md](./AWS-DEPLOYMENT.md) for complete step-by-step guide.

**Quick summary:**
1. Build site: `npm run build`
2. Upload to S3: `aws s3 sync dist/ s3://bucket-name/`
3. Create CloudFront distribution
4. Setup Lambda + API Gateway for `/api/sign`
5. Configure DynamoDB for signatures
6. Setup Route53 for custom domain

**Estimated cost:** $11-21/month

### Alternative Hosting

The site is a static Astro build, so it works on:
- Vercel (easiest, free tier available)
- Netlify (free tier available)
- GitHub Pages (free)
- Cloudflare Pages (free)
- AWS Amplify
- Traditional hosting (Apache/Nginx)

However, to support the petition API, you need:
- Lambda or equivalent serverless function
- DynamoDB or similar database
- API Gateway or equivalent

## 🛠️ Development Guide

### Adding a New Page

```astro
---
import Layout from '../layouts/main.astro';
---

<Layout
  title="Page Title"
  description="Page description for SEO"
  currentPage="/page-name"
>
  <section class="bg-nb-cyan border-b-4 border-nb-dark py-20">
    <div class="max-w-4xl mx-auto px-4">
      <h1>Your Heading</h1>
      <p>Your content</p>
    </div>
  </section>
</Layout>
```

### Using Neobrutalist Components

```astro
<!-- Button -->
<a href="/sign" class="btn-nb btn-nb-primary">Sign Now</a>

<!-- Card -->
<div class="card-nb bg-nb-yellow">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

<!-- Input -->
<input type="text" class="input-nb" placeholder="Enter text" />

<!-- Section with color background -->
<section class="bg-nb-pink text-nb-light">
  Content
</section>
```

### Color Palette Reference

- `#E0F7FA` - Cyan (background)
- `#FF4081` - Pink (primary accent)
- `#7C4DFF` - Purple (secondary accent)
- `#FFEA00` - Yellow (warning/highlight)
- `#09090B` - Dark (text, borders)
- `#FFFFFF` - Light (text on dark backgrounds)

### Styling Utilities

```css
.border-nb          /* 4px solid dark border */
.shadow-nb          /* 8px hard shadow */
.shadow-nb-lg       /* 12px hard shadow */
.btn-nb             /* Base button style */
.btn-nb-primary     /* Pink button */
.btn-nb-secondary   /* Purple button */
.btn-nb-yellow      /* Yellow button */
.input-nb           /* Form input style */
.card-nb            /* Card container */
.bg-nb-cyan         /* Cyan background */
.bg-nb-pink         /* Pink background */
.bg-nb-purple       /* Purple background */
.bg-nb-yellow       /* Yellow background */
```

## 📞 Contact & Support

- **Email:** hello@publiccodeus.org
- **Twitter:** [@publiccodeus](https://twitter.com/publiccodeus)
- **GitHub:** [publiccodeus](https://github.com/publiccodeus)

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Free to use and modify

## 🔗 Related Projects

- [Public Money, Public Code (EU)](https://publiccode.eu/) - The original campaign
- [FSFE Public Code Initiative](https://fsfe.org/activities/publiccode/)
- [Public Code Standard](https://standard.publiccode.net/)
- [Linux Foundation](https://www.linuxfoundation.org/) - Open source research

---

**Made with ❤️ for government transparency and open source.**
