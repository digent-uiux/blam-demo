# Header

Sticky header with menu, logo, search, account and cart.

- Category: header
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/header--header.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Header" (id `header`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/header--header.html; Shopify bundle: sections/balm-2/header/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-header.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/header/sections/blko-header.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/header/snippets/blko-icon.liquid
   - `assets/blko-header.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/header/assets/blko-header.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/header/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-header.liquid`
- `snippets/blko-icon.liquid`
- `assets/blko-header.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 8 |
| `padding_bottom` | range | Bottom padding | 8 |
| `menu` | link_list | Menu | main-menu |
| `fallback_links` | text | Menu shown before a menu is set | Skincare, Makeup, Hair, Body, Sale |
| `logo_position` | select | Logo position | center |
| `tagline` | text | Tagline | Skincare for slow mornings |
| `show_search` | checkbox | Show search | true |
| `show_account` | checkbox | Show account | true |
| `show_empty_count` | checkbox | Show cart count when empty | true |
| `sticky` | checkbox | Sticky header | true |
| `show_border` | checkbox | Show bottom border | true |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-header.js`
- Snippets: `blko-icon.liquid`
- Locale keys: `blko.general.close`, `blko.header.account`, `blko.header.cart_count`, `blko.header.log_in`, `blko.header.main`, `blko.header.menu`, `blko.header.open_menu`, `blko.header.search` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `logo`, `logo_text`, `logo_width`

Generated file: do not edit; open an issue instead.
