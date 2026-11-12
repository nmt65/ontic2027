# ONTIC 2027 · mini design brief

## Concept

**Idei în cod. Rădăcini în Bucovina.** A dark forest-green canvas carries circuit traces and a geometric silhouette inspired by Suceava's fortified skyline. Warm stone gold nods to painted monasteries and the region's built heritage; mint signals digital craft. The identity is original SVG artwork drawn for this site, not a borrowed event or school mark.

## Palette and type

| Token | Value | Use |
| --- | --- | --- |
| `--green` | `#10261f` | Hero, footer, dark sections |
| `--green-2` | `#21493b` | Buttons and secondary surfaces |
| `--paper` | `#f7f6ef` | Light page background |
| `--surface` | `#fffefa` | Cards and controls |
| `--ink` | `#193129` | Primary copy |
| `--ink-soft` | `#50655d` | Supporting copy |
| `--mint` | `#75d3b2` | Digital accent and focus details |
| `--gold` | `#e8c576` | Heritage accent and primary action |

System sans-serif stacks keep Romanian diacritics available without third-party font requests; monospace labels use Cascadia Code/Consolas. Section accents are set centrally in `src/event.config.ts`: terracotta IX, ochre X, pine XI, slate XII, violet C#.

## Logo

`public/ontic-logo.svg` combines a crenellated city silhouette and code brackets around a slash. `public/favicon.svg` is the compact mark. The host school's name appears next to the logo in the header and again in the footer; use an official CNSCM logo only after the school supplies and approves the asset.

## Home wireframe

1. Sticky header: event mark + host school, category navigation, RO/EN switch, light/dark control.
2. Full-height illustrated hero: event title, Suceava, participant CTA, schedule CTA, date-pending pill.
3. Short event introduction and five section cards, with distinct TIC grade rankings and shared C# ranking.
4. Four factual headline metrics; no invented participant or award totals.
5. Three editable news notices and a schedule preview.
6. Bucovina introduction with OpenStreetMap embed and venue details.
7. Organizer strip and partner CTA.
8. Date notification form with explicit consent, followed by a concise footer with school, contact and legal links.
