# Recommendations, bundle

Stepped pairing cards beside a roast-red bundle builder.

- Category: product-recommendations
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/product-recommendations--recommendations-69.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Recommendations, bundle" (id `recommendations-69`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/product-recommendations--recommendations-69.html; Shopify bundle: sections/roast/recommendations-69/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-recommendations-69.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/sections/blko-recommendations-69.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-badge.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-badge.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-number.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-number.liquid
   - `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-price.liquid
   - `snippets/blko-ui-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-product-card.liquid
   - `snippets/blko-ui-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-rating.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/snippets/blko-ui-stars.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-f-syne.woff2
   - `assets/blko-recommendations-69.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-recommendations-69.css
   - `assets/blko-recommendations-69.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-recommendations-69.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/recommendations-69/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-recommendations-69.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-badge.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-number.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-product-card.liquid`
- `snippets/blko-ui-rating.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-stars.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-recommendations-69.css`
- `assets/blko-recommendations-69.js`
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
| `label` | text | Region label | Brew it alongside |
| `eyebrow` | text | Eyebrow | Pairs with Guji Natural |
| `heading` | text | Heading | Brew it |
| `accent` | text | Heading, accent line | alongside |
| `auto` | checkbox | Use product recommendations | true |
| `discount` | range | Bundle discount | 10 |
| `hint` | text | Hint | Bundle · tick two or more |
| `panel_heading` | text | Panel heading | Build a bundle, |
| `panel_accent` | text | Panel heading accent | save 10% |
| `this_name` | text | This product (no product) | Guji Natural |
| `this_size` | text | This product size suffix |  · 250 g |
| `this_price` | number | This product price (no product) | 24 |
| `this_note` | text | This product note | This bag |
| `extra_product` | product | Extra product |  |
| `extra_name` | text | Extra name (no product) | Glass server · 600 ml |
| `extra_price` | number | Extra price (no product) | 36 |
| `extra_note` | text | Extra note | Gear |
| `note` | text | Footnote | Ground to order, roasted together, one box. Free shipping over $45. |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `card`: Product

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-recommendations-69.css`, `blko-recommendations-69.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-badge.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-number.liquid`, `blko-ui-price.liquid`, `blko-ui-product-card.liquid`, `blko-ui-rating.liquid`, `blko-ui-section.liquid`, `blko-ui-stars.liquid`
- Locale keys: `blko.recommendations_69.add`, `blko.recommendations_69.added`, `blko.recommendations_69.error`, `blko.recommendations_69.items`, `blko.recommendations_69.items_word`, `blko.recommendations_69.one_more`, `blko.recommendations_69.saving`, `blko.recommendations_69.subtotal`, `blko.recommendations_69.total`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
