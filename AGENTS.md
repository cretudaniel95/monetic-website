# Antigravity Agent Guidelines & Operational Rules (Monetic Web)

- [Coding Behavior Policy](.agents/rules/coding-behavior-policy.md): Reguli stricte de modificări chirurgicale, simplitate (YAGNI), integritate SEO și simetrie bilingvă.

---

## 1. Architectural Stack & Principles
- **Vanilla Static Web**: Acest repository găzduiește documentația legală, pagina de suport și landing page-ul pentru aplicația mobilă Monetic ([https://monetic.app](https://monetic.app)). Este construit pe standarde curate Vanilla HTML5, CSS3 și JavaScript modern, servit direct prin GitHub Pages și Cloudflare Edge.
- **Zero Build Tooling Dependency**: Nu există un pas de compilare sau bundling npm (`package.json`, Astro, Webpack etc.). Orice modificare de fișiere trebuie să fie validă și direct funcțională în browsere moderne.
- **Decuplare Totală față de KMP**: Repository-ul este independent de cel de mobile. Textele legale sunt sincronizate ca SSoT din repository-ul de mobil, dar sunt adaptate și formatate conform structurii native HTML a acestui proiect.

---

## 2. Technical Invariants
- **Menținerea Secțiunii `<head>` & Integritate SEO**:
  - Fiecare pagină (`index.html`, `privacy.html`, `terms.html`) conține metadate esențiale pentru motoarele de căutare și verificările magazinelor de aplicații (Google Play, Apple App Store).
  - Păstrează cu strictețe: `<title>`, `<meta name="description">`, link-urile canonice (`rel="canonical"`), legăturile multilingve (`rel="alternate"` `hreflang`), OpenGraph, Twitter Cards și schemele structurate Schema.org JSON-LD.
- **Simetrie Bilingvă Obligatorie (100% EN/RO Parity)**:
  - Documentele legale (`privacy.html`, `terms.html`) mențin o paritate strictă 1:1 între containerele `.lang-content-en` și `.lang-content-ro`.
  - Interfața landing page (`index.html`) utilizează dicționarul din `translations.js`. Orice adăugare de text sau secțiune nouă trebuie să includă traducerea completă în română și engleză.
- **Securitate & Standarde Web**:
  - Toate link-urile externe deschise în tab nou trebuie să includă `rel="noopener"` sau `rel="noreferrer"`.
  - Toate adresele de email de contact trebuie să fie coerente: `support@monetic.app`.

---

## 3. Git Commit & Push Safety Policy
- **Aprobare Explicită Obligatorie**: Agentul AI are permisiunea de a executa `git commit` și `git push` **DOAR** după ce primește permisiunea explicită a utilizatorului în conversație.
- **Notificare Proactivă**: Înainte de a comite, agentul raportează mesajul de commit și lista fișierelor atinse (`git diff --stat`).
- **Fără Acțiuni Distructive**: Nu rula comenzi care rescriu istoricul sau pot duce la pierderi de date (`git checkout .`, `git reset --hard`, `git push --force`).

---

## 4. Verification & Validation Standard
- Înainte de finalizarea oricărei sarcini:
  - Validează integritatea parsării HTML și structura DOM (toate tag-urile corect închise).
  - Validează sintaxa fișierelor JavaScript prin `node --check <file>`.
  - Afișează `git status --short` și `git diff --stat`.
