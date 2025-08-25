# EAA Whitepaper Site (EN/FR)

A bilingual, dependency‑free, static site to publish an enterprise‑grade whitepaper for the **European Accessibility Act (Directive (EU) 2019/882)**.  
Includes: executive summary, legal basis (EUR‑Lex), harmonized standards, **EN 301 549 ⇄ WCAG** mapping, front‑end patterns with code, sector use cases (e‑commerce, banking, transport, media), enterprise blueprint, and an AA checklist.  

## Files
- `index.html` — content & structure with i18n placeholders (data‑i18n).
- `styles.css` — clean CSS in one file (vars, layout, a11y focus).
- `app.js` — language switch (EN/FR), dynamic email `mailto:` subject/body, copy‑email helper.
- `README.md` — this file.

## Run locally
Just open `index.html` in a browser — no build, no dependencies.

## Legal basis
- EUR‑Lex: Directive (EU) 2019/882 — https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882
- Harmonized ICT standard: EN 301 549 v3.2.1 (aligns with WCAG 2.1)

## Accessibility notes
- Visible skip link, proper landmarks, strong focus styles.
- High‑contrast callouts use `brand2` copper; hero uses `brand1→brand3` gradient.
- Avoid color‑only cues; ensure 4.5:1 text / 3:1 UI contrast; test keyboard + 200% zoom.
