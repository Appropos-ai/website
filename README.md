# Appropos website

The public marketing site for Appropos: **https://appropos.ai**.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, lucide-react icons and
react-hook-form for the contact form. The site is a **static export**
(`output: 'export'` in `next.config.ts`). There is no server runtime and there are no API routes.

## Getting started

```sh
git clone https://github.com/Appropos-ai/website.git
cd website
npm ci
npm run dev     # http://localhost:3000
```

Before every commit:

```sh
npm run lint    # eslint, must be clean
npm run build   # next build + static export to out/
```

To preview the production build locally, run `npx serve out`.

## Deploys

Cloudflare Pages is connected to this GitHub repo:

- A push to `master` builds and deploys **https://appropos.ai**.
- A push to any other branch gets a preview deploy.

Cloudflare runs `npm run build` and serves `out/`. `wrangler.jsonc` names the Pages project
(`website`). Merging to `master` ships to production, so only merge changes that pass lint
and build.

## Analytics

Umami (self-hosted at `https://s.wefav.com`). The tracking snippet and website id are in
`src/app/layout.tsx`. The contact form (`src/components/sections/Contact.tsx`) sends
`contact-submit` events.

## SEO

Metadata (Open Graph, Twitter) is in `src/app/layout.tsx`. `robots.txt` and `sitemap.xml`
are generated at build time from `src/app/robots.ts` and `src/app/sitemap.ts`. When you add
a page, add its path to `PATHS` in `sitemap.ts`. The site origin is defined in `src/lib/site.ts`.
