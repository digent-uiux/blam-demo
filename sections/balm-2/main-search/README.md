# Search results

Search page with form, result tabs and product, article and page results.

- Category: main-search
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/main-search--main-search.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Search results" (id `main-search`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/main-search--main-search.html; Shopify bundle: sections/balm-2/main-search/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-search.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/sections/blko-main-search.liquid
   - `snippets/blko-demo-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-demo-card.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-pagination.liquid
   - `snippets/blko-price.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-price.liquid
   - `snippets/blko-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-product-card.liquid
   - `snippets/blko-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/snippets/blko-rating.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-search/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-search.liquid`
- `snippets/blko-demo-card.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `snippets/blko-price.liquid`
- `snippets/blko-product-card.liquid`
- `snippets/blko-rating.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Search |
| `heading_size` | select | Heading size | h2 |
| `show_form` | checkbox | Show search form | true |
| `placeholder` | text | Search placeholder | Search products, articles and pages |
| `intro` | richtext | Text before a search |  |
| `per_page` | range | Results per page | 24 |
| `columns_desktop` | range | Columns on desktop | 4 |
| `columns_mobile` | select | Columns on mobile | 2 |
| `show_price` | checkbox | Show price | true |
| `show_vendor` | checkbox | Show vendor | false |
| `show_rating` | checkbox | Show rating | true |
| `quick_add` | checkbox | Show add to bag on cards | false |
| `show_articles` | checkbox | Show articles | true |
| `show_pages` | checkbox | Show pages | true |
| `show_excerpt` | checkbox | Show article and page excerpt | true |
| `empty_heading` | text | Heading |  |
| `empty_text` | text | Text | No results for “[terms]”. Check the spelling or try a different word. |
| `empty_button_label` | text | Button label | Browse all products |
| `empty_button_link` | url | Button link |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-demo-card.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`, `blko-price.liquid`, `blko-product-card.liquid`, `blko-rating.liquid`
- Locale keys: `blko.demo.product_1`, `blko.demo.product_10`, `blko.demo.product_11`, `blko.demo.product_12`, `blko.demo.product_2`, `blko.demo.product_3`, `blko.demo.product_4`, `blko.demo.product_5`, `blko.demo.product_6`, `blko.demo.product_7`, `blko.demo.product_8`, `blko.demo.product_9`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous`, `blko.products.add_to_cart`, `blko.products.choose_options`, `blko.products.from`, `blko.products.rating`, `blko.products.regular_price`, `blko.products.sale`, `blko.products.sale_price`, `blko.products.sold_out`, `blko.recommendations.add`, `blko.search.article`, `blko.search.label`, `blko.search.no_results`, `blko.search.page`, `blko.search.placeholder`, `blko.search.results_count`, `blko.search.submit` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `card_show_rating`, `card_show_vendor`

Generated file: do not edit; open an issue instead.
