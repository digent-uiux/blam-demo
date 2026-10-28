# Product information

Product page with gallery, variant picker, price, buy buttons and details.

- Category: main-product
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/main-product--main-product.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Product information" (id `main-product`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/main-product--main-product.html; Shopify bundle: sections/balm-2/main-product/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-product.liquid`
- `snippets/blko-demo-card.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-price.liquid`
- `snippets/blko-product-complementary.liquid`
- `snippets/blko-product-gallery.liquid`
- `snippets/blko-product-quantity.liquid`
- `snippets/blko-product-variant-picker.liquid`
- `snippets/blko-rating.liquid`
- `assets/blko-product.js`
- `assets/blko-recommendations.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `media_width` | select | Media width on desktop | 60 |
| `sticky_info` | checkbox | Keep product info in view while scrolling | true |
| `gallery_layout` | select | Gallery layout | thumbs_left |
| `media_ratio` | select | Media ratio | portrait |
| `image_zoom` | select | Image zoom | lightbox |

## Blocks

- `@app`: @app
- `vendor`: Vendor
- `title`: Title
- `sku`: SKU
- `rating`: Rating
- `price`: Price
- `inventory`: Inventory status
- `text`: Text
- `variant_picker`: Variant picker
- `quantity`: Quantity
- `buy_buttons`: Buy buttons
- `description`: Description
- `collapsible_tab`: Collapsible tab
- `icon_with_text`: Icons with text
- `share`: Share
- `popup`: Pop-up
- `complementary`: Complementary products
- `custom_liquid`: Custom Liquid

## Dependencies

- Assets: `blko-product.js`, `blko-recommendations.js`
- Snippets: `blko-demo-card.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-price.liquid`, `blko-product-complementary.liquid`, `blko-product-gallery.liquid`, `blko-product-quantity.liquid`, `blko-product-variant-picker.liquid`, `blko-rating.liquid`
- Locale keys: `blko.cart.taxes_excluded`, `blko.cart.taxes_included`, `blko.demo.product_1`, `blko.demo.product_10`, `blko.demo.product_11`, `blko.demo.product_12`, `blko.demo.product_2`, `blko.demo.product_3`, `blko.demo.product_4`, `blko.demo.product_5`, `blko.demo.product_6`, `blko.demo.product_7`, `blko.demo.product_8`, `blko.demo.product_9`, `blko.general.close`, `blko.product.backorder`, `blko.product.breadcrumb`, `blko.product.decrease`, `blko.product.in_stock`, `blko.product.increase`, `blko.product.low_stock`, `blko.product.media_gallery`, `blko.product.out_of_stock`, `blko.product.quantity`, `blko.product.sale_badge`, `blko.product.share_copied`, `blko.product.show_media`, `blko.product.sku`, `blko.product.variant`, `blko.product.view_in_space`, `blko.product.zoom`, `blko.products.add_to_cart`, `blko.products.from`, `blko.products.rating`, `blko.products.regular_price`, `blko.products.sale`, `blko.products.sale_price`, `blko.products.sold_out`, `blko.products.unavailable`, `blko.recommendations.add`, `blko.recommendations.view` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `card_show_rating`, `free_shipping_note`

Generated file: do not edit; open an issue instead.
