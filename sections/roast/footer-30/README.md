# Footer 30 - Wordmark

Asymmetric wordmark footer with a live roast line.

- Category: footer
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/footer--footer-30.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Footer 30 - Wordmark" (id `footer-30`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/footer--footer-30.html; Shopify bundle: sections/roast/footer-30/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-footer-30.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/sections/blko-footer-30.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-payment-marks.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/snippets/blko-ui-payment-marks.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-f-syne.woff2
   - `assets/blko-footer-30.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-footer-30.css
   - `assets/blko-footer-30.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-footer-30.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/footer-30/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-footer-30.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-payment-marks.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-footer-30.css`
- `assets/blko-footer-30.js`
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
| `wordmark` | text | Wordmark (blank = store name) | Halden |
| `pitch` | text | Pitch | Specialty coffee and whole-leaf tea, roasted in small batches six days a week. |
| `address` | text | Address | 14 Kiln Lane, Unit 3 |
| `hours` | text | Hours | Bar open Tue–Sun · 8:00–16:00 |
| `next_roast` | text | Next roast | Roasting next: Monday 2 Nov |
| `next_ship` | text | Next ship day | Ships Tuesday · fresh to your door by Thursday |
| `newsletter` | checkbox | Show the newsletter | true |
| `form_label` | text | Newsletter label | Roast notes, every other Friday |
| `copyright` | text | Copyright (blank = store name) | Halden Coffee & Tea |
| `policy_menu` | link_list | Policies menu |  |
| `policy_demo` | text | Demo policies (while the menu is empty) | Privacy, Terms, Accessibility |
| `payment` | checkbox | Show payment icons | true |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

- `column`: Link column
- `social`: Social link

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-footer-30.css`, `blko-footer-30.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-payment-marks.liquid`
- Locale keys: `blko.footer_30.done`, `blko.footer_30.email`, `blko.footer_30.error`, `blko.footer_30.follow`, `blko.footer_30.footer`, `blko.footer_30.subscribe`, `blko.footer_30.subscribed`, `blko_ui.payment.bank`, `blko_ui.payment.card`, `blko_ui.payment.gift_card`, `blko_ui.payment.label`, `blko_ui.payment.pay_later`, `blko_ui.payment.wallet` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
