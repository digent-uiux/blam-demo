# Filter bar, roast scale

Sticky bar with a roast-level scale, popovers and popping chips.

- Category: filter-bar
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/filter-bar--filter-bar-31.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Filter bar, roast scale" (id `filter-bar-31`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/filter-bar--filter-bar-31.html; Shopify bundle: sections/roast/filter-bar-31/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-filter-bar-31.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/sections/blko-filter-bar-31.liquid
   - `snippets/blko-filter-bar-31-part.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-filter-bar-31-part.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-checkbox.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-ui-checkbox.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-select.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/snippets/blko-ui-select.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-f-syne.woff2
   - `assets/blko-filter-bar-31.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-filter-bar-31.css
   - `assets/blko-filter-bar-31.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-filter-bar-31.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/filter-bar-31/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-filter-bar-31.liquid`
- `snippets/blko-filter-bar-31-part.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-checkbox.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-select.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-filter-bar-31.css`
- `assets/blko-filter-bar-31.js`
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
| `label` | text | Region label | Filter and sort |
| `sticky` | checkbox | Sticky on desktop | true |
| `show_density` | checkbox | Show grid density toggle | true |
| `roast_label` | text | Roast filter label | Roast |
| `process_label` | text | Process filter label | Process |
| `origin_label` | text | Origin filter label | Origin |
| `currency` | text | Currency symbol | $ |
| `roast_names` | textarea | Roast levels (one per line, light to dark) | Light Light-medium Medium Medium-dark Dark |
| `processes` | text | Processes (comma separated) | Washed, Natural, Honey, Anaerobic |
| `origins` | text | Origins (comma separated) | Ethiopia, Kenya, Rwanda, Colombia, Guatemala, Peru, Brazil, Indonesia |
| `price_min` | number | Lowest price | 18 |
| `price_max` | number | Highest price | 32 |
| `sorts` | textarea | Sort options (value | label per line) | manual \| Featured created-descending \| Newest price-ascending \| Price, low to high price-descending \| Price, high to low best-rated \| Best rated |
| `catalog` | textarea | Sample catalog (origin | process | roast 1-5 | price per line) | Ethiopia \| Natural \| 1 \| 24 Kenya \| Washed \| 1 \| 26 Brazil \| Natural \| 4 \| 21 Colombia \| Washed \| 2 \| 22 Guatemala \| Honey \| 3 \| 23 Peru \| Washed \| 4 \| 19 Rwanda \| Washed \| 2 \| 25 Indonesia \| Anaerobic \| 5 \| 22 Ethiopia \| Anaerobic \| 2 \| 32 Brazil \| Honey \| 4 \| 18 Colombia \| Washed \| 3 \| 20 Indonesia \| Washed \| 5 \| 19 Ethiopia \| Washed \| 1 \| 25 Guatemala \| Washed \| 3 \| 22 Kenya \| Washed \| 1 \| 29 Peru \| Washed \| 3 \| 20 Rwanda \| Natural \| 2 \| 27 Brazil \| Natural \| 4 \| 19 Colombia \| Washed \| 3 \| 18 Colombia \| Washed \| 3 \| 21 Indonesia \| Honey \| 4 \| 23 Brazil \| Natural \| 5 \| 18 Brazil \| Natural \| 5 \| 20 Rwanda \| Honey \| 2 \| 26 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-filter-bar-31.css`, `blko-filter-bar-31.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-filter-bar-31-part.liquid`, `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-checkbox.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`, `blko-ui-select.liquid`
- Locale keys: `blko.filter_bar_31.active`, `blko.filter_bar_31.any_process`, `blko.filter_bar_31.clear_all`, `blko.filter_bar_31.close`, `blko.filter_bar_31.close_filters`, `blko.filter_bar_31.density`, `blko.filter_bar_31.done`, `blko.filter_bar_31.filter_sort`, `blko.filter_bar_31.from`, `blko.filter_bar_31.many`, `blko.filter_bar_31.one`, `blko.filter_bar_31.origin`, `blko.filter_bar_31.per_row`, `blko.filter_bar_31.price`, `blko.filter_bar_31.price_legend`, `blko.filter_bar_31.process`, `blko.filter_bar_31.remove`, `blko.filter_bar_31.roast`, `blko.filter_bar_31.roast_suffix`, `blko.filter_bar_31.scale_hint`, `blko.filter_bar_31.sheet_title`, `blko.filter_bar_31.show`, `blko.filter_bar_31.sort`, `blko.filter_bar_31.title`, `blko.filter_bar_31.to`, `blko.filter_bar_31.up_to`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
