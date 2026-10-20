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

- Existing SpicyCalc pepper-and-calculator logo, upright in the header and hero
- Feature switcher for calculation, wellness tracking, and personal records
- Native FAQ disclosure controls
- Direct section scrolling that works in downloadable previews
- App Store, privacy, terms, support, and verified https://ocoeestudios.com/ links

This is a marketing site, not a live calculator. It does not offer dosing advice or accept health information. The branded artwork is not an app screenshot.

Pricing is deliberately deferred to the App Store: the public listing, main-branch draft metadata, and planned paid-download update differ. Do not add a free-trial, lifetime-IAP, or paid-download price claim until the intended public offering is confirmed. Newer app features such as research-feed changes and backup additions are not promised on this site before release confirmation.

Content grounding (October 19, 2026):
- https://apps.apple.com/us/app/spicycalc/id6784360950
- `ocoee-studios/spicy-calc`: `APP_STORE_LISTING.md`, `src/lib/theme.ts`, `assets/logo-512.png`
- https://ocoee-studios.github.io/spicy-calc-legal/

## Verification

JavaScript syntax, feature-switcher and keyboard behavior, direct section-navigation behavior, local assets, anchor targets, unique IDs, and link destinations are checked. Browser layout QA and the actual Podman/Nginx container build still require Alex's environment; this workspace has no supported browser or container runtime. Validate the deployed domain and HTTPS after routing.

Original branding and artwork are owned by Ocoee Studios LLC.
