# Strategic divorce coaching landing page

A local, self-contained landing page. The complete implementation is in `index.html`, with inline responsive CSS, an embedded Manrope variable font, and the supplied `image01.jpg` embedded as the hero portrait. No JavaScript, framework, external font requests, analytics, or form data collection is required. It also works when opened directly from the filesystem.

## Preview

From this folder, run:

```powershell
npm start
```

Open http://127.0.0.1:4173. No dependency installation or build is needed. The preview server listens on the local loopback interface only. Stop it with Ctrl+C. To use another port, set the `PORT` environment variable before starting.

## Booking

All three “Book a discovery call” links point to the supplied destination:
https://cal.com/divorcebusinesscoach/50

To change the destination, replace that URL in the three `href` attributes in `index.html`. Booking happens on Cal.com; this page does not collect or submit visitor data.

## Design contract

- Purpose: help men going through divorce understand practical coaching and book a discovery call.
- Direction: modern Manrope typography with a palette drawn from the hero portrait: warm red accents, charcoal text and panels, wine, and soft ivory. A faint static SVG dot texture runs across the shared page canvas. Body copy is 18px on desktop and 16px on mobile, with selective larger text for emphasis. Rounded 14px booking buttons have generous padding, hover feedback, and visible keyboard focus.
- Composition: a balanced hero pairing the existing copy with the supplied portrait in a rounded frame; a centered problem reading column; an inset charcoal approach panel; open conversation rows with red number markers; an inset light checklist card; two open hesitation paragraphs with warm accent rules; and an inset wine closing panel with a contrasting ivory button. Section elements stay transparent, so there are no full-width background bands.
- Responsive behavior: columns stack on small screens; readable spacing, line lengths, and touch targets remain. Motion is limited to button hover color and disabled for reduced-motion preferences.
- Finish conditions: exact supplied headings, paragraphs, bullets, and CTA labels, in order; three working booking destinations; keyboard focus; no horizontal overflow at 375px or 1440px; no invented proof, navigation, repetitive cards, stock photography, product mockups, or extra offers.

## Assets and editorial handoff

No additional assets or integrations are required to view this page or use its supplied booking links. The user supplied `image01.jpg` for the hero. Its original bytes are embedded unchanged, with responsive CSS cropping that keeps the face and microphone visible. No brand identifier, video, proof, or legal footer was supplied; these are omitted.

Manrope is embedded from the [Google Fonts Manrope source](https://github.com/google/fonts/tree/main/ofl/manrope). Its SIL Open Font License and copyright notice are included in `FONT-LICENSE.txt`; retain this license when distributing the implementation.

Before public use, review the two audience hesitation hypotheses with the client and confirm the wording that compares emotional support with practical coaching. Credentials, coaching structure, pricing, call details, and proof remain absent because they were not approved in the brief. The final supplied copy is preserved; internal strategy and writer notes are not rendered.

Nothing has been published or hosted through ChatGPT or Sites.

## Verification

Rendered in Chromium at 375px and 1440px and inspected the mobile and desktop layouts. Additional layout checks passed at 320px and 768px. There is no horizontal overflow; the hero booking action is visible in the initial viewport at the tested sizes. All supplied headings, paragraphs, list items, and button labels match the brief in their original order.

All three booking links use the supplied URL. Keyboard tab order and visible focus, button hover feedback, reduced-motion behavior, and navigation to the booking destination passed. Text and button color pairs exceed 4.5:1 contrast. The embedded Manrope font loads, body text is 18px on desktop and 16px on mobile, and CTA corners are 14px. The page was checked with JavaScript disabled and directly from the filesystem with the browser offline. The supplied hero portrait was verified at 375px and 1440px, with successful image loading and no horizontal overflow. No booking was submitted.
