import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://publiccode.us',
  // NOTE: 'static' output disables all src/pages/api/* routes at build time.
  // To enable the petition/subscribe APIs, switch to output: 'server' or 'hybrid'
  // and add an SSR adapter. Also ensure rate limiting and WAF rules are in place
  // before exposing the API routes to public traffic.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['canvas-confetti']
    }
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/admin')
    })
  ]
});
