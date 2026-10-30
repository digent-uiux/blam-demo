# Blog, magazine grid

Feature over seven columns, offset magazine grid, espresso text card.

- Category: main-blog
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/roast/sections/main-blog--blog-94.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Blog, magazine grid" (id `blog-94`, theme `roast`; live demo: https://demo.blocko.ai/html/roast/sections/main-blog--blog-94.html; Shopify bundle: sections/roast/blog-94/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-blog-94.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/sections/blko-blog-94.liquid
   - `snippets/blko-blog-94-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-blog-94-card.liquid
   - `snippets/blko-blog-94-row.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-blog-94-row.liquid
   - `snippets/blko-fonts-roast.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-fonts-roast.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/snippets/blko-ui-section.liquid
   - `assets/blko-blog-94.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-blog-94.css
   - `assets/blko-blog-94.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-blog-94.js
   - `assets/blko-f-ibm-plex-mono-400.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-f-ibm-plex-mono-400.woff2
   - `assets/blko-f-ibm-plex-mono-500.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-f-ibm-plex-mono-500.woff2
   - `assets/blko-f-ibm-plex-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-f-ibm-plex-sans.woff2
   - `assets/blko-f-syne.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-f-syne.woff2
   - `assets/blko-roast-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-roast-motion.css
   - `assets/blko-roast-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-roast-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/blog-94/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Colours, fonts (Syne + IBM Plex Sans + IBM Plex Mono, OFL, latin subset), corners and type style: the Roast preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-blog-94.liquid`
- `snippets/blko-blog-94-card.liquid`
- `snippets/blko-blog-94-row.liquid`
- `snippets/blko-fonts-roast.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-blog-94.css`
- `assets/blko-blog-94.js`
- `assets/blko-f-ibm-plex-mono-400.woff2`
- `assets/blko-f-ibm-plex-mono-500.woff2`
- `assets/blko-f-ibm-plex-sans.woff2`
- `assets/blko-f-syne.woff2`
- `assets/blko-roast-motion.css`
- `assets/blko-roast-motion.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Journal articles |
| `blog` | blog | Blog (outside a blog page) |  |
| `min_read` | text | Read time suffix | min read |
| `shown` | number | Shown count | 6 |
| `more_shown` | number | Shown count after load more | 9 |
| `total` | number | Total count | 38 |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `story`: Story (no blog)
- `more`: Load-more story (no blog)

## Dependencies

- Assets: `blko-blog-94.css`, `blko-blog-94.js`, `blko-f-ibm-plex-mono-400.woff2`, `blko-f-ibm-plex-mono-500.woff2`, `blko-f-ibm-plex-sans.woff2`, `blko-f-syne.woff2`, `blko-roast-motion.css`, `blko-roast-motion.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-blog-94-card.liquid`, `blko-blog-94-row.liquid`, `blko-fonts-roast.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.blog_94.done`, `blko.blog_94.feature`, `blko.blog_94.min_read`, `blko.blog_94.more`, `blko.blog_94.read`, `blko.blog_94.read_more`, `blko.blog_94.showing` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
