# Subscription 07

Full-bleed photo half and a builder on roast red.

- Category: subscription
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/subscription--subscription-07.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Subscription 07" (id `subscription-07`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/subscription--subscription-07.html; Shopify bundle: sections/roast/subscription-07/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-subscription-07.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/sections/blko-subscription-07.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/snippets/blko-ui-section.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-f-syne.woff2
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-roast-motion.js
   - `assets/blko-subscription-07.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-subscription-07.css
   - `assets/blko-subscription-07.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-subscription-07.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/subscription-07/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-subscription-07.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-subscription-07.css`
- `assets/blko-subscription-07.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | The roast club |
| `eyebrow` | text | Eyebrow | Subscribe & save up to 15% |
| `heading` | text | Heading (wrap a word in <em>) | The roast <em>club</em> |
| `lead` | textarea | Lead | Fresh coffee on your rhythm. Choose how often, how much and how you like it; we roast it the week it ships. |
| `image` | image_picker | Image |  |
| `alt` | text | Image alt | A portafilter, tamper and ground coffee laid flat on a dark surface |
| `caption` | text | Photo caption | Members since 2019 · 4,800 cups a week |
| `badge` | text | Badge | -15% |
| `ring` | text | Badge ring text | Roast club · first box · roast club · first box ·  |
| `product` | product | Subscription product |  |
| `price` | number | Price per bag (while no product) | 21 |
| `bags` | range | Bags to start with | 2 |
| `style_index` | range | Roast style selected first | 2 |
| `cadence_label` | text | Cadence label | Delivery |
| `bags_label` | text | Bags label | Bags · 250 g |
| `style_label` | text | Style label | Roast style |
| `per_label` | text | Price label | Per delivery |
| `button` | text | Button label | Start my subscription |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

- `cadence`: Cadence
- `style`: Roast style
- `perk`: Perk

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-subscription-07.css`, `blko-subscription-07.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.subscription_07.cadence`, `blko.subscription_07.error`, `blko.subscription_07.every`, `blko.subscription_07.fewer`, `blko.subscription_07.more`, `blko.subscription_07.per`, `blko.subscription_07.save`, `blko.subscription_07.was`, `blko.subscription_07.weeks`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
