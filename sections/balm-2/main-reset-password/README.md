# Reset password

Form to set a new account password.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-reset-password.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reset password" (id `main-reset-password`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-reset-password.html; Shopify bundle: sections/balm-2/main-reset-password/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-reset-password.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-reset-password/sections/blko-main-reset-password.liquid
   - `snippets/blko-account-shell.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-reset-password/snippets/blko-account-shell.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-reset-password/snippets/blko-fallback-image.liquid
   - `assets/blko-customer.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-reset-password/assets/blko-customer.css
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-reset-password/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-reset-password.liquid`
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
| `heading` | text | Heading | Choose a new password |
| `heading_size` | select | Heading size | h2 |
| `text` | richtext | Intro text | <p>Enter a new password for your account.</p> |
| `layout` | select | Layout | center |
| `image` | image_picker | Side image |  |
| `image_position` | select | Image position | right |
| `form_width` | range | Form width | 440 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-customer.css`
- Snippets: `blko-account-shell.liquid`, `blko-fallback-image.liquid`
- Locale keys: `blko.customer.password`, `blko.customer.password_confirm`, `blko.customer.reset_submit` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
