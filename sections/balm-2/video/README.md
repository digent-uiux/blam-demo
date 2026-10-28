# Video

Video section with heading, text and a poster image.

- Category: content
- Kind: section
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Video" (id `video`, theme `balm-2`; Shopify bundle: sections/balm-2/video/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-video.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `assets/blko-video.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Three drops, <em>one minute</em> |
| `heading_size` | select | Heading size | blko-h2 |
| `heading_alignment` | select | Heading alignment | left |
| `text` | richtext | Text |  |
| `video` | video | Video |  |
| `video_url` | video_url | YouTube or Vimeo link |  |
| `autoplay` | checkbox | Autoplay muted and loop | false |
| `cover_image` | image_picker | Cover image |  |
| `fallback_image` | select | Placeholder | lifestyle-1 |
| `play_label` | text | Play button label | Watch the routine |
| `ratio` | select | Ratio | 16 / 9 |
| `full_width` | checkbox | Full page width | false |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-video.js`
- Snippets: `blko-fallback-image.liquid`, `blko-icon.liquid`
- Locale keys: `blko.video.label`, `blko.video.play` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
