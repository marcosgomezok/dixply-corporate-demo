# Vaqzeryn corporate website

A bilingual, static Astro website for a fictional B2B consulting firm. English and Spanish pages are generated under `/en/` and `/es/`; contact details are not sent to or stored by the site.

## Development

- `npm install`
- `npm run dev`
- `npm run check`
- `npm run build`

The production site is written to `dist/`.

## Cloudflare Pages

Set the build command to `npm run build` and the output directory to `dist`. No server runtime or adapter is required.

Set the build environment variable `SITE_URL` to the deployed site origin (for example, `https://your-project.pages.dev`) so canonical and language-alternate URLs use the deployment's public host. The fallback host is reserved for examples.
