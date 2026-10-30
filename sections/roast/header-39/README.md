# Header 39 - Roast bar

Sticky serif bar that shrinks and hides on scroll.

- Category: header
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/header--header-39.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Header 39 - Roast bar" (id `header-39`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/header--header-39.html; Shopify bundle: sections/roast/header-39/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-header-39.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/sections/blko-header-39.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/snippets/blko-ui-icon.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-f-syne.woff2
   - `assets/blko-header-39.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-header-39.css
   - `assets/blko-header-39.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-header-39.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-roast-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/header-39/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-header-39.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-header-39.css`
- `assets/blko-header-39.js`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `brand` | text | Wordmark (blank = store name) | Halden |
| `tagline` | text | Tagline | Roasters · since 2014 |
| `menu` | link_list | Menu |  |
| `demo_links` | textarea | Demo links (Name | note per line) | Coffee \| 14 single origins Tea & matcha \| Leaf, whisked, iced Subscriptions \| Fresh every 2–6 weeks Brew gear \| Kettles, drippers, grinders Brew guides \| Recipes from the bar |
| `roast_line` | text | Roast line (wide screens) | Next roast Mon |
| `sheet_line` | text | Phone sheet line | Next roast Monday · free shipping over $45 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-header-39.css`, `blko-header-39.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-icon.liquid`
- Locale keys: `blko.header_39.account`, `blko.header_39.bag`, `blko.header_39.close`, `blko.header_39.home`, `blko.header_39.main`, `blko.header_39.menu`, `blko.header_39.open`, `blko.header_39.search`, `blko.header_39.sign_in`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
