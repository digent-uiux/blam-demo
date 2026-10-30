# Search, Syne field

Syne search field, sliding result tabs, lead-card product grid.

- Category: main-search
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/main-search--search-results-29.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Search, Syne field" (id `search-results-29`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/main-search--search-results-29.html; Shopify bundle: sections/roast/search-results-29/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-search-results-29.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/sections/blko-search-results-29.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-badge.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-badge.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-label.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-label.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-number.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-number.liquid
   - `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-price.liquid
   - `snippets/blko-ui-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-product-card.liquid
   - `snippets/blko-ui-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-rating.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-select.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-select.liquid
   - `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/snippets/blko-ui-stars.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-f-syne.woff2
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-roast-motion.js
   - `assets/blko-search-results-29.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-search-results-29.css
   - `assets/blko-search-results-29.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-search-results-29.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/search-results-29/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-search-results-29.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-badge.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-label.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-number.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-product-card.liquid`
- `snippets/blko-ui-rating.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-select.liquid`
- `snippets/blko-ui-stars.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-search-results-29.css`
- `assets/blko-search-results-29.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Search results |
| `per_page` | range | Results per page | 24 |
| `min_read` | text | Read time suffix | min read |
| `page_cat` | text | Page eyebrow | Page · Help |
| `dym_from` | text | Did you mean: for the query | tea |
| `dym_to` | text | Did you mean: suggestion | teapot |
| `empty_label` | text | Button label | Shop all coffee |
| `empty_link` | url | Button link |  |
| `demo_q` | text | Sample query | tea |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `chip`: Suggestion chip
- `popular`: Popular search
- `product`: Product (sample)
- `story`: Journal story (sample)
- `page`: Page (sample)

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-search-results-29.css`, `blko-search-results-29.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-badge.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-label.liquid`, `blko-ui-money.liquid`, `blko-ui-number.liquid`, `blko-ui-price.liquid`, `blko-ui-product-card.liquid`, `blko-ui-rating.liquid`, `blko-ui-section.liquid`, `blko-ui-select.liquid`, `blko-ui-stars.liquid`
- Locale keys: `blko.search_results_29.after`, `blko.search_results_29.also`, `blko.search_results_29.best_rated`, `blko.search_results_29.clear`, `blko.search_results_29.did_you_mean`, `blko.search_results_29.empty_text`, `blko.search_results_29.field_label`, `blko.search_results_29.heading`, `blko.search_results_29.journal`, `blko.search_results_29.newest`, `blko.search_results_29.nothing`, `blko.search_results_29.pages`, `blko.search_results_29.placeholder`, `blko.search_results_29.popular`, `blko.search_results_29.price_asc`, `blko.search_results_29.price_desc`, `blko.search_results_29.products`, `blko.search_results_29.read_more`, `blko.search_results_29.relevance`, `blko.search_results_29.result_types`, `blko.search_results_29.showing`, `blko.search_results_29.sort`, `blko.search_results_29.submit`, `blko.search_results_29.suggestions`, `blko.search_results_29.zero`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
