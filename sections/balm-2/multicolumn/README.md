# Multicolumn

Columns of icon or image, heading and short text.

- Category: multicolumn
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/multicolumn--multicolumn.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Multicolumn" (id `multicolumn`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/multicolumn--multicolumn.html; Shopify bundle: sections/balm-2/multicolumn/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-multicolumn.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/multicolumn/sections/blko-multicolumn.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/multicolumn/snippets/blko-icon.liquid
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-multicolumn.liquid`
- `snippets/blko-icon.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | What goes into <em>every</em> bottle |
| `heading_size` | select | Heading size | blko-h2 |
| `heading_alignment` | select | Heading alignment | left |
| `text` | richtext | Intro |  |
| `columns_desktop` | range | Columns on desktop | 3 |
| `columns_mobile` | select | Columns on mobile | 1 |
| `column_style` | select | Column style | plain |
| `text_alignment` | select | Column alignment | left |
| `image_ratio` | select | Image ratio | square |
| `button_label` | text | Button label |  |
| `button_link` | url | Button link |  |
| `button_style` | select | Button style | outline |

## Blocks

- `column`: Column

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
