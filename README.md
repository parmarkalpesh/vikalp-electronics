# Vikalp Electric & Refrigeration — Vercel edition

This is a database-free Next.js copy of the public Vikalp website. The service form prepares a WhatsApp message containing the visitor's name, mobile number, locality, selected service, request type, optional preferred date and problem details. The visitor reviews it and taps **Send** in WhatsApp. The website does not receive a delivery confirmation or save new enquiries.

## Local checks

```bash
npm ci
npm run test:whatsapp
npm run build
npm run dev
```

The pages, service guides, sitemap, robots file, metadata and JSON-LD use ordinary Next.js. There are no Cloudflare Worker imports, D1 bindings, API routes or private inbox in this copy. Older enquiries remain in the previous Sites project's owner-only inbox; that data is not included here or deleted.

## Vercel deployment

1. Push this folder (`D:\Vikalp-Website\vikalp-vercel`) to an owner-controlled Git repository and import that repository in Vercel, or run the official Vercel CLI from this folder after signing into the owner's account. Choose the existing Vikalp project only if the owner controls it.
2. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before the production build, for example `https://vikalp-electronics.vercel.app` **only if that Vercel project belongs to Vikalp and will serve this site**. This sets canonical links, sitemap URLs and business schema URLs. If unset, the app uses Vercel's production project URL when provided; local builds fall back to the supplied older Vercel URL.
3. Deploy a preview first and inspect `/`, `/services/ac-service-jamnagar`, `/guides`, `/sitemap.xml`, `/robots.txt`, the form, and the WhatsApp handoff. Check that no preview deployment is indexed as the canonical production site.
4. After the production domain is confirmed, update the Google Business Profile website link and verify the new URL-prefix property in Search Console. Submit the new sitemap. Set permanent redirects from any previous public domain only where domain control permits; avoid leaving duplicate sites with competing canonicals.

No database or storage service needs to be connected for this Vercel copy. WhatsApp opens a draft message; delivery depends on the visitor tapping Send in WhatsApp.
