# CLAUDE.md — Appropos website

Instructions for Claude Code sessions (and cowboy's pipeline stages) working on
**appropos.ai**, the public marketing site for Appropos.

## What this is

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion, lucide-react
  icons, react-hook-form for the contact form.
- **Static export** (`output: 'export'` in `next.config.ts`) into `out/` — no server
  runtime, no API routes, no `next/image` optimisation (`images.unoptimized`).
- Pages: `src/app/page.tsx` (landing, built from `src/components/sections/*`) and
  `src/app/book/` (booking embed). Root layout and metadata in `src/app/layout.tsx`.
- Analytics: Umami (`https://s.wefav.com/js/site.js`, website id in `layout.tsx`);
  the contact form fires `contact-submit` events. Keep the snippet intact.

## Deploys — merging to `master` ships to production

- **Cloudflare Pages is connected to this GitHub repo** (Workers & Pages app; check run
  "Cloudflare Pages" on every commit). A push to `master` builds and deploys
  **https://appropos.ai** (CNAME → `website-7zb.pages.dev`). Branch pushes get preview
  deploys.
- `wrangler.jsonc` names the Pages project (`website`, output `out/`). `vercel.json` is a
  leftover from the starter template and is not used.
- So: never push anything to `master` that doesn't pass the gate below.

## Gate (must pass before every commit)

```sh
npm ci            # if node_modules is missing
npm run lint      # eslint — must be clean
npm run build     # next build + static export to out/ — must succeed
```

There is no test suite. For a visual change, build, serve `out/` (`npx serve out -l 4310`),
and screenshot the affected page in a headless browser.

## Conventions

- Small, focused changes; imperative, sentence-case commit subjects.
- Don't add dependencies without a reason stated in the plan.
- Keep it static-export-safe: no server actions, no route handlers, no runtime-only APIs.
- SEO metadata lives in `src/app/layout.tsx` (Open Graph, Twitter). Keep it consistent with
  any page you add.

## Forge

This project's backlog is **cowboy's own** (`provider: local`) — there are no GitHub issues
or PRs. Use the commands in the **Forge tooling** block cowboy appends to your prompt to
read items, post notes and edit the MR. Default branch: `master`.
