# Customer order

Single order detail with line items, totals and addresses.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-order.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Customer order" (id `main-order`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-order.html; Shopify bundle: sections/balm-2/main-order/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-order.liquid`
- `snippets/blko-account-shell.liquid`
- `snippets/blko-fallback-image.liquid`
- `assets/blko-customer.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Order [order] |
| `heading_size` | select | Heading size | h1 |
| `text` | richtext | Intro text |  |
| `layout` | select | Layout | center |
| `image` | image_picker | Side image |  |
| `image_position` | select | Image position | right |
| `show_back_link` | checkbox | Show back to account link | true |
| `show_sku` | checkbox | Show SKU | true |
| `show_addresses` | checkbox | Show addresses panel | true |
| `panel_style` | select | Side panel style | tint |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-customer.css`
- Snippets: `blko-account-shell.liquid`, `blko-fallback-image.liquid`
- Locale keys: `blko.cart.product`, `blko.cart.quantity`, `blko.cart.subtotal`, `blko.cart.total`, `blko.customer.back_to_account`, `blko.customer.billing`, `blko.customer.cancelled`, `blko.customer.fulfilled_on`, `blko.customer.fulfillment`, `blko.customer.order_title`, `blko.customer.payment`, `blko.customer.placed_on`, `blko.customer.price`, `blko.customer.shipping`, `blko.customer.shipping_address`, `blko.customer.tax`, `blko.customer.track` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
