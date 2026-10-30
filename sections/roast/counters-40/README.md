# Counters 40 - Photo band

Full-bleed photo band, parallax zoom, 4-up count-up bar.

- Category: rich-text
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/rich-text--counters-40.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Counters 40 - Photo band" (id `counters-40`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/rich-text--counters-40.html; Shopify bundle: sections/roast/counters-40/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-counters-40.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/sections/blko-counters-40.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/snippets/blko-ui-section.liquid
   - `assets/blko-counters-40.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-counters-40.css
   - `assets/blko-counters-40.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-counters-40.js
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-f-syne.woff2
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-roast-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/counters-40/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-counters-40.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-counters-40.css`
- `assets/blko-counters-40.js`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Small batches, big detail |
| `eyebrow` | text | Eyebrow | By the numbers |
| `line_1` | text | Heading line 1 | Small batches, |
| `line_2` | text | Heading line 2 (wrap a word in <em>) | big <em>detail.</em> |
| `text` | text | Text | Twelve kilos to a batch, cupped the next morning, and only then allowed out of the building. |
| `caption` | text | Caption (desktop) | The bar at Kiln Lane · 07:40 |
| `image` | image_picker | Image |  |
| `alt` | text | Image alt | Inside a coffee bar, warm light over the counter |
| `scrim` | range | Scrim strength | 100 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

- `stat`: Stat

## Dependencies

- Assets: `blko-counters-40.css`, `blko-counters-40.js`, `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-roast.liquid`, `blko-ui-section.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
