# CV — Ali Hasanov

Static CV site in English (`/`), Russian (`/ru/`) and Azerbaijani (`/az/`), built with Astro.
All text lives in `src/data/cv.ts`.

## Local development

Requires Node 26 (see `.node-version`; Astro needs ≥ 22.23.4).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type check + static build into dist/
npm run preview   # serve dist/
```

## Deploy

The build output is plain static files in `dist/`, so any static host works.

| Host | Setup |
|---|---|
| **Netlify** | Import the repo. `netlify.toml` sets the build; Node comes from `.node-version`; headers from `public/_headers`. |
| **Vercel** | Import the repo. `vercel.json` sets the build and headers. |
| **Cloudflare Pages** | Build command `npm run build`, output `dist`, env `NODE_VERSION=26` and `SITE_URL`. |

### Site address

Canonical URLs, hreflang, Open Graph images and the sitemap need the public address.
It is taken from, in order: `SITE_URL` → Netlify's `URL` → Vercel's `VERCEL_PROJECT_PRODUCTION_URL`.
On a custom domain, set `SITE_URL=https://your-domain` in the host's environment variables.

### After the first deploy

1. Open `https://your-domain/robots.txt` and `/sitemap-index.xml` and check they show the real domain.
2. Add the site to Google Search Console and submit `sitemap-index.xml`.
3. Check link previews with the [Open Graph debugger](https://www.opengraph.xyz/) or by sending the link in Telegram.

### Updating preview images

`public/og/{en,ru,az}.png` (1200×630) are static images with the name and role.
Regenerate them if the name, role or photo changes.
