BlindsFactory.ca — Static Website

Overview
- Fast, accessible, SEO-friendly static site with no build step.
- Minimal CSS/JS, responsive, ready for branding and content.

Structure
- `index.html`: Homepage with hero, products, trust, and CTA.
- `products/*.html`: Category pages (roller, zebra, motorized, shutters).
- `about.html`, `service-areas.html`, `gallery.html`, `contact.html`.
- `assets/css/styles.css`, `assets/js/main.js`, `assets/images/` (placeholders).
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `404.html`.

Local Preview
- Open `index.html` in a browser (no server required).

Next Steps
- Replace placeholders (logo, phone, email, address, images, copy).
- Connect a form backend (e.g., Netlify Forms, Formspree, or a custom API).
- Configure analytics and deployment (Netlify, Vercel, or your host).

Deploying to Vercel
- Ensure `vercel.json` is present (it is) for optimal caching and clean URLs.
- Option A: Connect your Git repo in the Vercel dashboard; select this folder as the project root. Vercel auto-deploys on push.
- Option B (CLI):
  1. Install: `npm i -g vercel`
  2. From the repo root, run: `vercel` (for a preview) and `vercel --prod` (to promote to production).
  3. In the Vercel project settings, add your domains (e.g., `www.blindsfactory.ca`). Point DNS to Vercel and set your primary domain.
  4. Optional: add the apex `blindsfactory.ca` and set it to redirect to `www` in Domain settings.
