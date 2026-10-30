# Why it works

Numbered reasons beside an image with a button.

- Category: multicolumn
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/multicolumn--why.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Why it works" (id `why`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/multicolumn--why.html; Shopify bundle: sections/balm-2/why/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-why.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/why/sections/blko-why.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/why/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/why/snippets/blko-icon.liquid
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-why.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-3 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Why it's in every routine |
| `lead` | text | Lead | Two years on one serum, so you don't need three. |
| `show_image` | checkbox | Show image | true |
| `image` | image_picker | Image |  |
| `button_label` | text | Button label | Shop the serum |
| `button_link` | url | Button link |  |
| `intro_position` | select | Intro position on large screens | left |
| `sticky_intro` | checkbox | Keep the intro in view while scrolling | true |
| `show_numbers` | checkbox | Show row numbers | true |

## Blocks

- `row`: Row

## Dependencies

- Assets: none
- Snippets: `blko-fallback-image.liquid`, `blko-icon.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
