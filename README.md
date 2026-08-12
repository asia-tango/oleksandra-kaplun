# Oleksandra Kaplun — portfolio

Personal portfolio and landing page. One page, scroll-based, built to try out a fully zoneless Angular stack end to end rather than to ship a lot of features.

**Live:** https://oleksandra-kaplun.web.app

## Stack

- Angular 21, standalone components, zoneless (no `zone.js` dependency at all)
- Signals for all local and service state
- Signal Forms (`@angular/forms/signals`) for the contact form
- Custom i18n service on signals — no ngx-translate/Transloco
- `@emailjs/browser` for the contact form, no backend
- View Transitions API for the language switch, with a feature-detected fallback
- `IntersectionObserver`-based scroll-reveal, implemented as a small standalone directive
- `@angular/ssr` build-time prerendering (SSG), deployed as static files to Firebase Hosting

## Key technical decisions

**Zoneless.** The whole app already runs on signals for local/service state, and there's no use of anything that needs zone.js patching (no third-party libraries relying on it, no manual `setTimeout`-driven change detection). Given that, zone.js would only be adding bundle size and a layer of change-detection machinery the app doesn't use.

**Custom i18n instead of a library.** Two languages, no interpolation/pluralization rules beyond what template literals already handle, no lazy-loaded translation bundles needed for a page this size. A `signal<'uk' | 'en'>()` plus a `computed()` dictionary lookup is the whole service — pulling in ngx-translate or Transloco for that would be adding a dependency and its own change-detection integration to solve a problem that's already solved.

**Honeypot instead of reCAPTCHA.** No third-party script, no CSP relaxation to allow it, no consent/privacy implications, no extra network request on every page load. A hidden input that real visitors never see or reach by keyboard, checked before the form ever calls EmailJS — it won't stop a targeted attacker, but it kills the generic bot traffic that random contact forms actually get.

**Per-card and per-section `IntersectionObserver` reveal, not a scroll library.** Every element that reveals gets its own directive instance and its own observer — no shared scroll-position math, no dependency on a library's timing assumptions. Where sections need a staggered effect (the three "selected work" cards), that's done as a pure CSS `transition-delay` driven by a `--card-index` custom property rather than a JS-driven stagger timer, so it costs nothing extra at runtime.

**Static hosting, not SSR at runtime.** The single route prerenders at build time via `@angular/ssr`, and Firebase Hosting just serves the resulting HTML. There's no Node server to keep warm, patch, or pay for — appropriate for a page whose content doesn't change per request.

## Accessibility

- All images (hero photo, second photo, testimonial screenshots) have real descriptive `alt` text, not filenames or "image"
- Every scroll-reveal and stagger animation is gated behind `prefers-reduced-motion: no-preference` — with it set to reduce, content is just present, not animated in
- Honeypot rather than reCAPTCHA as the anti-spam approach specifically because it doesn't put a visible challenge or third-party widget in front of a real visitor

## Security notes

- **Honeypot field** on the contact form — filled-in submissions are treated as spam and silently dropped before they ever reach EmailJS
- **CSP with `sha256-` hashes** for Angular's inline hydration/event-replay bootstrap scripts, instead of `'unsafe-inline'`. This is a brittle approach: those hashes are tied to the exact byte content of scripts Angular generates, and a change to the app that alters which DOM events get delegated (adding a new event type Angular didn't previously need to listen for) can change that script and break the hash match — it has to be re-verified against a fresh build before every deploy, not assumed to still be correct
- **No CSRF protection** — deliberate, not an oversight. There's no session/cookie-based auth and no backend of my own; the only outbound write is a client-side call to EmailJS. CSRF tokens don't defend against anything in this architecture
- **No EmailJS domain restriction** on the public key — that's a paid-tier feature. Accepted risk: the free tier's 200 email/month cap is itself a natural ceiling on how much a key leak could be abused for

## Structure

Single route, one page, sections rendered in order by `pages/home`:

- `navbar` — sticky nav, language switch, mobile menu
- `hero` — intro, duotone photo
- `selected-work` — three project cards with staggered reveal
- `focus-areas` — accordion, signal-driven open/closed state
- `photo-quote` — second photo plus a quote
- `testimonials` — horizontal scroll of recommendation screenshots, click to open lightbox
- `contact-footer` — the actual contact form, social links, copyright line

Each section is its own standalone component under `src/app/components/`; shared state (i18n, toast, scroll-reveal) lives under `src/app/core/`.

## Local setup

```
npm install
npm start      # ng serve, http://localhost:4200
npm run build  # ng build — prerenders the single route (SSG) via @angular/ssr
```

`ng build` output lands in `dist/oleksandra-kaplun/browser` as static HTML/CSS/JS — no Node server needed at runtime, that's what gets deployed to Firebase Hosting.

## License

Personal portfolio. Code is not licensed for reuse — all rights reserved.
