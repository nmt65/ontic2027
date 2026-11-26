---
version: alpha
name: "ONTI 2027"
description: "Un punct oficial de orientare pentru participanții Olimpiadei Naționale de Tehnologia Informației, găzduită la Suceava."
colors:
  primary: "#102740"
  ink: "#102740"
  blue: "#0F548B"
  gold: "#B78922"
  paper: "#F8F9F7"
  muted: "#566571"
  rule: "#D8DEE2"
typography:
  sans:
    fontFamily: "Manrope, Arial, sans-serif"
rounded:
  DEFAULT: "1rem"
  media: "1.5rem"
  control: "0.875rem"
spacing:
  page-max: "78rem"
  section-gap: "clamp(4.6rem, 8vw, 7.8rem)"
components:
  navigation:
    backgroundColor: "#F8F9F7"
    textColor: "#102740"
  primary-action:
    backgroundColor: "#102740"
    textColor: "#F8F9F7"
  media:
    rounded: "1.5rem"
---

# ONTI 2027 Design System

## Overview

### Creative North Star

Un dosar oficial de concurs, pregătit pentru orientarea elevilor și profesorilor: calm, precis și luminos. Referința este semnalistica instituțională bine executată, nu o pagină de produs sau un tablou de carduri.

### Product context and register

- **Audience and primary job:** elevii calificați, profesorii și delegațiile găsesc repede informațiile confirmate despre concurs, program și deplasare.
- **Locale:** româna este limba principală; engleza păstrează aceeași ierarhie și aceleași rute.
- **Register:** hibrid — informația oficială primează, iar Suceava oferă context logistic.
- **Memorable signature:** bara de navigație este o singură peliculă discretă de sticlă, continuă de la o margine la alta, care estompează conținutul la scroll fără să îl mascheze.
- **Restraint:** fotografiile reale și informația confirmată fac munca vizuală; nu se adaugă decorație gratuită, capsule flotante sau grile de carduri.
- **Anti-references:** interfețe SaaS cu bento-uri, glassmorphism cu multe capsule și layout-uri turistice care împing concursul în plan secund.
- **Token ownership/runtime mapping:** această fișă documentează valorile deja implementate în `src/styles/refresh.css`; CSS rămâne sursa runtime.

## Colors

`ink` este culoarea pentru titluri și acțiuni; `blue` identifică navigarea și linkurile; `gold` păstrează legătura cu identitatea CNSCM doar pentru accente; `paper` păstrează spațiul de lectură luminos. Contrastul nu depinde doar de culoare: linkurile au subliniere la hover/focus, iar navigarea activă folosește și greutatea textului.

## Typography

Manrope este fontul de interfață și lectură. Titlurile au spațiere strânsă și greutate mare, dar paragrafele rămân aerisite și cu măsură limitată. Majusculele sunt rezervate etichetelor funcționale, nu textului de corp.

## Layout

Pagina folosește un singur container editorial larg, cu document scrolling nativ. Pe mobil, navigarea se transformă în meniu, iar coloanele devin flux vertical fără a pierde acțiunile sau contextul.

## Elevation & Depth

Paginile sunt plate prin default. Doar suprafața de navigare poate folosi blur, la scroll, pentru a păstra orientarea fără să formeze un obiect separat peste conținut. Fotografiile sunt delimitate prin rază și decupaj, nu prin umbre grele.

## Shapes

Raza mare este rezervată fotografiilor și hărților; controalele au o rază moderată. Bara de navigare este continuă, fără capsule individuale.

## Components

### Navigation and data display

Navigarea folosește linkuri text cu stări hover și focus vizibile. Listele editoriale și reperele rămân linii de conținut, nu carduri independente.

### Motion

Scroll-ul este nativ și lin. Tranziția barei de navigare durează aproximativ 240ms; `prefers-reduced-motion` o dezactivează.

## Do's and Don'ts

- **Do:** păstrează concursul și programul înaintea conținutului de oraș.
- **Do:** folosește imagini reale cu rol clar și atribuire.
- **Don't:** acoperi conținutul cu panouri sau capsule flotante.
- **Don't:** folosi umbre grele, gradienți decorativi sau carduri fără scop.
