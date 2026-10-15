# Rob Allen landing page

A Next.js App Router landing page for Rob Allen's strategic divorce coaching. The approved charcoal-and-peach design includes headline highlights, a hero portrait, and a Meet Rob section with the supplied biography and a background-removed portrait.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Then open http://localhost:3000. No Python runtime is used.

To check the production build locally:

```sh
npm run build
npm start
```

## Booking

All three booking buttons link to https://cal.com/divorcebusinesscoach/50. Pricing is not shown on the landing page.

## Deploy

The repository is connected to the Vercel project `roballen`. Changes pushed to `main` trigger production deployments. `vercel.json` explicitly selects the Next.js framework, runs `npm ci`, and builds with `npm run build`.

The page lives in `app/page.jsx`, metadata in `app/layout.jsx`, and styles in `app/globals.css`. Images and local fonts are served from `public/`. The font license is included in `Outfit-OFL.txt`. The original photograph is `public/image01.jpg`, and the Meet Rob portrait is `public/assets/rob-cutout-v1.png`.

Existing `/index.html` links permanently redirect to `/`.

## Remaining integrations

Email capture, email nurture automation, analytics, and conversion tracking are not configured. Appointment scheduling is handled on Cal.com.

Local preview screenshots, verification reports, and the unused booking demo are excluded from version control.
