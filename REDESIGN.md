# Redesign log

## November 2026 · design critique fixes

- Hero photo changed from the watermarked panorama to the clean Seat Fortress photograph. Bucovina feature now shows Voroneț Monastery.
- Heritage colours (forest green and gold from the logo) brought back next to the blue. See `DESIGN-BRIEF.md`.
- Homepage shortened: the scroll hint and the repeated closing call-to-action were removed, the date sign-up moved up under the hero, and news became a compact list.
- Mobile menu is a full-height sheet with a close (X) icon and scroll lock. "Explorează" has a drawn chevron.
- Accessibility: 24px consent checkbox, 44px link targets, contrast fixes on buttons, filters, footer, section labels and map credits.
- Dark mode follows the device setting.
- The three stacked stylesheets (`global.css`, `editorial.css`, `premium.css`) were merged into `src/styles/site.css`. Rules that could never apply were removed, and the merge was checked by comparing every element's computed style on 18 pages at desktop and phone widths before and after (no differences).

## Earlier directions

The site went through a dark forest-green version and a serif "editorial" version before the current bright layout. Neither is used any more; `DESIGN-BRIEF.md` describes the current design.

## References
- https://ioinformatics.org/ — direct access to event information and contest resources.
- https://ioi2027.de/ — event identity and explicit date communication.

## Photography
Images are served from Wikimedia Commons, each with a visible attribution link. They are destination photographs, not photographs of the 2027 event.
- Cezar Suceveanu, “Cetatea de Scaun a Sucevei.jpg”, CC BY 3.0: https://commons.wikimedia.org/wiki/File:Cetatea_de_Scaun_a_Sucevei.jpg . Home hero and the Bucovina page, responsive crop.
- Aupaelfary, “Voronet Monastery.JPG”, CC BY-SA 3.0 RO: https://commons.wikimedia.org/wiki/File:Voronet_Monastery.JPG . Home Bucovina feature and the Bucovina page.
- Georgiana Tudorica, “Muzeul Satului Bucovinean, Suceava.jpg”, CC BY-SA 3.0. Bucovina page.

## Participant resources
- Official Suceava tourism portal and attraction information: https://visitsuceava.ro/
- Official TPL live transport map: https://harta.tpl-sv.ro:8888/

## Deployment notes
The site uses Astro's official Vercel adapter for SSR and on-demand routes. File-based editorial storage still needs a persistent data strategy before live editing is enabled in production.
