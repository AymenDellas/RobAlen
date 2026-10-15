# Rob Allen landing page

A static, responsive landing page for Rob Allen's strategic divorce coaching. The approved charcoal-and-peach design includes headline highlights, a hero portrait, and a Meet Rob section with the supplied biography and a background-removed portrait.

## Run locally

Open `index.html` directly, or serve the project directory:

```sh
python -m http.server 3015 --bind 127.0.0.1
```

Then open http://127.0.0.1:3015/index.html.

## Booking

All three booking buttons link to https://cal.com/divorcebusinesscoach/50. Pricing is not shown on the landing page.

## Deploy

Publish the repository root with any static website host. No build command or package installation is required. Include `index.html`, `image01.jpg`, and the `assets` directory. Pushing to GitHub alone does not configure hosting or a custom domain.

Fonts are embedded in `index.html`; their license is included in `Outfit-OFL.txt`. The original photograph is `image01.jpg`, and the Meet Rob portrait is `assets/rob-cutout-v1.png`.

## Remaining integrations

Email capture, email nurture automation, analytics, and conversion tracking are not configured. Appointment scheduling is handled on Cal.com.

Local preview screenshots, verification reports, and the unused booking demo are excluded from version control.
