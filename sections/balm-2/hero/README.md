# Hero

Full-bleed image hero with overlay, heading and two buttons.

- Category: hero-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/hero-banner--hero.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Hero" (id `hero`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/hero-banner--hero.html; Shopify bundle: sections/balm-2/hero/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-hero.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |
| `image` | image_picker | Image |  |
| `mobile_image` | image_picker | Mobile image |  |
| `overlay_opacity` | range | Scrim opacity | 60 |
| `height` | select | Height | large |
| `content_position` | select | Content position | bottom-left |
| `full_width` | checkbox | Full width | true |
| `text_color` | select | Text on image | light |
| `heading` | inline_richtext | Heading | One drop, <em>all day</em> glow. |
| `heading_size` | select | Heading size | large |
| `text` | text | Text | Rosehip and squalane, cold-pressed in small batches. Sinks in within a minute and never feels greasy. |
| `button_label` | text | Label | Shop face oils |
| `button_link` | url | Link |  |
| `button_style` | select | Style | arrow |
| `button_label_2` | text | Label | See the ingredients |
| `button_link_2` | url | Link |  |
| `button_style_2` | select | Style | on-image |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-fallback-image.liquid`, `blko-icon.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
