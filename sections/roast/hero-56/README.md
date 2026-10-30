# Hero 56 - Pour stage

Full-bleed pour stage with a giant split headline.

- Category: hero-banner
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/hero-banner--hero-56.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Hero 56 - Pour stage" (id `hero-56`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/hero-banner--hero-56.html; Shopify bundle: sections/roast/hero-56/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-hero-56.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/sections/blko-hero-56.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/snippets/blko-ui-icon.liquid
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-f-syne.woff2
   - `assets/blko-hero-56.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-hero-56.css
   - `assets/blko-hero-56.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-hero-56.js
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-roast-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/roast/hero-56/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-hero-56.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-hero-56.css`
- `assets/blko-hero-56.js`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Halden roasters |
| `image` | image_picker | Image (focal point is used) |  |
| `eyebrow` | text | Roast line | Roast no. 214 |
| `eyebrow_note` | text | Roast note | Ethiopia · Guji · natural |
| `ring` | text | Ring text | Fresh roast every Monday · small batch ·  |
| `badge` | text | Ring badge | 214 |
| `line_1` | text | Headline line 1 (wrap a word in <em>) | Roasted |
| `line_2` | text | Headline line 2 (flush right) | <em>on</em> Monday. |
| `text` | textarea | Lead | Fourteen single origins and a short list of whole-leaf teas, roasted in small batches every Monday and at your door by Thursday. |
| `button_1` | text | Button 1 | Shop coffee |
| `link_1` | url | Button 1 link |  |
| `button_2` | text | Button 2 | Start a subscription |
| `link_2` | url | Button 2 link |  |
| `show_card` | checkbox | Show the tasting card (896px up) | true |
| `product` | product | Product (quick add) |  |
| `card_label` | text | Card label | In the cup |
| `card_notes` | text | Notes (wrap a word in <em>) | Blueberry, cacao nib, <em>jasmine</em> |
| `card_name` | text | Name without a product | Guji natural |
| `price` | text | Price without a product | $22 |
| `card_size` | text | Size | 250 g |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-hero-56.css`, `blko-hero-56.js`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`
- Locale keys: `blko.hero_56.add`, `blko.hero_56.added`, `blko.hero_56.error`, `blko_ui.field.optional`, `blko_ui.option.sold_out`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
