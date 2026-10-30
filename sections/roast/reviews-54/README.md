# Reviews, tasting cloud

Count-up score, tasting-tag cloud and offset review masonry.

- Category: reviews
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/reviews--reviews-54.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reviews, tasting cloud" (id `reviews-54`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/reviews--reviews-54.html; Shopify bundle: sections/roast/reviews-54/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-reviews-54.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/sections/blko-reviews-54.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-select.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-ui-select.liquid
   - `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/snippets/blko-ui-stars.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-f-syne.woff2
   - `assets/blko-reviews-54.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-reviews-54.css
   - `assets/blko-reviews-54.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-reviews-54.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/reviews-54/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-reviews-54.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-select.liquid`
- `snippets/blko-ui-stars.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-reviews-54.css`
- `assets/blko-reviews-54.js`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Reviews |
| `eyebrow` | text | Eyebrow | Reviews · Guji Natural |
| `score` | text | Average score | 4.9 |
| `recommend` | text | Recommend line | 97% recommend |
| `n5` | number | 5-star reviews | 186 |
| `n4` | number | 4-star reviews | 21 |
| `n3` | number | 3-star reviews | 4 |
| `n2` | number | 2-star reviews | 1 |
| `n1` | number | 1-star reviews | 0 |
| `write_text` | text | Write button label | Write a review |
| `write_link` | url | Write button link |  |
| `guide_text` | text | Guidelines link label | Review guidelines |
| `guide_link` | url | Guidelines link |  |
| `heading` | text | Heading | What the cups |
| `accent` | text | Heading, accent line | tasted |
| `grind_label` | text | Grind label | Ground for |
| `all_text` | text | All reviews link | Read all [count] reviews |
| `all_link` | url | All reviews link URL |  |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `tag`: Tasting tag
- `review`: Review

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-reviews-54.css`, `blko-reviews-54.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`, `blko-ui-select.liquid`, `blko-ui-stars.liquid`
- Locale keys: `blko.reviews_54.average`, `blko.reviews_54.breakdown`, `blko.reviews_54.helpful`, `blko.reviews_54.highest`, `blko.reviews_54.most_helpful`, `blko.reviews_54.newest`, `blko.reviews_54.of`, `blko.reviews_54.reviews`, `blko.reviews_54.showing`, `blko.reviews_54.sort`, `blko.reviews_54.stars`, `blko.reviews_54.tags`, `blko.reviews_54.verified`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
