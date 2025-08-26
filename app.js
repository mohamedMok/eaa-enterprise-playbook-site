/* Simple i18n + CTA helpers */
(function () {
  const t = {
    en: {
      "site.title":
        "European Accessibility Act (EAA) — Enterprise Guide to Compliance",
      "ui.skip": "Skip to main content",
      "nav.exec": "Executive Summary",
      "nav.act": "The Act",
      "nav.norms": "Norms",
      "nav.tech": "Tech Mapping",
      "nav.frontend": "Front‑end",
      "nav.usecases": "Use cases",
      "nav.blueprint": "Blueprint",
      "nav.checklist": "Checklist",
      "nav.contact": "Contact",
      "hero.title": "European Accessibility Act — the enterprise playbook",
      "hero.tagline":
        "Practical guidance, EN 301 549 ↔ WCAG alignment, a rollout blueprint, sector examples, and copy-paste front-end code.",
      "hero.note": "Built for large organizations. Bilingual (EN/FR).",
      "cta.email": "Email me for consulting",
      "cta.basis": "Read the legal basis (EUR‑Lex)",
      "cta.copy": "Copy my email",
      "exec.h": "Executive summary",
      "exec.p1":
        "The European Accessibility Act (Directive (EU) 2019/882) sets functional accessibility requirements for key digital products and services (consumer ICT, self‑service terminals, electronic communications including 112, AVMS access, passenger transport digital elements, banking, e‑books, e‑commerce). Transposition was due on 28 June 2022; application on 28 June 2025; transitional measures until 28 June 2030 for services relying on products already in operation; self‑service terminals may remain until end of economic life (max 20 years).",
      "exec.k1": "Application date",
      "exec.k2": "Service transition period",
      "exec.k3": "Self‑service kiosks",
      "exec.note":
        "Presumption of conformity: comply with harmonized standards (e.g., EN 301 549). EN 301 549 largely aligns to WCAG 2.1; adopting WCAG 2.2 improves robustness.",
      "act.h": "The Act — in plain words, still rigorous",
      "act.p1":
        "The EAA focuses on functional outcomes (Annex I): perceivability, operability (keyboard), understandability, and assistive technology compatibility. Obligations include EU Declaration of Conformity, CE marking (for products), market surveillance, and public information. Derogations (disproportionate burden, fundamental alteration) must be documented and remain auditable.",
      "act.p2":
        "For services, keep the public informed (Annex V) and maintain compliance over time. For products, maintain technical documentation and traceability. Large organizations should implement at scale and embed accessibility into procurement, design systems, and CI/CD.",
      "norms.h": "Harmonized standards & presumption",
      "norms.p1":
        "Harmonized standards published in the EU Official Journal give presumption of conformity. For ICT, EN 301 549 (v3.2.1) covers web, apps, documents, software, and equipment, and strongly references WCAG 2.1. Many teams also adopt WCAG 2.2 to future‑proof without breaking alignment.",
      "norms.w3c": "W3C essentials",
      "tech.h": "Technical mapping — EN 301 549 ⇄ WCAG (POUR)",
      "tech.intro":
        "This quick map shows what to design, build and test. Click any SC number to open the official W3C “Understanding” page.",
      "tech.b1":
        '<strong>Semantic structure</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html">1.3.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html">1.3.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html">2.4.6</a> — headings, lists, tables, explicit relationships.',
      "tech.b2":
        '<strong>Navigation / bypass</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html">2.4.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html">2.4.3</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html">2.4.4</a> — skip link, focus order, link purpose.',
      "tech.b3":
        '<strong>Keyboard & focus</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html">2.1.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html">2.1.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html">2.4.7</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">2.5.8</a> (WCAG 2.2) — operable with keyboard, visible focus, target size.',
      "tech.b4":
        '<strong>Color & contrast</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">1.4.3</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html">1.4.11</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html">1.4.10</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">1.4.1</a> — readable text, 320 px reflow, no color-only cues.',
      "tech.b5":
        '<strong>Images & media</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">1.1.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html">1.2.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html">1.2.5</a> — alt text, captions, audio description.',
      "tech.b6":
        '<strong>Forms</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html">3.3.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html">3.3.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">1.3.5</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html">3.3.7</a> (WCAG 2.2), <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html">3.3.8</a> (WCAG 2.2) — labels, help, errors, autocomplete, less repetition, easier auth.',
      "tech.b7":
        '<strong>Robustness</strong>: <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html">4.1.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html">4.1.3</a> — name/role/value, status messages.',
      "fe.h": "Front‑end tips (copy‑paste‑able)",
      "fe.skip": "1) Skip link & landmarks",
      "fe.skip.explain":
        'The skip link lets keyboard users jump straight to the main content (Tab). Place it first in the page, make it visible on focus, and point it to <code>&lt;main id="main"&gt;</code>. Use clear landmarks too: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.',
      "fe.focus": "2) Visible focus (tokenized)",
      "fe.alt": "3) Images: the right alt",
      "fe.links": "4) Buttons, links, accessible name",
      "fe.forms": "5) Checkout forms (e‑commerce)",
      "fe.focus.explain":
        "Keep the focus ring visible and consistent across components. Use tokens so themes can change colors without breaking contrast. Never remove outlines; enhance them. Add a fallback for high-contrast mode.",
      "fe.alt.explain":
        "Use empty alt for decorative images. For informative images, describe what matters. For complex charts, keep the alt short and add a caption or a data table.",
      "fe.links.explain":
        "Use a <code>&lt;button&gt;</code> for actions and a <code>&lt;a&gt;</code> for navigation. The accessible name should match the visible label. Avoid generic text like “Click here”.",
      "fe.forms.explain":
        'Always pair inputs with visible labels, help text via <code>aria-describedby</code>, and clear errors announced with <code>role="alert"</code>. Use <code>autocomplete</code> tokens so browsers can assist.',
      "uc.h": "Use cases & enterprise contexts",
      "uc.ec.h": "E‑commerce",
      "uc.ec.b1":
        "Product cards: real buttons/links; color + icon, not color only.",
      "uc.ec.b2":
        "Facet filters: checkbox groups with group label; live region for result counts.",
      "uc.ec.b3":
        "Cart & checkout: labels, errors, address autocomplete with proper hints; clear button names.",
      "uc.bank.h": "Banking",
      "uc.bank.b1": "Strong focus states; no keyboard traps in OTP/2FA flows.",
      "uc.bank.b2":
        "Statements/downloads: provide accessible HTML or tagged PDFs.",
      "uc.bank.b3":
        "Charts: provide tables and text summaries; non‑color cues.",
      "uc.transport.h": "Passenger transport",
      "uc.transport.b1":
        "Timetables: proper table headers (scope), clear real‑time status with live regions.",
      "uc.transport.b2":
        "Ticketing flows: keyboard operable seat maps; focus management between steps.",
      "uc.transport.b3":
        "Kiosks: target size ≥ 24×24 px; high contrast; audio/tactile options.",
      "uc.media.h": "AVMS / Media",
      "uc.media.b1":
        "Captions by default; audio description where needed; keyboard media controls.",
      "uc.media.b2": "Avoid autoplay; provide transcript.",
      "uc.media.b3": "Player buttons with accessible names; visible focus.",
      "bp.h": "90‑day enterprise blueprint",
      "bp.s1":
        "Governance: executive sponsor, policy, product owner, accessibility lead, risk & KPIs.",
      "bp.s2":
        "Design system: tokens (colors, focus, target sizes), APG‑compliant components, docs.",
      "bp.s3":
        "CI/CD: a11y lint, axe‑core/pa11y/jest‑axe, visual tests, contrast budgets, PR reports.",
      "bp.s4":
        "Audits: manual keyboard/AT, representative sample, prioritized fixes.",
      "bp.s5":
        "Vendors: EN 301 549/WCAG clauses, VPAT/EN 301 549 report, remediation SLAs, audit rights.",
      "bp.s6":
        "Training & change: upskill designers/devs/PO/QA; coaching; communities of practice.",
      "cl.h": "AA checklist",
      "cl.i1": "H1 only once; logical H2/H3; no skipped levels.",
      "cl.i2": "Skip link; landmarks <main>/<nav> etc.",
      "cl.i3": "Full keyboard navigation; focus always visible.",
      "cl.i4": "Links with meaningful text; no “click here”.",
      "cl.i5": "Images: good alt; decorative as empty alt.",
      "cl.i6": "Contrast (text ≥ 4.5:1; UI ≥ 3:1); strong :focus.",
      "cl.i7": "Forms: labels, help, errors, ARIA status, autocomplete.",
      "cl.i8": "Reflow at 320 px; 200% zoom; no horizontal scroll.",
      "cl.i9": "Document language; mark language changes.",
      "cl.i10": "Downloadable docs accessible or HTML alternative.",
      "cl.i11": "Public accessibility statement + feedback channel.",
      "cl.h": "AA checklist",
      "cl.intro":
        "Tick each item as you verify it. Tips explain how to test. Links open the official W3C guidance.",
      "cl.note": "Your checks are saved locally in this browser only.",
      "cl.reset": "Reset checklist",

      "cl.i1.label": "Headings: one H1; H2/H3 in order; no skipped levels.",
      "cl.i1.how": "Test: open the headings list (NVDA: Insert+F7 → Headings).",

      "cl.i2.label": "Skip link; landmarks <main>/<nav> etc.",
      "cl.i2.how":
        "Test: Tab once from top → skip link appears and jumps to <main>.",

      "cl.i3.label": "Full keyboard navigation; focus always visible.",
      "cl.i3.how":
        "Test: Tab/Shift+Tab; arrow keys in menus; Esc closes dialogs; no traps.",

      "cl.i4.label": "Links have meaningful text; avoid “Click here”.",
      "cl.i4.how":
        "Test: links make sense out of context (NVDA: Insert+F7 → Links).",

      "cl.i5.label": "Images: correct alt; decorative images use empty alt.",
      "cl.i5.how":
        'Test: decorative = alt=""; informative = short, relevant description.',

      "cl.i6.label": "Contrast: text ≥ 4.5:1; UI ≥ 3:1; strong focus ring.",
      "cl.i6.how":
        "Test: use a contrast checker; verify focus ring contrast in light/dark themes.",

      "cl.i7.label":
        "Forms: labels, help, errors, status messages, autocomplete.",
      "cl.i7.how":
        "Test: labels are announced; errors appear and are read; use autocomplete.",

      "cl.i8.label": "Reflow at 320 px; 200% zoom; no horizontal scroll.",
      "cl.i8.how":
        "Test: narrow viewport to 320 px; zoom to 200%—content still works.",

      "cl.i9.label": "Document language; mark language changes.",
      "cl.i9.how":
        'Test: <html lang="…"> is set; foreign terms wrapped with lang.',

      "cl.i10.label":
        "Downloadable docs are accessible or have an HTML alternative.",
      "cl.i10.how":
        "Test: tagged PDFs or accessible formats; otherwise link to an equivalent HTML page.",

      "cl.i11.label": "Public accessibility statement + feedback channel.",
      "cl.i11.how":
        "Test: link in the footer; form or email to report issues; response time documented.",
      "contact.h": "Consulting — let’s talk",
      "contact.p":
        "I hope this guide helps. If you’d like tailored, enterprise-grade support to deliver the EAA with confidence, I’d love to speak with you.",
      "contact.cta.cal": "Book a 30-min consulting session",
      "contact.cta.mail": "Prefer email? Write to me",
      "contact.note":
        "No commitment: we’ll review your context, outline a pragmatic plan, and share quick wins you can ship immediately.",
      "foot.legal":
        "References: Directive (EU) 2019/882; EN 301 549 v3.2.1; WCAG 2.2 / WAI‑ARIA 1.2.",
      "reason.h": "Why this directive? What the EU aims for",
      "reason.p":
        "In short: <strong>make the single market accessible to everyone</strong> and <strong>consistent across countries</strong>. The EAA closes regulatory gaps, gives businesses legal clarity, and ensures services are usable by as many people as possible, including disabled and older people.",
      "reason.li1":
        "<strong>Equal access</strong>: enable everyone to use essential services (e-commerce, banking, transport, media, communications).",
      "reason.li2":
        "<strong>Harmonization</strong>: the same requirements across the EU, less fragmentation and lower multi-country compliance costs.",
      "reason.li3":
        "<strong>Innovation & competition</strong>: common standards → interoperable solutions, lower costs, a more competitive ecosystem.",
      "reason.li4":
        "<strong>Economic & social impact</strong>: more autonomy, employment and civic participation for millions of Europeans.",
      "reason.li5":
        "<strong>Sustainability</strong>: accessibility kept over time, including during updates and redesigns.",
      "reason.card.h": "What the EU expects in practice",
      "reason.card.li1":
        "<strong>Build accessibility by design</strong> into products and services (not just at the end).",
      "reason.card.li2":
        "<strong>Align with harmonized standards</strong> (e.g., EN 301 549 ⇄ WCAG) to benefit from presumption of conformity.",
      "reason.card.li3":
        "<strong>Maintain compliance over time</strong> (keyboard/AT tests, reflow, contrast, CI/CD non-regression).",
      "reason.card.li4":
        "<strong>Inform the public</strong>: publish an accessibility statement and provide a feedback channel.",
      "reason.card.li5":
        "<strong>Provide evidence</strong> for audits: technical documentation, version history and fix traceability.",
      "reason.card.li6":
        "<strong>Controlled derogations</strong>: only for disproportionate burden or fundamental alteration, with written justification.",
      "reason.outcome":
        "Expected outcome: digital experiences <strong>usable by everyone</strong>, fewer legal surprises for companies, and lower costs thanks to harmonization.",
    },
    fr: {
      "site.title":
        "European Accessibility Act (EAA) — Livre blanc pour grands groupes",
      "ui.skip": "Aller au contenu principal",
      "nav.exec": "Résumé exécutif",
      "nav.act": "La directive",
      "nav.norms": "Normes",
      "nav.tech": "Cartographie tech",
      "nav.frontend": "Front‑end",
      "nav.usecases": "Cas d’usage",
      "nav.blueprint": "Blueprint",
      "nav.checklist": "Checklist",
      "nav.contact": "Contact",
      "hero.title":
        "European Accessibility Act — le playbook des grands groupes",
      "hero.tagline":
        "Des règles claires, la cartographie EN 301 549 ⇄ WCAG, un plan de déploiement, des exemples sectoriels et du code front‑end prêt à l’emploi.",
      "hero.note":
        "Pensé pour les grands groupes. Bilingue (FR/EN). Zéro dépendance.",
      "cta.email": "M’écrire pour une mission conseil",
      "cta.basis": "Lire la base légale (EUR‑Lex)",
      "cta.copy": "Copier mon e‑mail",
      "exec.h": "Résumé exécutif",
      "exec.p1":
        "L’European Accessibility Act (Directive (UE) 2019/882) définit des exigences d’accessibilité pour des produits et services numériques clés (informatique grand public, bornes, communications électroniques dont 112, accès AVMS, éléments numériques du transport de passagers, banque, e‑books, e‑commerce). Transposition au 28 juin 2022 ; application au 28 juin 2025 ; dispositions transitoires jusqu’au 28 juin 2030 pour des services utilisant des produits déjà en service ; les bornes peuvent rester jusqu’à la fin de leur vie économique (max 20 ans).",
      "exec.k1": "Date d’application",
      "exec.k2": "Période transitoire (services)",
      "exec.k3": "Bornes libre‑service",
      "exec.note":
        "Présomption de conformité : respecter les normes harmonisées (ex. EN 301 549). EN 301 549 s’aligne largement sur WCAG 2.1 ; adopter WCAG 2.2 renforce la robustesse.",
      "act.h": "La directive — claire et rigoureuse",
      "act.p1":
        "L’EAA vise des résultats fonctionnels (Annexe I) : perceptibilité, utilisabilité (clavier), compréhensibilité, compatibilité technologies d’assistance. Obligations : Déclaration UE de conformité, marquage CE (produits), surveillance du marché, information du public. Les dérogations (charge disproportionnée, altération fondamentale) doivent être documentées et restent auditables.",
      "act.p2":
        "Côté services : informer le public (Annexe V) et maintenir la conformité dans le temps. Côté produits : documentation technique et traçabilité. Les grands groupes doivent industrialiser : achats, design systems, CI/CD.",
      "norms.h": "Normes harmonisées & présomption",
      "norms.p1":
        "Les normes harmonisées publiées au JOUE confèrent une présomption de conformité. Pour les TIC, EN 301 549 (v3.2.1) couvre web, apps, documents, logiciels et équipements, et s’appuie fortement sur WCAG 2.1. Beaucoup adoptent aussi WCAG 2.2 pour se prémunir sans rompre l’alignement.",
      "norms.w3c": "Incontournables W3C",
      "tech.h": "Cartographie technique — EN 301 549 ⇄ WCAG (POUR)",
      "tech.intro":
        "Cette carte rapide indique quoi concevoir, développer et tester. Cliquez sur un numéro pour ouvrir la page « Understanding » du W3C.",
      "tech.b1":
        '<strong>Structure sémantique</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html">1.3.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html">1.3.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html">2.4.6</a> — titres, listes, tableaux, relations explicites.',
      "tech.b2":
        '<strong>Navigation / évitement</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html">2.4.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html">2.4.3</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html">2.4.4</a> — lien d’évitement, ordre de focus, intitulé des liens.',
      "tech.b3":
        '<strong>Clavier & focus</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html">2.1.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html">2.1.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html">2.4.7</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">2.5.8</a> (WCAG 2.2) — navigation au clavier, focus visible, taille des cibles.',
      "tech.b4":
        '<strong>Couleur & contraste</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">1.4.3</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html">1.4.11</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html">1.4.10</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html">1.4.1</a> — lisibilité, reflow 320 px, pas la couleur seule.',
      "tech.b5":
        '<strong>Images & médias</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html">1.1.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html">1.2.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html">1.2.5</a> — alt, sous-titres, audio-description.',
      "tech.b6":
        '<strong>Formulaires</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html">3.3.1</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html">3.3.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html">1.3.5</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html">3.3.7</a> (WCAG 2.2), <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html">3.3.8</a> (WCAG 2.2) — labels, aides, erreurs, autocomplete, moins de répétition, authentification plus simple.',
      "tech.b7":
        '<strong>Robustesse</strong> : <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html">4.1.2</a>, <a target="_blank" rel="noopener" href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html">4.1.3</a> — Nom/Rôle/Valeur, messages d’état.',
      "fe.h": "Conseils front‑end",
      "fe.skip": "1) Skip link & repères",
      "fe.skip.explain":
        'Le skip link permet d’aller directement au contenu principal au clavier (Tab). Place-le en premier, rends-le visible au focus et pointe vers <code>&lt;main id="main"&gt;</code>. Utilise aussi des repères clairs : <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.',
      "fe.focus": "2) Focus visible (tokenisé)",
      "fe.alt": "3) Images : le bon alt",
      "fe.links": "4) Boutons, liens, nom accessible",
      "fe.forms": "5) Formulaires de paiement (e‑commerce)",
      "fe.focus.explain":
        "Gardez un anneau de focus visible et cohérent entre les composants. Utilisez des tokens pour préserver le contraste quand on change de thème. Ne supprimez pas le contour ; améliorez-le. Prévoyez un fallback pour le mode contraste élevé.",
      "fe.alt.explain":
        "Utilisez un alt vide pour les images décoratives. Pour les images informatives, décrivez l’essentiel. Pour les graphiques complexes, gardez un alt court et ajoutez une légende ou un tableau de données.",
      "fe.links.explain":
        "Utilisez un <code>&lt;button&gt;</code> pour les actions et un <code>&lt;a&gt;</code> pour la navigation. Le nom accessible doit correspondre au libellé visible. Évitez les libellés génériques comme « Cliquez ici ».",
      "fe.forms.explain":
        'Associez toujours les champs à des labels visibles, des aides via <code>aria-describedby</code>, et des erreurs claires annoncées avec <code>role="alert"</code>. Utilisez les attributs <code>autocomplete</code> pour aider l’utilisateur.',
      "uc.h": "Cas d’usage & contextes",
      "uc.ec.h": "E‑commerce",
      "uc.ec.b1":
        "Cartes produit : vrais boutons/liens ; couleur + icône, pas couleur seule.",
      "uc.ec.b2":
        "Facettes : groupes de cases à cocher avec libellé de groupe ; zone live pour le nombre de résultats.",
      "uc.ec.b3":
        "Panier & checkout : labels, erreurs, adresse avec aides ; libellés de boutons clairs.",
      "uc.bank.h": "Banque",
      "uc.bank.b1": "Focus bien visible ; pas de pièges clavier en OTP/2FA.",
      "uc.bank.b2":
        "Relevés/téléchargements : fournir HTML accessible ou PDF balisés.",
      "uc.bank.b3":
        "Graphiques : prévoir tableaux & résumés ; pas la couleur seule.",
      "uc.transport.h": "Transport de passagers",
      "uc.transport.b1":
        "Horaires : bons en‑têtes de tableau (scope), statut en temps réel via live regions.",
      "uc.transport.b2":
        "Billetterie : plans de sièges pilotables au clavier ; gestion du focus entre étapes.",
      "uc.transport.b3":
        "Bornes : cibles ≥ 24×24 px ; contraste fort ; options audio/tactiles.",
      "uc.media.h": "AVMS / Média",
      "uc.media.b1":
        "Sous‑titres par défaut ; audio‑description si nécessaire ; contrôles clavier.",
      "uc.media.b2": "Éviter l’autoplay ; fournir une transcription.",
      "uc.media.b3": "Boutons du lecteur nommés correctement ; focus visible.",
      "bp.h": "Blueprint 90 jours",
      "bp.s1":
        "Gouvernance : sponsor exécutif, politique, PO, accessibility lead, risques & KPIs.",
      "bp.s2":
        "Design system : tokens (couleurs, focus, cibles), composants APG, docs.",
      "bp.s3":
        "CI/CD : lint a11y, axe‑core/pa11y/jest‑axe, tests visuels, budgets de contraste, rapports PR.",
      "bp.s4":
        "Audits : clavier/TA manuels, échantillon représentatif, correctifs priorisés.",
      "bp.s5":
        "Fournisseurs : clauses EN 301 549/WCAG, VPAT/rapport EN 301 549, SLAs de remédiation, droit d’audit.",
      "bp.s6":
        "Formation & change : montée en compétences, coaching, communautés de pratique.",
      "cl.h": "Checklist AA",
      "cl.i1": "Un seul H1 ; H2/H3 logiques ; pas de saut de niveau.",
      "cl.i2": "Skip link ; repères <main>/<nav> etc.",
      "cl.i3": "Navigation clavier complète ; focus toujours visible.",
      "cl.i4": "Liens avec intitulé explicite ; éviter « cliquez ici ».",
      "cl.i5": "Images : bon alt ; décoratives en alt vide.",
      "cl.i6": "Contraste (texte ≥ 4,5:1 ; UI ≥ 3:1) ; focus contrasté.",
      "cl.i7":
        "Formulaires : labels, aides, erreurs, statut ARIA, autocomplete.",
      "cl.i8": "Reflow à 320 px ; zoom 200 % ; pas de scroll horizontal.",
      "cl.i9": "Langue du document ; baliser les changements de langue.",
      "cl.i10": "Docs téléchargeables accessibles ou alternative HTML.",
      "cl.i11": "Déclaration d’accessibilité publique + canal de feedback.",
      "cl.intro":
        "Cochez chaque point au fil des vérifications. Les tips indiquent comment tester. Les liens ouvrent la documentation W3C.",
      "cl.note": "Vos coches sont enregistrées localement dans ce navigateur.",
      "cl.reset": "Réinitialiser la checklist",

      "cl.i1.label":
        "Titres : un seul H1 ; H2/H3 ordonnés ; pas de saut de niveau.",
      "cl.i1.how":
        "Test : ouvrez la liste des titres (NVDA : Insert+F7 → Headings).",

      "cl.i2.label": "Lien d’évitement ; repères <main>/<nav> etc.",
      "cl.i2.how":
        "Test : Tab dès le haut → le lien apparaît et mène à <main>.",

      "cl.i3.label": "Navigation clavier complète ; focus toujours visible.",
      "cl.i3.how":
        "Test : Tab/Shift+Tab ; flèches dans les menus ; Échap ferme les dialogues ; aucun piège.",

      "cl.i4.label": "Liens avec intitulé explicite ; évitez « Cliquez ici ».",
      "cl.i4.how":
        "Test : les liens ont du sens hors contexte (NVDA : Insert+F7 → Links).",

      "cl.i5.label": "Images : bon alt ; décoratives en alt vide.",
      "cl.i5.how":
        'Test : décorative = alt="" ; informative = description courte et pertinente.',

      "cl.i6.label":
        "Contraste : texte ≥ 4.5:1 ; UI ≥ 3:1 ; anneau de focus visible.",
      "cl.i6.how":
        "Test : utilisez un vérificateur de contraste ; vérifiez le focus en clair/sombre.",

      "cl.i7.label":
        "Formulaires : labels, aides, erreurs, messages d’état, autocomplete.",
      "cl.i7.how":
        "Test : les labels sont annoncés ; les erreurs s’affichent et sont lues ; utilisez autocomplete.",

      "cl.i8.label": "Reflow à 320 px ; zoom 200 % ; pas de scroll horizontal.",
      "cl.i8.how":
        "Test : réduisez la fenêtre à 320 px ; zoomez à 200 % — tout reste utilisable.",

      "cl.i9.label": "Langue du document ; changements de langue balisés.",
      "cl.i9.how":
        'Test : <html lang="…"> est défini ; les termes étrangers ont l’attribut lang.',

      "cl.i10.label":
        "Documents téléchargeables accessibles ou alternative HTML.",
      "cl.i10.how":
        "Test : PDF balisés ou formats accessibles ; sinon, page HTML équivalente.",

      "cl.i11.label":
        "Déclaration d’accessibilité publique + canal de feedback.",
      "cl.i11.how":
        "Test : lien en pied de page ; formulaire ou e-mail pour signaler ; délai de réponse indiqué.",

      "contact.h": "Conseil — échangeons",
      "contact.p":
        "J’espère que ce guide vous a aidé. Si vous souhaitez un accompagnement sur-mesure à l’échelle entreprise pour réussir l’EAA, je serai ravi d’en parler avec vous.",
      "contact.cta.cal": "Réserver une session de 30 min",
      "contact.cta.mail": "Vous préférez l’e-mail ? Écrivez-moi",
      "contact.note":
        "Sans engagement : on analyse votre contexte, on trace un plan pragmatique, et on partage des quick wins immédiatement actionnables.",
      "foot.legal":
        "Références : Directive (UE) 2019/882 ; EN 301 549 v3.2.1 ; WCAG 2.2 / WAI‑ARIA 1.2.",
      "reason.h": "Pourquoi cette directive ? Ce que l’UE vise",
      "reason.p":
        "En bref : <strong>rendre le marché unique accessible à tous</strong> et <strong>cohérent d’un pays à l’autre</strong>. L’EAA comble les écarts de règles, apporte de la clarté juridique aux entreprises et garantit des services utilisables par le plus grand nombre, y compris les personnes handicapées et les personnes âgées.",
      "reason.li1":
        "<strong>Égalité d’accès</strong> : permettre à chacun d’utiliser les services essentiels (e-commerce, banque, transport, médias, communications).",
      "reason.li2":
        "<strong>Harmonisation</strong> : mêmes exigences dans toute l’UE, moins de fragmentation et coûts multi-pays réduits.",
      "reason.li3":
        "<strong>Innovation & concurrence</strong> : standards communs → solutions interopérables, coûts plus bas, écosystème plus compétitif.",
      "reason.li4":
        "<strong>Impact économique & social</strong> : plus d’autonomie, d’emploi et de participation citoyenne pour des millions d’Européens.",
      "reason.li5":
        "<strong>Pérennité</strong> : accessibilité maintenue dans le temps, y compris lors des mises à jour et refontes.",
      "reason.card.h": "Attentes concrètes de l’UE",
      "reason.card.li1":
        "<strong>Intégrer l’accessibilité by design</strong> dans les produits et services (pas uniquement en fin de projet).",
      "reason.card.li2":
        "<strong>S’aligner sur des normes harmonisées</strong> (ex. EN 301 549 ⇄ WCAG) pour bénéficier de la présomption de conformité.",
      "reason.card.li3":
        "<strong>Maintenir la conformité dans la durée</strong> (tests clavier/TA, reflow, contraste, non-régression en CI/CD).",
      "reason.card.li4":
        "<strong>Informer le public</strong> : déclaration d’accessibilité et canal de feedback.",
      "reason.card.li5":
        "<strong>Fournir les preuves</strong> en cas de contrôle : documentation technique, historique des versions et traçabilité des correctifs.",
      "reason.card.li6":
        "<strong>Dérogations encadrées</strong> : uniquement pour charge disproportionnée ou altération fondamentale, avec justification écrite.",
      "reason.outcome":
        "Résultat attendu : des expériences numériques <strong>utilisables par tous</strong>, moins de risques juridiques pour les entreprises, et des coûts plus bas grâce à l’harmonisation.",
    },
  };

  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) =>
    Array.from(parent.querySelectorAll(sel));

  function applyLang(lang) {
    document.documentElement.lang = lang === "fr" ? "fr" : "en";
    document.title = t[lang]["site.title"];
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t[lang][key];
      if (val) {
        if (
          el.tagName.toLowerCase() === "input" ||
          el.tagName.toLowerCase() === "textarea"
        ) {
          el.setAttribute("placeholder", val);
        } else {
          el.innerHTML = val;
        }
      }
    });
    const email = document.querySelector("#email-link")
      ? document.querySelector("#email-link").textContent.trim()
      : "you@company.com";
    const subj = encodeURIComponent(
      lang === "fr"
        ? "Demande de mission conseil EAA"
        : "EAA consulting request"
    );
    const body = encodeURIComponent(
      lang === "fr"
        ? "Bonjour,%0D%0A%0D%0AJe souhaite échanger sur la mise en conformité EAA de notre organisation.%0D%0A%0D%0AMerci,"
        : "Hello,%0D%0A%0D%0AI'd like to discuss EAA compliance for our organization.%0D%0A%0D%0AThanks,"
    );
    ["#cta-email", "#cta-email-2"].forEach((id) => {
      const a = document.querySelector(id);
      if (a) a.href = `mailto:${email}?subject=${subj}&body=${body}`;
    });
    document
      .querySelector("#btn-en")
      .setAttribute("aria-pressed", String(lang === "en"));
    document
      .querySelector("#btn-fr")
      .setAttribute("aria-pressed", String(lang === "fr"));
  }

  const pref = (navigator.language || "en").toLowerCase().startsWith("fr")
    ? "fr"
    : "en";
  applyLang(pref);

  document
    .querySelector("#btn-en")
    .addEventListener("click", () => applyLang("en"));
  document
    .querySelector("#btn-fr")
    .addEventListener("click", () => applyLang("fr"));

    const form = document.getElementById("aa-checklist");
    if (!form) return;
    const inputs = form.querySelectorAll('input[type="checkbox"][data-key]');
    inputs.forEach((cb) => {
      const key = "aa-" + cb.dataset.key;
      const saved = localStorage.getItem(key);
      if (saved) cb.checked = saved === "1";
      cb.addEventListener("change", () =>
        localStorage.setItem(key, cb.checked ? "1" : "0")
      );
    });
    const resetBtn = document.getElementById("cl-reset");
    if (resetBtn)
      resetBtn.addEventListener("click", () => {
        inputs.forEach((cb) => {
          cb.checked = false;
          localStorage.removeItem("aa-" + cb.dataset.key);
        });
      });

})();
