# Home 01 - For Beauty (page bundle)

Skincare home page, store first: bestsellers with quick add, shop by concern, shop the shelf from one photo, customer results, the journal, the newsletter, then the press. Ten standalone sections that work in any Online Store 2.0 theme (empty theme, Dawn, ...), with the same look as the Blocko page (Oak look: Schibsted Grotesk, warm off-white, moss green buttons).

- Kind: page (10 sections: 2 for the header group, 7 for the home template, 1 for the footer group)
- Shopify target: ok
- Every section is self-contained: its own `blko-` classes, its own CSS file, colours/sizes/text as section settings, fonts brought with it (no theme settings read).
- Pickers with demo fallback: each product, collection, blog and menu picker shows the Blocko demo content until you pick something, so a fresh install looks like the demo.
- Images are Shopify placeholders until you pick your own.

## Sections

| # | Section file | Name in the editor | Goes in | Settings | Blocks |
| --- | --- | --- | --- | --- | --- |
| 1 | `blko-announcement-02` | Announcement, pill link | Header group | 13 | none |
| 2 | `blko-header-01` | Header, nav center | Header group | 21 | none |
| 3 | `blko-featured-products-37` | Bestsellers, quick add | Home template | 29 | product |
| 4 | `blko-collection-list-32` | Face map, shop by concern | Home template | 25 | zone |
| 5 | `blko-image-with-products-05` | Shelfie, tick-list set | Home template | 30 | item |
| 6 | `blko-testimonial-30` | Skin diaries | Home template | 25 | diary |
| 7 | `blko-blog-07` | Journal bento | Home template | 38 | none |
| 8 | `blko-newsletter-40` | Concern chips sign-up | Home template | 32 | none |
| 9 | `blko-logo-cloud-04` | Logo cloud, press quotes | Home template | 13 | publication |
| 10 | `blko-footer-02` | Footer, newsletter | Footer group | 23 | column |

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko) to install the page bundle "Home 01 - For Beauty" (bundle: pages/balm-2/home-01/ in the repo) into my Shopify theme. Before changing any code, ask me which theme, and whether it should replace my home page or become an alternate home template (templates/index.home-01.json); restate the plan and wait for my OK. Then follow the repo's AGENTS.md: copy the files without overwriting existing ones blindly, merge the locale keys instead of replacing the file, add the header/footer sections to the theme's header and footer groups (groups/*.json shows the intended order and settings), keep the blko- prefix, run `shopify theme check`, and finish by telling me how to assign the template and pick my products, collections, blog and menus in the Theme Editor.
```

## Install

1. Copy `sections/`, `snippets/` and `assets/` into the same folders of your theme (never overwrite a file with the same name without comparing it first).
2. Merge `locales/en.default.blko.json` into your `locales/en.default.json`.
3. Copy `templates/index.home-01.json` into `templates/`. Use it as your home page (Theme Editor > Home page > Change template) or rename it to `index.json` to replace the current one.
4. Header and footer: Shopify keeps them in section groups shared by every page, so they are not in the template. In the Theme Editor, add **Announcement, pill link** and **Header, nav center** to the Header group and **Footer, newsletter** to the Footer group (remove or hide the theme's own header/footer if you want this one). `groups/header-group.json` and `groups/footer-group.json` show the order and the settings of the demo; they are references, not files to copy into `sections/` (that would replace your theme's groups).
5. Pick your products, collections, blog and menus in each section. The bundle shows its demo content until then.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, and whether this should be the home page or an alternate home template. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-announcement-02.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-announcement-02.liquid
   - `snippets/blko-ann02-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-ann02-icon.liquid
   - `snippets/blko-h01-fonts.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-h01-fonts.liquid
   - `assets/blko-announcement-02.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-announcement-02.css
   - `assets/blko-h01-schibsted-grotesk-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-h01-schibsted-grotesk-normal.woff2 (binary font: download it, then upload in Assets > Add a new asset)
   - `sections/blko-header-01.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-header-01.liquid
   - `snippets/blko-hdr01-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-hdr01-icon.liquid
   - `assets/blko-header-01.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-header-01.css
   - `assets/blko-header-01.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-header-01.js
   - `sections/blko-featured-products-37.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-featured-products-37.liquid
   - `snippets/blko-fp37-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-fp37-card.liquid
   - `snippets/blko-fp37-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-fp37-icon.liquid
   - `assets/blko-featured-products-37.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-featured-products-37.css
   - `assets/blko-featured-products-37.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-featured-products-37.js
   - `sections/blko-collection-list-32.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-collection-list-32.liquid
   - `snippets/blko-cl32-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-cl32-icon.liquid
   - `assets/blko-collection-list-32.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-collection-list-32.css
   - `assets/blko-collection-list-32.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-collection-list-32.js
   - `sections/blko-image-with-products-05.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-image-with-products-05.liquid
   - `snippets/blko-iwp05-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-iwp05-icon.liquid
   - `assets/blko-image-with-products-05.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-image-with-products-05.css
   - `assets/blko-image-with-products-05.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-image-with-products-05.js
   - `sections/blko-testimonial-30.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-testimonial-30.liquid
   - `snippets/blko-tm30-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-tm30-icon.liquid
   - `assets/blko-testimonial-30.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-testimonial-30.css
   - `assets/blko-testimonial-30.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-testimonial-30.js
   - `sections/blko-blog-07.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-blog-07.liquid
   - `snippets/blko-bl07-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-bl07-icon.liquid
   - `assets/blko-blog-07.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-blog-07.css
   - `assets/blko-blog-07.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-blog-07.js
   - `sections/blko-newsletter-40.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-newsletter-40.liquid
   - `snippets/blko-nl40-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-nl40-icon.liquid
   - `assets/blko-newsletter-40.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-newsletter-40.css
   - `assets/blko-newsletter-40.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-newsletter-40.js
   - `sections/blko-logo-cloud-04.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-logo-cloud-04.liquid
   - `assets/blko-logo-cloud-04.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-logo-cloud-04.css
   - `assets/blko-logo-cloud-04.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-logo-cloud-04.js
   - `sections/blko-footer-02.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/sections/blko-footer-02.liquid
   - `snippets/blko-ft02-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/snippets/blko-ft02-icon.liquid
   - `assets/blko-footer-02.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/assets/blko-footer-02.css
   - `templates/index.home-01.json`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/templates/index.home-01.json
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Header group: add the sections **Announcement, pill link** and **Header, nav center** (in this order) to the header group, with the settings in https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/groups/header-group.json. Footer group: add **Footer, newsletter** with the settings in https://raw.githubusercontent.com/digent-uiux/blam-demo/main/pages/balm-2/home-01/groups/footer-group.json. Do it in the Theme Editor (Add section in the Header / Footer group), or by merging those entries into the theme's `sections/header-group.json` / `sections/footer-group.json` without removing the theme's own entries unless the merchant asks.
5. Assign `index.home-01` to the home page in the Theme Editor (or keep it as an alternate template), then open it and pick products, collections, the blog and the menus.

## Files per section

- **1. Announcement, pill link** (`blko-announcement-02`): `sections/blko-announcement-02.liquid`, `snippets/blko-ann02-icon.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-announcement-02.css`, `assets/blko-h01-schibsted-grotesk-normal.woff2`
- **2. Header, nav center** (`blko-header-01`): `sections/blko-header-01.liquid`, `snippets/blko-h01-fonts.liquid`, `snippets/blko-hdr01-icon.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `assets/blko-header-01.css`, `assets/blko-header-01.js`
- **3. Bestsellers, quick add** (`blko-featured-products-37`): `sections/blko-featured-products-37.liquid`, `snippets/blko-fp37-card.liquid`, `snippets/blko-fp37-icon.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-featured-products-37.css`, `assets/blko-featured-products-37.js`, `assets/blko-h01-schibsted-grotesk-normal.woff2`
- **4. Face map, shop by concern** (`blko-collection-list-32`): `sections/blko-collection-list-32.liquid`, `snippets/blko-cl32-icon.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-collection-list-32.css`, `assets/blko-collection-list-32.js`, `assets/blko-h01-schibsted-grotesk-normal.woff2`
- **5. Shelfie, tick-list set** (`blko-image-with-products-05`): `sections/blko-image-with-products-05.liquid`, `snippets/blko-h01-fonts.liquid`, `snippets/blko-iwp05-icon.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `assets/blko-image-with-products-05.css`, `assets/blko-image-with-products-05.js`
- **6. Skin diaries** (`blko-testimonial-30`): `sections/blko-testimonial-30.liquid`, `snippets/blko-h01-fonts.liquid`, `snippets/blko-tm30-icon.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `assets/blko-testimonial-30.css`, `assets/blko-testimonial-30.js`
- **7. Journal bento** (`blko-blog-07`): `sections/blko-blog-07.liquid`, `snippets/blko-bl07-icon.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-blog-07.css`, `assets/blko-blog-07.js`, `assets/blko-h01-schibsted-grotesk-normal.woff2`
- **8. Concern chips sign-up** (`blko-newsletter-40`): `sections/blko-newsletter-40.liquid`, `snippets/blko-h01-fonts.liquid`, `snippets/blko-nl40-icon.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `assets/blko-newsletter-40.css`, `assets/blko-newsletter-40.js`
- **9. Logo cloud, press quotes** (`blko-logo-cloud-04`): `sections/blko-logo-cloud-04.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `assets/blko-logo-cloud-04.css`, `assets/blko-logo-cloud-04.js`
- **10. Footer, newsletter** (`blko-footer-02`): `sections/blko-footer-02.liquid`, `snippets/blko-ft02-icon.liquid`, `snippets/blko-h01-fonts.liquid`, `assets/blko-footer-02.css`, `assets/blko-h01-schibsted-grotesk-normal.woff2`
- Shared by all ten: `snippets/blko-h01-fonts.liquid`, `assets/blko-h01-schibsted-grotesk-normal.woff2`, `locales/en.default.blko.json`

## Notes

- Fonts: each section has a **Fonts** setting. **Bundled** (default) loads Schibsted Grotesk from `assets/blko-h01-schibsted-grotesk-normal.woff2` (latin subset, variable 400-900, SIL Open Font License 1.1, fonts.google.com); italics are slanted by the browser, as on the Blocko page. **Pick from the font library** uses the section's two font pickers (`font_face`). **Use the theme's fonts** reads `--font-heading-family` / `--font-body-family`.
- Sizes are in px, so themes that shrink `rem` (Dawn sets `html` to 62.5%) don't change the layout.
- Add to cart (Bestsellers quick add, Shop by concern, Shop the shelf) posts to `/cart/add.js` and fires `blko:cart:add` on `document`. Demo items can't be added; pick real products first.
- Shop the shelf shows a set saving for display only: create a matching automatic discount, or fill in its discount code setting.
- Newsletter 40 and Footer 02 sign up through Shopify's customer form (`contact[email]`, tags `newsletter` plus the chosen concerns).
- Press quotes (logo cloud 04) default to **Position: Left**, as on the Blocko page; set it to Center to centre the block.
- Checked with `shopify theme check` in an empty theme and in Dawn (0 errors, 0 warnings for these files), and against the Blocko page screenshot by screenshot, section by section, at 1440px and 390px, bare and inside Dawn's CSS (photos masked).
