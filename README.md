# Appropos website

The public marketing site for Appropos: **https://appropos.ai**.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, lucide-react icons and
react-hook-form for the contact form. The site is a **static export**
(`output: 'export'` in `next.config.ts`). There is no server runtime and there are no API routes.

## Getting started

You need Node.js 20.9 or newer (Next 16 requires it).

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

To preview the production build locally, run `npx serve out`. Don't use `npm run start`:
`next start` doesn't work with `output: 'export'`.

## Deploys

Cloudflare Pages is connected to this GitHub repo:

- A push to `master` builds and deploys **https://appropos.ai**.
- A push to any other branch gets a preview deploy.

The build command is set in the Cloudflare Pages dashboard, not in this repo. `wrangler.jsonc`
names the Pages project (`website`) and its output directory (`out/`). Merging to `master` ships to production, so only merge changes that pass lint
and build.

`CLAUDE.md` is the source of truth for the deploy and pre-commit rules. If they change, update
it first and then this summary.

## Where things live

- Landing page sections (copy and layout): `src/components/sections/` (`Hero.tsx`,
  `Services.tsx`, `About.tsx`, `Testimonials.tsx`, `Contact.tsx`), assembled in `src/app/page.tsx`.
- Booking page: `src/app/book/`.
- Brand colours and theme variables: CSS variables at the top of `src/app/globals.css`.
- Shared navigation, footer and UI pieces: `src/components/layout/` and `src/components/ui/`.
- Static files (favicons, manifest): `public/`.

## Analytics

Umami (self-hosted at `https://s.wefav.com`). The tracking snippet and website id are in
`src/app/layout.tsx`. The contact form (`src/components/sections/Contact.tsx`) sends
`contact-submit` events.

## SEO

Metadata (Open Graph, Twitter) is in `src/app/layout.tsx`. `robots.txt` and `sitemap.xml`
are generated at build time from `src/app/robots.ts` and `src/app/sitemap.ts`. When you add
a page, add its path to `PATHS` in `sitemap.ts`. The site origin is defined in `src/lib/site.ts`.
