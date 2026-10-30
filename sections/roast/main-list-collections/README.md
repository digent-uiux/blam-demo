# Collections list

Paginated grid of every collection.

- Category: collection-list
- Kind: section
- Theme: roast
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collections list" (id `main-list-collections`, theme `roast`; Shopify bundle: sections/roast/main-list-collections/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-list-collections.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/sections/blko-main-list-collections.liquid
   - `snippets/blko-demo-tile.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/snippets/blko-demo-tile.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/snippets/blko-pagination.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/roast/main-list-collections/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-list-collections.liquid`
- `snippets/blko-demo-tile.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Shop by collection |
| `text` | richtext | Text |  |
| `heading_size` | select | Heading size | h1 |
| `heading_alignment` | select | Heading alignment | start |
| `per_page` | range | Collections per page | 24 |
| `columns_desktop` | range | Columns on desktop | 3 |
| `columns_mobile` | select | Columns on mobile | 2 |
| `image_ratio` | select | Image ratio | portrait |
| `show_description` | checkbox | Show description | false |
| `show_count` | checkbox | Show product count | true |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-demo-tile.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`
- Locale keys: `blko.collections.count.one`, `blko.collections.count.other`, `blko.collections.empty`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
