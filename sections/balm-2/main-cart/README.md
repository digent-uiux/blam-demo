# Cart

Cart page with line items, free-shipping bar, note and summary.

- Category: cart
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/cart--main-cart.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Cart" (id `main-cart`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/cart--main-cart.html; Shopify bundle: sections/balm-2/main-cart/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-cart.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/sections/blko-main-cart.liquid
   - `snippets/blko-demo-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-demo-card.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-icon.liquid
   - `snippets/blko-price.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-price.liquid
   - `snippets/blko-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-product-card.liquid
   - `snippets/blko-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/snippets/blko-rating.liquid
   - `assets/blko-cart.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/assets/blko-cart.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-cart/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-cart.liquid`
- `snippets/blko-demo-card.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-price.liquid`
- `snippets/blko-product-card.liquid`
- `snippets/blko-rating.liquid`
- `assets/blko-cart.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Your bag |
| `heading_size` | select | Heading size | h2 |
| `show_thumbnails` | checkbox | Show product images | true |
| `summary_style` | select | Summary style | panel |
| `empty_heading` | text | Heading |  |
| `empty_text` | richtext | Text | <p>Your bag is empty.</p> |
| `empty_button_label` | text | Button label | Continue shopping |
| `empty_button_link` | url | Button link |  |
| `empty_alignment` | select | Alignment | start |
| `show_login_note` | checkbox | Show log in note | true |
| `show_upsell` | checkbox | Show upsell products | true |
| `upsell_heading` | text | Heading | Pairs well with |
| `upsell_collection` | collection | Collection |  |
| `upsell_products` | product_list | Or pick products |  |
| `upsell_limit` | range | Products to show | 4 |
| `upsell_quick_add` | checkbox | Show add to bag on cards | true |

## Blocks

- `shipping_bar`: Free shipping bar
- `note`: Order note
- `subtotal`: Subtotal
- `text`: Text
- `buttons`: Checkout buttons
- `@app`: @app

## Dependencies

- Assets: `blko-cart.js`
- Snippets: `blko-demo-card.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-price.liquid`, `blko-product-card.liquid`, `blko-rating.liquid`
- Locale keys: `blko.cart.checkout`, `blko.cart.decrease`, `blko.cart.have_account_html`, `blko.cart.increase`, `blko.cart.items`, `blko.cart.note`, `blko.cart.product`, `blko.cart.quantity`, `blko.cart.quantity_for`, `blko.cart.remove`, `blko.cart.shipping_progress`, `blko.cart.subtotal`, `blko.cart.taxes_excluded`, `blko.cart.taxes_included`, `blko.cart.total`, `blko.cart.update`, `blko.demo.product_1`, `blko.demo.product_10`, `blko.demo.product_11`, `blko.demo.product_12`, `blko.demo.product_2`, `blko.demo.product_3`, `blko.demo.product_4`, `blko.demo.product_5`, `blko.demo.product_6`, `blko.demo.product_7`, `blko.demo.product_8`, `blko.demo.product_9`, `blko.products.add_to_cart`, `blko.products.choose_options`, `blko.products.from`, `blko.products.rating`, `blko.products.regular_price`, `blko.products.sale`, `blko.products.sale_price`, `blko.products.sold_out`, `blko.recommendations.add` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `card_show_rating`, `card_show_vendor`

Generated file: do not edit; open an issue instead.
