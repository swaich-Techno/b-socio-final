# B Socio

Stable Vercel-ready public website for **B Socio**.

Tagline: **Be Seen. Be Social.**

## What This Version Is

This is the emergency final upload version made to load reliably on Vercel. It keeps the public agency website, services pages, QR/AR Studio page, contact links, and login/portal structure without heavy client-side dashboard bundles on the public homepage.

## Upload To GitHub

Upload everything inside this folder to GitHub.

Do not upload:

- `.env`
- `.env.local`
- `.next`
- `node_modules`
- `.vercel`

## Deploy On Vercel

1. Import the GitHub repo in Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Output directory: leave blank.
5. Add environment variables from `.env.example`.
6. Deploy.
7. Add the domain `bsocio.in` and `www.bsocio.in`.

## Contact

The contact page uses direct links:

- Email: `connect@bsocio.in`
- WhatsApp: `https://wa.me/919781580475`

The optional `/api/contact` route saves leads to MongoDB if `MONGODB_URI` is configured.
