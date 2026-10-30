# Account order detail

Account order detail card with line items and a back link.

- Category: order-status
- Kind: section
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account order detail" (id `order-detail`, theme `balm-2`; Shopify bundle: sections/balm-2/order-detail/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-order-detail.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/sections/blko-order-detail.liquid
   - `snippets/blko-demo-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/snippets/blko-demo-card.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/snippets/blko-icon.liquid
   - `snippets/blko-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/snippets/blko-rating.liquid
   - `assets/blko-order-detail.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/assets/blko-order-detail.css
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/order-detail/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-order-detail.liquid`
- `snippets/blko-demo-card.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-rating.liquid`
- `assets/blko-order-detail.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `show_back` | checkbox | Show back link | true |
| `back_label` | text | Back link label | ← Back to orders |
| `back_link` | url | Back link |  |
| `kicker_label` | text | Order number label | Order No. |
| `heading` | text | Heading | Order details |
| `placed_label` | text | Date label | Placed |
| `items_heading` | text | Items heading | Items |
| `show_images` | checkbox | Show item images | true |
| `summary_position` | select | Summary position on large screens | right |
| `summary_heading` | text | Summary heading | Order summary |
| `subtotal_label` | text | Subtotal label | Subtotal |
| `discount_label` | text | Discount label | Discount |
| `shipping_label` | text | Shipping label | Shipping |
| `free_label` | text | Free shipping label | Free |
| `tax_label` | text | Tax label | Tax |
| `total_label` | text | Total label | Total |
| `show_address` | checkbox | Show delivery address | true |
| `address_heading` | text | Address heading | Delivery address |
| `sample_number` | text | Order number | 1042 |
| `sample_date` | text | Date | May 18, 2026 |
| `sample_status` | text | Status | Delivered |
| `sample_shipping` | number | Shipping cost | 0 |
| `sample_address` | textarea | Address | Sample Customer 42 Example Street Demo City, 00000 |

## Blocks

- `line_item`: Line item

## Dependencies

- Assets: `blko-order-detail.css`
- Snippets: `blko-demo-card.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-rating.liquid`
- Locale keys: `blko.customer.track`, `blko.demo.product_1`, `blko.demo.product_10`, `blko.demo.product_11`, `blko.demo.product_12`, `blko.demo.product_2`, `blko.demo.product_3`, `blko.demo.product_4`, `blko.demo.product_5`, `blko.demo.product_6`, `blko.demo.product_7`, `blko.demo.product_8`, `blko.demo.product_9`, `blko.order_detail.cancelled`, `blko.order_detail.quantity`, `blko.order_detail.sample_note`, `blko.products.add_to_cart`, `blko.products.rating`, `blko.products.regular_price`, `blko.products.sale`, `blko.products.sale_price`, `blko.recommendations.add` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `card_show_rating`

Generated file: do not edit; open an issue instead.
