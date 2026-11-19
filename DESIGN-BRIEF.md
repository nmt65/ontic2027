# ONTIC 2027 · design brief

Updated November 2026. This describes the site as it is now built. Change this file whenever the tokens in `src/styles/site.css` change.

## Concept

**Viitorul începe cu ideile tale.** A bright, open interface for a national technology olympiad, rooted in Suceava and Bucovina. Two colour families share the work:

- **Blue: action and the digital side.** Buttons, links, the second line of the hero headline, the TIC track.
- **Forest green and stone gold: heritage.** Taken from the logo (fortress walls and code brackets). Used for the wordmark's "27", section labels, the stats, the date band with its crenellated edge, and the gold rule above the Bucovina section.

Photography is real and local: the Seat Fortress in the hero, Voroneț Monastery in the Bucovina feature, with visible Creative Commons credits.

## Tokens (`:root` in `src/styles/site.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--ink` | `#171c29` | `#f2f5ff` | Main text |
| `--ink-soft` | `#566277` | `#afbdd2` | Supporting text |
| `--paper` | `#ffffff` | `#111827` | Page background |
| `--surface` | `#f5f7fb` | `#1c273b` | Filled cards, soft sections, footer |
| `--line` | `#e0e6f0` | `#35425c` | Borders and dividers |
| `--blue` | `#155ce4` | `#2563eb` | Primary buttons, active states |
| `--blue-strong` | `#2454b2` | `#94bdff` | Text links |
| `--forest` | `#10261f` | `#0b1c16` | Date band, event badge |
| `--forest-soft` | `#1d3a2f` | (gold in dark) | Stat numbers |
| `--gold` | `#e8c576` | `#e8c576` | Gold on dark backgrounds, gold buttons |
| `--gold-ink` | `#87590c` | `#e8c576` | Gold text on light backgrounds (section labels, "27") |

Contest sections keep their own colours in `src/event.config.ts` (terracotta IX, ochre X, pine XI, slate XII, violet C#). Labels using them go through `.section-kicker`, which darkens or lightens the colour so it stays readable.

Type is the system sans-serif stack (`--font`), so Romanian diacritics work without loading web fonts.

## Rules that keep it consistent

- **Buttons for the main action, text links for "more".** One filled button per block at most. Secondary actions use `.text-link` (underlined, arrow, at least 44px tall).
- **Two card styles only.** Tinted track cards (TIC blue, C# violet) and filled `--surface` cards. News is a list of rows, not cards.
- **Contrast.** All text meets WCAG AA (4.5:1, or 3:1 for large text) in both themes. The track cards stay light in dark mode and use fixed dark label colours.
- **Touch targets.** Interactive elements are at least 44px tall. The consent checkbox is 24px.
- **Theme.** The site follows the device's light/dark setting until the visitor uses the toggle, which is then remembered.

## Logo

`public/ontic-logo.svg` combines a crenellated city silhouette and code brackets around a slash, in forest green and gold. `public/favicon.svg` is the compact mark. The host school's name appears next to the logo in the header and footer. Use an official CNSCM logo only after the school supplies and approves it.

## Home page order

1. Sticky header: logo and host school, five main links, "Explorează" menu (locations, travel, gallery, news, FAQ, contact), RO/EN switch, theme toggle. On phones this becomes a full-height menu.
2. Hero: event badge, headline, one-sentence description, participation guide button, link to sections and rules, fortress photo.
3. Date band (forest green): the date, or an email sign-up for when the date is announced.
4. Introduction and three facts: sections, rankings, days.
5. The two tracks: TIC (one ranking per grade) and C# (one shared ranking).
6. Participant shortcuts: schedule, participation guide, locations and transport.
7. Bucovina feature with Voroneț photo.
8. Latest three news items.
9. Organizers.
