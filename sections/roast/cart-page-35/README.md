# Cart page, espresso

Bag with a shipping meter, subscribe toggles and an espresso summary.

- Category: cart
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/cart--cart-page-35.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Cart page, espresso" (id `cart-page-35`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/cart--cart-page-35.html; Shopify bundle: sections/roast/cart-page-35/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-cart-page-35.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/sections/blko-cart-page-35.liquid
   - `snippets/blko-cart-page-35-line.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-cart-page-35-line.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-checkbox.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-checkbox.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-payment-marks.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-payment-marks.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-select.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-select.liquid
   - `snippets/blko-ui-switch.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/snippets/blko-ui-switch.liquid
   - `assets/blko-cart-page-35.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-cart-page-35.css
   - `assets/blko-cart-page-35.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-cart-page-35.js
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-f-syne.woff2
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/cart-page-35/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-cart-page-35.liquid`
- `snippets/blko-cart-page-35-line.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-checkbox.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-payment-marks.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-select.liquid`
- `snippets/blko-ui-switch.liquid`
- `assets/blko-cart-page-35.css`
- `assets/blko-cart-page-35.js`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
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
| `label` | text | Region label | Your bag |
| `eyebrow` | text | Roast date line | Next roast Mon 2 Nov · order by Sunday |
| `heading` | text | Heading (em allowed) | Your <em>bag</em> |
| `continue_label` | text | Continue label | Continue shopping |
| `continue_link` | url | Continue link |  |
| `free_over` | number | Free shipping over | 45 |
| `ship_fee` | number | Shipping fee below it | 6 |
| `sub_pct` | number | Subscribe & save % | 15 |
| `grinds` | text | Grinds (preview, comma separated) | Whole bean, Espresso, Filter, French press |
| `size_s` | text | Small size (preview) | 250 g |
| `size_l` | text | Large size (preview) | 1 kg |
| `cadences` | text | Cadences (preview, comma separated) | 1 week, 2 weeks, 4 weeks |
| `show_gift` | checkbox | Show gift note | true |
| `demo_code` | text | Code hint (placeholder, preview code) | HALDEN10 |
| `code_pct` | number | Preview code % | 10 |
| `roast_line` | text | Roast line | Roasted Monday · ships Tuesday |
| `empty_label` | text | Label | 0 items · nothing roasting for you yet |
| `empty_title` | text | Heading (em allowed) | Your bag is <em>empty</em>. The roaster isn’t. |
| `empty_text` | textarea | Text | Fourteen single origins, five blends and a short list of teas, roasted every Monday. |
| `shop_label` | text | Button label | Shop coffee |
| `shop_link` | url | Button link |  |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `line`: Line (preview)

## Dependencies

- Assets: `blko-cart-page-35.css`, `blko-cart-page-35.js`, `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-cart-page-35-line.liquid`, `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-checkbox.liquid`, `blko-ui-icon.liquid`, `blko-ui-payment-marks.liquid`, `blko-ui-section.liquid`, `blko-ui-select.liquid`, `blko-ui-switch.liquid`
- Locale keys: `blko.cart_page_35.apply`, `blko.cart_page_35.aside`, `blko.cart_page_35.bad_code`, `blko.cart_page_35.bad_live`, `blko.cart_page_35.checkout`, `blko.cart_page_35.code`, `blko.cart_page_35.dec`, `blko.cart_page_35.discount`, `blko.cart_page_35.every`, `blko.cart_page_35.free`, `blko.cart_page_35.free_over`, `blko.cart_page_35.gift`, `blko.cart_page_35.gift_hint`, `blko.cart_page_35.gift_note`, `blko.cart_page_35.gift_ph`, `blko.cart_page_35.grind`, `blko.cart_page_35.inc`, `blko.cart_page_35.item`, `blko.cart_page_35.items`, `blko.cart_page_35.items_row`, `blko.cart_page_35.left_a`, `blko.cart_page_35.left_b`, `blko.cart_page_35.lines`, `blko.cart_page_35.no_code`, `blko.cart_page_35.progress`, `blko.cart_page_35.qty_of`, `blko.cart_page_35.remove`, `blko.cart_page_35.restore`, `blko.cart_page_35.rm_name`, `blko.cart_page_35.shipping`, `blko.cart_page_35.size`, `blko.cart_page_35.sub_save`, `blko.cart_page_35.subscribe`, `blko.cart_page_35.summary`, `blko.cart_page_35.tax`, `blko.cart_page_35.total`, `blko.cart_page_35.unlocked`, `blko.cart_page_35.was`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.payment.bank`, `blko_ui.payment.card`, `blko_ui.payment.gift_card`, `blko_ui.payment.label`, `blko_ui.payment.pay_later`, `blko_ui.payment.wallet`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
