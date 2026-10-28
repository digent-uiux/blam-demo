# Rich text

Centered caption, heading, text and button blocks.

- Category: rich-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/rich-text--rich-text.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Rich text" (id `rich-text`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/rich-text--rich-text.html; Shopify bundle: sections/balm-2/rich-text/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-rich-text.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/rich-text/sections/blko-rich-text.liquid
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-rich-text.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `alignment` | select | Alignment | center |
| `content_width` | select | Content width | medium |

## Blocks

- `caption`: Caption
- `heading`: Heading
- `text`: Text
- `button`: Buttons

## Dependencies

- Assets: none
- Snippets: none
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
