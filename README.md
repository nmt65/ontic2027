# ONTIC 2027 · site oficial

Site bilingv, mobile-first pentru etapa națională a Olimpiadei Naționale de Tehnologia Informației și Comunicațiilor, găzduită la Suceava. Stack: Astro 7, TypeScript, Tailwind CSS 4 și tokeni CSS proprii; randare SSR cu adaptor Node pentru formularele server-side.

## Livrabile incluse

1. Mini design brief, tokeni, logo SVG și wireframe: [`DESIGN-BRIEF.md`](./DESIGN-BRIEF.md).
2. Arborele proiectului: mai jos.
3. Aplicația Astro completă: layout comun, rute localizate, pagini de concurs, formular API, sitemap, calendar și scoreboard.
4. Conținut bilingv în `src/content/ro.json`, `src/content/en.json` și conținutul editorial editabil în `src/content/site.ts`.
5. Instrucțiuni de dezvoltare/deploy și setarea datei: mai jos.
6. Checklist de lansare și lista completărilor: mai jos.

## Arbore

```text
ontic-2027/
├── public/
│   ├── favicon.svg
│   ├── ontic-logo.svg
│   ├── robots.txt
│   └── images/ontic-social.svg
├── src/
│   ├── content/              # conținut RO/EN, știri, FAQ, zile, parteneriate
│   ├── layouts/Base.astro     # SEO, hreflang, Event schema, header/footer
│   ├── pages/                 # /ro, /en, pagini slug, API și sitemap
│   ├── styles/global.css
│   └── event.config.ts        # dată unică, identitate, secțiuni, contacte
├── .env.example
├── astro.config.mjs
└── package.json
```

## Rulare locală

Necesită Node.js 22.23.4+ (Astro 7).

```sh
npm install
cp .env.example .env
npm run dev
```

Aplicația rulează la `http://localhost:4321/ro`. `/` redirecționează către română. Pentru verificarea pachetului de producție: `npm run build`, apoi `npm run preview`.

## Data evenimentului

Editează **doar** `startDate` în `src/event.config.ts`, de exemplu `2027-04-20T09:00:00+03:00`. Lasă `null` până la anunțul oficial.

- `null`: eticheta de dată neanunțată, program cu Ziua 1–5, formular de notificare, Event schema fără `startDate`, calendar ICS indisponibil.
- ISO completat: countdown pe program, date calendaristice pentru zile, `startDate`/`endDate` în schema Event și descărcare `.ics` cu cinci zile.
- După stabilirea datei, verifică orele, durata de cinci zile și zilele programului cu organizatorii; actualizează activitățile orientative. Data singură nu confirmă încă orele.

## Deploy

Este necesar un runtime Node.js care suportă procesul standalone Astro (de exemplu un serviciu Node pe Render/Fly.io sau container propriu). Comenzile: `npm ci`, `npm run build`, apoi `npm run start`; portul este citit din `PORT`. Setează `SITE_URL` la domeniul real.

Pentru formulare, creează cheile Resend, un Audience pentru înscrierile la notificarea datei și o adresă de destinație verificată; completează `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `CONTACT_EMAIL` și `RESEND_FROM_EMAIL`. Formularul de notificare adaugă adresa numai după acord explicit; formularul de contact trimite mesajul către organizatori. Configurează `TURNSTILE_SECRET_KEY` și `PUBLIC_TURNSTILE_SITE_KEY` împreună pentru verificarea Turnstile; fără secret funcționează honeypot + limitarea cererilor.

Setează `ADMIN_TOKEN` la un secret aleator lung și `ONTIC_DATA_DIR` la un volum persistent, apoi deschide `/ro/admin`. Editorul protejat scrie știrile/programul în `editorial.json` și clasamentul în `results.json`; paginile publice citesc aceste fișiere la runtime. Protejează tokenul, folosește HTTPS, limitează accesul administrativ la echipa desemnată și salvează backup înainte de import. Fără volum persistent, actualizările pot dispărea la redeploy.

Limitarea în memorie este per proces și se golește la restart; pentru mai multe instanțe folosește rate limiting la proxy/WAF sau Redis. Exportul organizatorilor din Audience se face din Resend și trebuie gestionat cu acces restricționat. Scoreboard-ul public face polling la un minut și primește rezultatele aprobate din `results.json`.

## Pagini și funcții

- Pagini română și engleză cu `hreflang`, canonical, OG, JSON-LD Event flexibil și sitemap.
- 5 secțiuni cu pagini proprii: TIC IX, TIC X, TIC XI, TIC XII și C# IX–XII; clasamente distincte pentru primele patru și unul comun pentru C#.
- Program orientativ pe cinci zile, filtre de secțiune, print, date automate și export ICS.
- FAQ căutabil (18 întrebări), știri (3 anunțuri editoriale), arhivă de concurs și scoreboard cu sortare, filtre, import/export CSV/JSON și refresh API.
- Formulare cu validare server-side, honeypot, rate limit și integrare Resend. Datele elevilor nu sunt incluse în exemple.
- Hărți Leaflet + OpenStreetMap, imagini placeholder originale în SVG/gradient, light/dark, navigare mobilă, reduced motion și banner de preferințe.

## Checklist înainte de lansare

- [ ] Confirmați data, durata, orele și structura programului; setați `startDate`.
- [ ] Confirmați regulamentele 2027, programele, punctajele, mediile TIC și mediul C#; înlocuiți toate `[DE COMPLETAT]`.
- [ ] Confirmați organizatorii, comisia națională, comitetul local, persoane de contact și parteneri/sponsori; aprobați utilizarea siglelor.
- [ ] Completați emailul/telefonul/adresa CNSCM, linkuri sociale, formulare, termene, cazare, masă, transferuri și procedura pentru contestații.
- [ ] Configurați domeniu/TLS, SMTP/Resend verificat, audience, Turnstile, backup și limitarea ratei distribuită.
- [ ] Publicați o politică reală de confidențialitate revizuită juridic: operatori, DPO, scop/temei, retention, subprocessori, drepturi și datele minorilor. Stabiliți mecanism de retragere și ștergere a înscrierilor.
- [ ] Confirmați mecanismul cookies/analitice; bannerul actual este un început vizual și trebuie conectat la preferințele reale înainte de orice analytics opțional.
- [ ] Încărcați fotografii aprobate: clădire CNSCM, laboratoare, Cetatea de Scaun, mănăstiri UNESCO, Muzeul Satului, activități și festivitate; obțineți drepturi/consimțăminte, mai ales pentru minori. Optimizați AVIF/WebP și dimensiunile responsive.
- [ ] Auditați tastatura, contrastul, zoom 200–400%, cititor de ecran, limbile, formularele, focusul, harta și mobilul la 320px; verificați ținta WCAG 2.2 AA cu persoane reale.
- [ ] Măsurați Lighthouse în producție pe pagini reprezentative (mobil și desktop) și remediați; scorul 95 nu poate fi garantat înaintea asseturilor reale și a hostingului.
- [ ] Validați JSON-LD, canonical, sitemap, robots, OG, 404, linkuri și indexarea pe domeniul final.
- [ ] Stabiliți fluxul securizat de publicare rezultate: sursă oficială, aprobare în doi pași, anonimizare/cod candidat, audit și export CSV/PDF. Evitați nume sau date personale neautorizate.

## De completat de organizatori

Toate datele marcate `[DE COMPLETAT]`: data/calendar, ore, echipe și comisii, reguli și subiecte, punctaje, software/laboratoare, număr/capacitate, cazare și prețuri, mesele, transport/transfer, accesibilitate, contact și social, parteneri, excursii și acces, arhive PDF, procedura GDPR, fotografii cu drepturi, rezultate verificate și detalii deploy. Valorile inițiale de hartă sunt aproximative și trebuie confirmate înainte de promovare.

## Repere de structură consultate

Structura logistică (program, călătorie, cazare, FAQ) a fost comparată cu site-ul [IOI 2026](https://ioi2026.uz/), iar separarea de clasamente a fost verificată în [regulamentul MEC pentru Olimpiada Națională TIC 2026](https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2026/olimpiade_concursuri/regulamente_actualizate/Regulament_Olimpiada_Nationala_TIC_2026.pdf). Site-ul ONTIC 2027 folosește structură și texte proprii; regulile 2026 sunt doar un reper și nu sunt prezentate ca regulament 2027.
