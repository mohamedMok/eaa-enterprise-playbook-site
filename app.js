/* Simple i18n + CTA helpers */
(function(){
  const t = {
    en: {
      "site.title": "European Accessibility Act (EAA) — Whitepaper for Enterprise",
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
      "hero.tagline": "Crystal‑clear guidance, EN 301 549 ⇄ WCAG mapping, roll‑out blueprint, sector‑specific examples, and front‑end code that just works.",
      "hero.note": "Built for large organizations. Bilingual (EN/FR). No dependencies.",
      "cta.email": "Email me for consulting",
      "cta.basis": "Read the legal basis (EUR‑Lex)",
      "cta.copy": "Copy my email",
      "exec.h": "Executive summary",
      "exec.p1": "The European Accessibility Act (Directive (EU) 2019/882) sets functional accessibility requirements for key digital products and services (consumer ICT, self‑service terminals, electronic communications including 112, AVMS access, passenger transport digital elements, banking, e‑books, e‑commerce). Transposition was due on 28 June 2022; application on 28 June 2025; transitional measures until 28 June 2030 for services relying on products already in operation; self‑service terminals may remain until end of economic life (max 20 years).",
      "exec.k1": "Application date",
      "exec.k2": "Service transition period",
      "exec.k3": "Self‑service kiosks",
      "exec.note": "Presumption of conformity: comply with harmonized standards (e.g., EN 301 549). EN 301 549 largely aligns to WCAG 2.1; adopting WCAG 2.2 improves robustness.",
      "act.h": "The Act — in plain words, still rigorous",
      "act.p1": "The EAA focuses on functional outcomes (Annex I): perceivability, operability (keyboard), understandability, and assistive technology compatibility. Obligations include EU Declaration of Conformity, CE marking (for products), market surveillance, and public information. Derogations (disproportionate burden, fundamental alteration) must be documented and remain auditable.",
      "act.p2": "For services, keep the public informed (Annex V) and maintain compliance over time. For products, maintain technical documentation and traceability. Large organizations should implement at scale and embed accessibility into procurement, design systems, and CI/CD.",
      "norms.h": "Harmonized standards & presumption",
      "norms.p1": "Harmonized standards published in the EU Official Journal give presumption of conformity. For ICT, EN 301 549 (v3.2.1) covers web, apps, documents, software, and equipment, and strongly references WCAG 2.1. Many teams also adopt WCAG 2.2 to future‑proof without breaking alignment.",
      "norms.w3c": "W3C essentials",
      "tech.h": "Technical mapping — EN 301 549 ⇄ WCAG (POUR)",
      "tech.b1": "Semantic structure: 1.3.1, 1.3.2, 2.4.6 — headings, lists, tables, explicit relationships.",
      "tech.b2": "Navigation / bypass: 2.4.1, 2.4.3, 2.4.4 — skip link, focus order, link purpose.",
      "tech.b3": "Keyboard & focus: 2.1.1, 2.1.2, 2.4.7 + 2.5.8 (target size).",
      "tech.b4": "Color & contrast: 1.4.3, 1.4.11, 1.4.10, 1.4.1 — readability, 320 px reflow, no color‑only cues.",
      "tech.b5": "Images & media: 1.1.1, 1.2.x — alt text, captions, audio description.",
      "tech.b6": "Forms: 3.3.x, 1.3.5, 3.3.7/3.3.8 — labels, help, errors, autocomplete.",
      "tech.b7": "Robustness: 4.1.2, 4.1.3 — name/role/value, status messages.",
      "fe.h": "Front‑end tips (copy‑paste‑able)",
      "fe.skip": "1) Skip link & landmarks",
      "fe.focus": "2) Visible focus (tokenized)",
      "fe.alt": "3) Images: the right alt",
      "fe.links": "4) Buttons, links, accessible name",
      "fe.forms": "5) Checkout forms (e‑commerce)",
      "uc.h": "Use cases & enterprise contexts",
      "uc.ec.h": "E‑commerce",
      "uc.ec.b1": "Product cards: real buttons/links; color + icon, not color only.",
      "uc.ec.b2": "Facet filters: checkbox groups with group label; live region for result counts.",
      "uc.ec.b3": "Cart & checkout: labels, errors, address autocomplete with proper hints; clear button names.",
      "uc.bank.h": "Banking",
      "uc.bank.b1": "Strong focus states; no keyboard traps in OTP/2FA flows.",
      "uc.bank.b2": "Statements/downloads: provide accessible HTML or tagged PDFs.",
      "uc.bank.b3": "Charts: provide tables and text summaries; non‑color cues.",
      "uc.transport.h": "Passenger transport",
      "uc.transport.b1": "Timetables: proper table headers (scope), clear real‑time status with live regions.",
      "uc.transport.b2": "Ticketing flows: keyboard operable seat maps; focus management between steps.",
      "uc.transport.b3": "Kiosks: target size ≥ 24×24 px; high contrast; audio/tactile options.",
      "uc.media.h": "AVMS / Media",
      "uc.media.b1": "Captions by default; audio description where needed; keyboard media controls.",
      "uc.media.b2": "Avoid autoplay; provide transcript.",
      "uc.media.b3": "Player buttons with accessible names; visible focus.",
      "bp.h": "90‑day enterprise blueprint",
      "bp.s1": "Governance: executive sponsor, policy, product owner, accessibility lead, risk & KPIs.",
      "bp.s2": "Design system: tokens (colors, focus, target sizes), APG‑compliant components, docs.",
      "bp.s3": "CI/CD: a11y lint, axe‑core/pa11y/jest‑axe, visual tests, contrast budgets, PR reports.",
      "bp.s4": "Audits: manual keyboard/AT, representative sample, prioritized fixes.",
      "bp.s5": "Vendors: EN 301 549/WCAG clauses, VPAT/EN 301 549 report, remediation SLAs, audit rights.",
      "bp.s6": "Training & change: upskill designers/devs/PO/QA; coaching; communities of practice.",
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
      "contact.h": "Consulting — let’s talk",
      "contact.p": "Need enterprise‑scale help (EN 301 549 audits, design system hardening, CI/CD, training, vendor governance)?",
      "foot.legal": "References: Directive (EU) 2019/882; EN 301 549 v3.2.1; WCAG 2.2 / WAI‑ARIA 1.2."
    },
    fr: {
      "site.title": "European Accessibility Act (EAA) — Livre blanc pour grands groupes",
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
      "hero.title": "European Accessibility Act — le playbook des grands groupes",
      "hero.tagline": "Des règles claires, la cartographie EN 301 549 ⇄ WCAG, un plan de déploiement, des exemples sectoriels et du code front‑end prêt à l’emploi.",
      "hero.note": "Pensé pour les grands groupes. Bilingue (FR/EN). Zéro dépendance.",
      "cta.email": "M’écrire pour une mission conseil",
      "cta.basis": "Lire la base légale (EUR‑Lex)",
      "cta.copy": "Copier mon e‑mail",
      "exec.h": "Résumé exécutif",
      "exec.p1": "L’European Accessibility Act (Directive (UE) 2019/882) définit des exigences d’accessibilité pour des produits et services numériques clés (informatique grand public, bornes, communications électroniques dont 112, accès AVMS, éléments numériques du transport de passagers, banque, e‑books, e‑commerce). Transposition au 28 juin 2022 ; application au 28 juin 2025 ; dispositions transitoires jusqu’au 28 juin 2030 pour des services utilisant des produits déjà en service ; les bornes peuvent rester jusqu’à la fin de leur vie économique (max 20 ans).",
      "exec.k1": "Date d’application",
      "exec.k2": "Période transitoire (services)",
      "exec.k3": "Bornes libre‑service",
      "exec.note": "Présomption de conformité : respecter les normes harmonisées (ex. EN 301 549). EN 301 549 s’aligne largement sur WCAG 2.1 ; adopter WCAG 2.2 renforce la robustesse.",
      "act.h": "La directive — claire et rigoureuse",
      "act.p1": "L’EAA vise des résultats fonctionnels (Annexe I) : perceptibilité, utilisabilité (clavier), compréhensibilité, compatibilité technologies d’assistance. Obligations : Déclaration UE de conformité, marquage CE (produits), surveillance du marché, information du public. Les dérogations (charge disproportionnée, altération fondamentale) doivent être documentées et restent auditables.",
      "act.p2": "Côté services : informer le public (Annexe V) et maintenir la conformité dans le temps. Côté produits : documentation technique et traçabilité. Les grands groupes doivent industrialiser : achats, design systems, CI/CD.",
      "norms.h": "Normes harmonisées & présomption",
      "norms.p1": "Les normes harmonisées publiées au JOUE confèrent une présomption de conformité. Pour les TIC, EN 301 549 (v3.2.1) couvre web, apps, documents, logiciels et équipements, et s’appuie fortement sur WCAG 2.1. Beaucoup adoptent aussi WCAG 2.2 pour se prémunir sans rompre l’alignement.",
      "norms.w3c": "Incontournables W3C",
      "tech.h": "Cartographie technique — EN 301 549 ⇄ WCAG (POUR)",
      "tech.b1": "Structure sémantique : 1.3.1, 1.3.2, 2.4.6 — titres, listes, tableaux, relations explicites.",
      "tech.b2": "Navigation / évitement : 2.4.1, 2.4.3, 2.4.4 — lien d’évitement, ordre de focus, objet des liens.",
      "tech.b3": "Clavier & focus : 2.1.1, 2.1.2, 2.4.7 + 2.5.8 (taille des cibles).",
      "tech.b4": "Couleurs & contraste : 1.4.3, 1.4.11, 1.4.10, 1.4.1 — lisibilité, reflow 320 px, pas la couleur seule.",
      "tech.b5": "Images & médias : 1.1.1, 1.2.x — alt, sous‑titres, audio‑description.",
      "tech.b6": "Formulaires : 3.3.x, 1.3.5, 3.3.7/3.3.8 — labels, aides, erreurs, autocomplete.",
      "tech.b7": "Robustesse : 4.1.2, 4.1.3 — nom/rôle/valeur, messages d’état.",
      "fe.h": "Conseils front‑end (copier‑coller)",
      "fe.skip": "1) Skip link & repères",
      "fe.focus": "2) Focus visible (tokenisé)",
      "fe.alt": "3) Images : le bon alt",
      "fe.links": "4) Boutons, liens, nom accessible",
      "fe.forms": "5) Formulaires de paiement (e‑commerce)",
      "uc.h": "Cas d’usage & contextes",
      "uc.ec.h": "E‑commerce",
      "uc.ec.b1": "Cartes produit : vrais boutons/liens ; couleur + icône, pas couleur seule.",
      "uc.ec.b2": "Facettes : groupes de cases à cocher avec libellé de groupe ; zone live pour le nombre de résultats.",
      "uc.ec.b3": "Panier & checkout : labels, erreurs, adresse avec aides ; libellés de boutons clairs.",
      "uc.bank.h": "Banque",
      "uc.bank.b1": "Focus bien visible ; pas de pièges clavier en OTP/2FA.",
      "uc.bank.b2": "Relevés/téléchargements : fournir HTML accessible ou PDF balisés.",
      "uc.bank.b3": "Graphiques : prévoir tableaux & résumés ; pas la couleur seule.",
      "uc.transport.h": "Transport de passagers",
      "uc.transport.b1": "Horaires : bons en‑têtes de tableau (scope), statut en temps réel via live regions.",
      "uc.transport.b2": "Billetterie : plans de sièges pilotables au clavier ; gestion du focus entre étapes.",
      "uc.transport.b3": "Bornes : cibles ≥ 24×24 px ; contraste fort ; options audio/tactiles.",
      "uc.media.h": "AVMS / Média",
      "uc.media.b1": "Sous‑titres par défaut ; audio‑description si nécessaire ; contrôles clavier.",
      "uc.media.b2": "Éviter l’autoplay ; fournir une transcription.",
      "uc.media.b3": "Boutons du lecteur nommés correctement ; focus visible.",
      "bp.h": "Blueprint 90 jours",
      "bp.s1": "Gouvernance : sponsor exécutif, politique, PO, accessibility lead, risques & KPIs.",
      "bp.s2": "Design system : tokens (couleurs, focus, cibles), composants APG, docs.",
      "bp.s3": "CI/CD : lint a11y, axe‑core/pa11y/jest‑axe, tests visuels, budgets de contraste, rapports PR.",
      "bp.s4": "Audits : clavier/TA manuels, échantillon représentatif, correctifs priorisés.",
      "bp.s5": "Fournisseurs : clauses EN 301 549/WCAG, VPAT/rapport EN 301 549, SLAs de remédiation, droit d’audit.",
      "bp.s6": "Formation & change : montée en compétences, coaching, communautés de pratique.",
      "cl.h": "Checklist AA",
      "cl.i1": "Un seul H1 ; H2/H3 logiques ; pas de saut de niveau.",
      "cl.i2": "Skip link ; repères <main>/<nav> etc.",
      "cl.i3": "Navigation clavier complète ; focus toujours visible.",
      "cl.i4": "Liens avec intitulé explicite ; éviter « cliquez ici ».",
      "cl.i5": "Images : bon alt ; décoratives en alt vide.",
      "cl.i6": "Contraste (texte ≥ 4,5:1 ; UI ≥ 3:1) ; focus contrasté.",
      "cl.i7": "Formulaires : labels, aides, erreurs, statut ARIA, autocomplete.",
      "cl.i8": "Reflow à 320 px ; zoom 200 % ; pas de scroll horizontal.",
      "cl.i9": "Langue du document ; baliser les changements de langue.",
      "cl.i10": "Docs téléchargeables accessibles ou alternative HTML.",
      "cl.i11": "Déclaration d’accessibilité publique + canal de feedback.",
      "contact.h": "Conseil — parlons‑en",
      "contact.p": "Besoin d’aide à l’échelle (audits EN 301 549, durcissement design system, CI/CD, formation, gouvernance fournisseurs) ?",
      "foot.legal": "Références : Directive (UE) 2019/882 ; EN 301 549 v3.2.1 ; WCAG 2.2 / WAI‑ARIA 1.2."
    }
  };

  const $ = (sel, parent=document) => parent.querySelector(sel);
  const $$ = (sel, parent=document) => Array.from(parent.querySelectorAll(sel));

  function applyLang(lang){
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    document.title = t[lang]["site.title"];
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t[lang][key];
      if (val) {
        if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea"){
          el.setAttribute("placeholder", val);
        } else {
          el.innerHTML = val;
        }
      }
    });
    const email = document.querySelector("#email-link") ? document.querySelector("#email-link").textContent.trim() : "you@company.com";
    const subj = encodeURIComponent(lang === 'fr' ? "Demande de mission conseil EAA" : "EAA consulting request");
    const body = encodeURIComponent(lang === 'fr'
      ? "Bonjour,%0D%0A%0D%0AJe souhaite échanger sur la mise en conformité EAA de notre organisation.%0D%0A%0D%0AMerci,"
      : "Hello,%0D%0A%0D%0AI'd like to discuss EAA compliance for our organization.%0D%0A%0D%0AThanks,");
    ["#cta-email", "#cta-email-2"].forEach(id => {
      const a = document.querySelector(id);
      if (a) a.href = `mailto:${email}?subject=${subj}&body=${body}`;
    });
    document.querySelector("#btn-en").setAttribute("aria-pressed", String(lang === 'en'));
    document.querySelector("#btn-fr").setAttribute("aria-pressed", String(lang === 'fr'));
  }

  const pref = (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  applyLang(pref);

  document.querySelector("#btn-en").addEventListener("click", () => applyLang("en"));
  document.querySelector("#btn-fr").addEventListener("click", () => applyLang("fr"));

  document.querySelector("#copy-email").addEventListener("click", async () => {
    const email = document.querySelector("#email-link").textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      document.querySelector("#copy-email").textContent = document.documentElement.lang === "fr" ? "Copié ✔" : "Copied ✔";
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
      document.querySelector("#copy-email").textContent = document.documentElement.lang === "fr" ? "Copié ✔" : "Copied ✔";
    }
    setTimeout(()=>{
      document.querySelector("#copy-email").textContent = document.documentElement.lang === "fr" ? t.fr["cta.copy"] : t.en["cta.copy"];
    }, 1500);
  });
})();