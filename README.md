# Encode Pen Marketing Site

Single-page marketing site for **Encode** — a cognitive focus pen sold to students at $3.99.

## Stack

- Next.js (App Router, static export)
- Tailwind CSS v4
- Framer Motion
- Radix UI Accordion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are exported to `./out`.

## Deploy

### GitHub Pages (live)

```bash
npm run deploy:gh-pages
```

Site URL: [https://epiczeezy.github.io/codetv-pen-selling/](https://epiczeezy.github.io/codetv-pen-selling/)

### Vercel (recommended)

This repo is configured for Vercel out of the box (`output: 'export'`, Next.js preset).

**Option A — Git integration (recommended)**

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) → select `codetv-pen-selling`
3. Leave defaults: Framework **Next.js**, Build Command `npm run build`, Output handled by Next.js
4. Deploy — every push to `main` redeploys production

**Option B — CLI**

```bash
npx vercel login
npx vercel          # preview
npx vercel --prod   # production
```

Optional: set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings when using a custom domain.

## Configuration

Edit [`src/content/site.ts`](src/content/site.ts) to update:

- Brand name
- Waitlist email (`waitlistEmail`)
- Price

All marketing copy lives in [`src/content/copy.ts`](src/content/copy.ts).

## Post-deploy checklist

- [ ] Update waitlist email in `site.ts`
- [ ] Replace `og-image.svg` with a PNG if social platforms require it
- [ ] Add Stripe Payment Link when checkout is ready
- [ ] Test at 375px (mobile) and 1280px (desktop)
