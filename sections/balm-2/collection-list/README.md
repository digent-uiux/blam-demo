# Collection list

Grid of collection tiles with a heading and view-all link.

- Category: collection-list
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/collection-list--collection-list.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection list" (id `collection-list`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/collection-list--collection-list.html; Shopify bundle: sections/balm-2/collection-list/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-collection-list.liquid`
- `snippets/blko-demo-tile.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Shop by ritual |
| `heading_size` | select | Heading size | blko-h2 |
| `text` | richtext | Text |  |
| `link_label` | text | Link label | All collections |
| `link_url` | url | Link |  |
| `columns_desktop` | range | Columns on desktop | 4 |
| `columns_mobile` | select | Columns on mobile | 2 |
| `image_ratio` | select | Image ratio | square |
| `title_position` | select | Title position | below |
| `show_count` | checkbox | Show product count | false |

## Blocks

- `collection`: Collection

## Dependencies

- Assets: none
- Snippets: `blko-demo-tile.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`
- Locale keys: `blko.collections.count`, `blko.demo.collection_1`, `blko.demo.collection_2`, `blko.demo.collection_3`, `blko.demo.collection_4` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
