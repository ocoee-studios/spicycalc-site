# SpicyCalc website

Official marketing website for **spicycalc.com**, by Ocoee Studios LLC. Static HTML, CSS, and JavaScript. No build step, backend, database, API key, location request, or analytics script.

## Run locally

```bash
python3 -m http.server 8080 --directory site
```

Open http://localhost:8080. The development server does not apply Nginx headers.

## Podman and Cloudflare Tunnel

See [Alex's deployment handoff](deploy/DEPLOYMENT.md). The origin binds to **127.0.0.1:8082** and the container listens on **8080**. Auralunis uses host port 8081, so the two sites can coexist. Each site has its own container and tunnel hostname routes. No DNS or VPS changes have been made.

## Website content

- Existing SpicyCalc pepper-and-calculator logo in the header, with real app screenshots in the hero and feature sections
- Feature switcher for calculation, wellness tracking, and personal records
- Native FAQ disclosure controls
- Direct section scrolling that works in downloadable previews
- App Store, privacy, terms, support, and verified https://ocoeestudios.com/ links

This is a marketing site, not a live calculator. It does not offer dosing advice or accept health information. The product screenshots are downloaded from the official public App Store listing, without invented app UI. Their source URLs are retained in `deploy/screenshot-sources.json`.

Pricing is deliberately deferred to the App Store: the public listing, main-branch draft metadata, and planned paid-download update differ. Do not add a free-trial, lifetime-IAP, or paid-download price claim until the intended public offering is confirmed. The screenshots depict the published App Store screens; website copy avoids promising unconfirmed planned features.

Content grounding (October 19, 2026):
- https://apps.apple.com/us/app/spicycalc/id6784360950
- `ocoee-studios/spicy-calc`: `APP_STORE_LISTING.md`, `src/lib/theme.ts`, `assets/logo-512.png`
- https://ocoee-studios.github.io/spicy-calc-legal/

## Verification

JavaScript syntax, feature-switcher and keyboard behavior, direct section-navigation behavior, local assets, anchor targets, unique IDs, and link destinations are checked. Browser layout QA and the actual Podman/Nginx container build still require Alex's environment; this workspace has no supported browser or container runtime. Validate the deployed domain and HTTPS after routing.

Original branding and artwork are owned by Ocoee Studios LLC.

## Feature and background update

The footer now uses the actual logo. A low-opacity stationary logo sits behind the scrolling content. The expanded feature inventory is grounded in CalculatorScreen, BlendStudioScreen, ClassroomScreen, MoreScreen, ExportsScreen, PrivacyVaultScreen, and the app screen inventory. Academy is the website learning category; app versions may label this Education or Lab Math Concepts. No exact peptide count, scientific claim, or recommended dosing protocol is advertised.
