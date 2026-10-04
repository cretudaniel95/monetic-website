---
trigger: always_on
---

# Behavioral Coding & Execution Policy (Monetic Web - Anti-Hallucination & Clean Engineering)

Această politică stabilește standardul de prudență, simplitate și precizie chirurgicală pentru dezvoltarea și mentenanța platformei web Monetic ([monetic.app](https://monetic.app)).

---

## 1. Gândește Înainte de a Scrie Cod (Think Before Coding)
- **Fără ipoteze tăcute:** Dacă o cerință este ambiguă sau admite mai multe interpretări tehnice, oprește-te și prezintă opțiunile. Verifică întotdeauna structura reală a fișierelor de pe disc înainte de a presupune framework-uri, compilatoare sau scripturi inexistente.
- **Semnalează complexitatea inutilă:** Dacă o cerință poate fi rezolvată curat prin HTML/CSS/JS nativ, propune abordarea simplă înainte de a introduce biblioteci externe sau structuri greoaie.
- **Dacă ceva e neclar, oprește-te:** Formulează exact ce este blocant sau inconsistent înainte de a altera fișierele de producție.

---

## 2. Simplitatea pe Primul Loc & YAGNI (Vanilla Web First)
- **Arhitectură Vanilla Web pură:** Acest proiect este un site static fără pas de build npm (fără Astro, Webpack, Vite sau framework-uri reactive greoaie). Codul trebuie să fie direct executabil în browser.
- **Minimul de cod necesar:** Scrie strict codul care rezolvă problema cerută. Fără abstracții speculative „pentru viitor”.
- **Eficiență și lizibilitate:** Păstrează scripturile și stilurile clare, modulare și ușor de auditat.

---

## 3. Modificări Chirurgicale (Surgical Changes)
- **Atinge doar ce este strict necesar:** Nu reformata codul adiacent, nu schimba indentarea globală și nu altera stilul fișierului dacă liniile respective nu au legătură directă cu cerința.
- **Fără refactoring nesolicitat:** Dacă observi markup vechi sau neoptimizat în afara ariei de lucru, menționează-l în raport, dar nu-l modifica pe cont propriu.
- **Curățarea reziduurilor:** Elimină exclusiv stilurile CSS, variabilele JS sau nodurile DOM care au devenit orfane ca urmare directă a modificărilor tale curente.
- **Testul liniei de cod:** Fiecare linie modificată din diff (`git diff`) trebuie să poată fi justificată direct prin cerința utilizatorului.

---

## 4. Invarianți Tehnici Specifici Monetic Web
- **Menținerea Secțiunii `<head>` & Integritate SEO:**
  - Secțiunea `<head>` a fiecărei pagini (`index.html`, `privacy.html`, `terms.html`) conține metadate critice pentru motoarele de căutare și magazinele de aplicații (Google Play, Apple App Store).
  - Este strict interzisă ștergerea sau alterarea tag-urilor `<title>`, `<meta name="description">`, link-urilor `canonical`, legăturilor `hreflang` (`en`, `ro`, `x-default`), cardurilor OpenGraph / Twitter și schemelor structurate Schema.org JSON-LD.
- **Simetrie Bilingvă Obligatorie (100% EN/RO Parity):**
  - Pentru paginile de documentație legală (`privacy.html`, `terms.html`), conținutul este împărțit în containerele dedicate `.lang-content-en` și `.lang-content-ro`. Orice adăugire, eliminare sau modificare de clauză trebuie reflectată identic în ambele limbi.
  - Pentru interfața landing page (`index.html`), orice text utilizator trebuie mapat prin dicționarul din `translations.js` (`ro` și `en`), garantând zero text hardcodat monolingv.
- **Securitate & Zero Dependențe Riscante:**
  - Păstrează integritatea rutării prin Cloudflare și a politicii de confidențialitate.
  - Fără scripturi terțe de urmărire nesancționate sau dependențe CDN neverificate.

---

## 5. Politica de Siguranță Git (Git Commit & Push Policy)
- **Fără commit-uri autonome:** Agentul AI are permisiunea de a comite (`git commit`) sau trimite (`git push`) modificări **DOAR** după ce a cerut și a primit aprobarea explicită a utilizatorului.
- **Notificare proactivă:** Când soliciți aprobarea, prezintă clar mesajul de commit propus și sumarul modificărilor (`git diff --stat`).
- **Interdicție pe acțiuni distructive:** Nu rula comenzi distructive (`git checkout .`, `git reset --hard`, `git push --force`) fără o solicitare directă și motivată din partea utilizatorului.

---

## 6. Execuție Orientată pe Obiective Verificabile (Goal-Driven Execution)
- Transformă fiecare sarcină într-o buclă verificabilă:
  - *Modificare UI/HTML:* Validează structura DOM și închiderea corectă a tag-urilor (fără elemente deschise sau entități ne-escapate).
  - *Modificare JavaScript:* Validează sintaxa fișierelor JS (ex. `node --check translations.js`).
  - *Modificare SEO:* Validează structura JSON-LD și integritatea tag-urilor canonice/hreflang.
- Nu declara o sarcină ca finalizată fără dovada executării verificărilor reale.
