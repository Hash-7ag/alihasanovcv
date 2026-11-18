// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Public address of the CV: canonical URLs, hreflang, Open Graph, sitemap and robots.txt depend on it.
// SITE_URL wins; otherwise the host's own production URL is used (Netlify: URL, Vercel: VERCEL_PROJECT_PRODUCTION_URL).
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
const site = process.env.SITE_URL || process.env.URL || (vercel ? `https://${vercel}` : undefined)

if (!site) console.warn('[cv] SITE_URL is not set: canonical, hreflang, og:url and sitemap are skipped.')

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  integrations: site
    ? [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ru: 'ru', az: 'az' } }, filter: page => !page.includes('404') })]
    : [],
  security: {
    // Content-Security-Policy <meta> with hashes for every script and style Astro emits.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'none'",
        "object-src 'none'",
      ],
    },
  },
})
