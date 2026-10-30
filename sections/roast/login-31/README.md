# Sign in, account toggle

Espresso sign-in with sliding account toggle, loose-tea photo.

- Category: customer-account
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/customer-account--login-31.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Sign in, account toggle" (id `login-31`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/customer-account--login-31.html; Shopify bundle: sections/roast/login-31/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-login-31.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/sections/blko-login-31.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-checkbox.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-checkbox.liquid
   - `snippets/blko-ui-field.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-field.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/snippets/blko-ui-section.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-f-syne.woff2
   - `assets/blko-login-31.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-login-31.css
   - `assets/blko-login-31.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-login-31.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-roast-motion.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/login-31/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-login-31.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-checkbox.liquid`
- `snippets/blko-ui-field.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-login-31.css`
- `assets/blko-login-31.js`
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
| `label` | text | Region label | Sign in |
| `eyebrow` | text | Eyebrow | Your Halden account |
| `heading` | text | Heading | Welcome |
| `heading_em` | text | Heading, accent word | back |
| `show_signup` | checkbox | Show create account | true |
| `up_heading` | text | Sign-up heading | Join the |
| `up_heading_em` | text | Sign-up accent word | club |
| `image` | image_picker | Photo |  |
| `stamp` | text | Stamp | Members save 10% on every bag |
| `quote` | text | Quote | Five spoons, five teas, one morning. That is how we cup a new harvest. |
| `quote_source` | text | Quote source | Noor Vale · tea buyer |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

- `perk`: Perk

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-login-31.css`, `blko-login-31.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-checkbox.liquid`, `blko-ui-field.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.login_31.account`, `blko.login_31.create`, `blko.login_31.created`, `blko.login_31.email`, `blko.login_31.first_name`, `blko.login_31.forgot`, `blko.login_31.hide`, `blko.login_31.notes`, `blko.login_31.notes_hint`, `blko.login_31.password`, `blko.login_31.remember`, `blko.login_31.show`, `blko.login_31.sign_in`, `blko.login_31.signing`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
