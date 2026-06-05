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

### Vercel (recommended for production)

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js**
4. Deploy

Or via CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

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
