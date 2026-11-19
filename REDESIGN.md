# Editorial redesign · November 2026

Warm off-white paper, forest-green type and restrained serif headings give the existing bilingual competition site a calmer visual identity. The hero uses real Suceava photography, followed by direct participant/schedule/competition links. The event dates, rules and backend behavior remain driven by the existing configuration.

## References
- https://www.aman.com/hotels-and-resorts — destination-led photography and restrained editorial hierarchy; no copied brand assets or text.
- https://ioinformatics.org/ — direct access to event information and contest resources.
- https://ioi2027.de/ — event identity and explicit date communication.

## Photography
Images are served from Wikimedia Commons. Both visible photographs include attribution links.
- Domino1027, “01 CETATEA DE SCAUN A SUCEVEI panorama.jpg”, CC BY-SA 3.0 RO: https://commons.wikimedia.org/wiki/File:01_CETATEA_DE_SCAUN_A_SUCEVEI_panorama.jpg . Displayed with a responsive crop; the cropped image retains that license.
- Cezar Suceveanu, “Cetatea de Scaun a Sucevei.jpg”, CC BY 3.0: https://commons.wikimedia.org/wiki/File:Cetatea_de_Scaun_a_Sucevei.jpg . Displayed with a responsive crop.
These are archival destination photographs, not photographs of the 2027 event.

## Verification
Local dependency installation succeeds, but Windows Application Control blocks Astro's satteri native module. Do not disable that policy. GitHub Actions runs the lockfile installation, Astro check/build and localized route smoke tests on Ubuntu. Desktop/mobile visual QA remains required.
The site now uses Astro's official Vercel adapter for SSR and on-demand routes. File-based editorial storage remains unchanged and still needs a persistent data strategy before live editing is enabled in production.

## Participant resources
- Official Suceava tourism portal and attraction information: https://visitsuceava.ro/
- Official TPL live transport map: https://harta.tpl-sv.ro:8888/
- Airport transfer and local transport guidance are linked to their current Visit Suceava pages.
- Additional Wikimedia photographs are visibly attributed on the Bucovina page: Voroneț Monastery by Aupaelfary (CC BY-SA 3.0 RO) and the Bucovina Village Museum by Georgiana Tudorica (CC BY-SA 3.0).


