# FAQ

Question and answer accordion with a heading and help link.

- Category: faq
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/faq--faq.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "FAQ" (id `faq`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/faq--faq.html; Shopify bundle: sections/balm-2/faq/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-faq.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/faq/sections/blko-faq.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/faq/snippets/blko-icon.liquid
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-faq.liquid`
- `snippets/blko-icon.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Questions, <em>answered</em> |
| `heading_size` | select | Heading size | blko-h2 |
| `text` | richtext | Intro | <p>Short answers about our formulas, shipping and returns.</p> |
| `link_label` | text | Button label |  |
| `link_url` | url | Button link |  |
| `button_style` | select | Button style | outline |
| `layout` | select | Layout | split |
| `open_first` | checkbox | Open the first question | true |

## Blocks

- `question`: Question

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
