# Customer account

Signed-in account overview with order history.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-account.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Customer account" (id `main-account`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-account.html; Shopify bundle: sections/balm-2/main-account/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-account.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/sections/blko-main-account.liquid
   - `snippets/blko-account-shell.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/snippets/blko-account-shell.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/snippets/blko-pagination.liquid
   - `assets/blko-customer.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/assets/blko-customer.css
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-account/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-account.liquid`
- `snippets/blko-account-shell.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `assets/blko-customer.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Your account |
| `heading_size` | select | Heading size | h1 |
| `text` | richtext | Intro text |  |
| `layout` | select | Layout | center |
| `image` | image_picker | Side image |  |
| `image_position` | select | Image position | right |
| `show_welcome` | checkbox | Show welcome line | true |
| `orders_per_page` | range | Orders per page | 20 |
| `show_payment` | checkbox | Show payment status | true |
| `show_fulfillment` | checkbox | Show fulfillment status | true |
| `empty_text` | richtext | Text when there are no orders | <p>You haven’t placed any orders yet.</p> |
| `empty_button_label` | text | Button label | Continue shopping |
| `empty_button_link` | url | Button link |  |
| `show_address` | checkbox | Show default address | true |
| `panel_style` | select | Side panel style | tint |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-customer.css`
- Snippets: `blko-account-shell.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`
- Locale keys: `blko.cart.total`, `blko.customer.date`, `blko.customer.default_address`, `blko.customer.fulfillment`, `blko.customer.log_out`, `blko.customer.manage_addresses`, `blko.customer.no_address`, `blko.customer.no_orders`, `blko.customer.order`, `blko.customer.orders`, `blko.customer.payment`, `blko.customer.view_order`, `blko.customer.welcome`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
