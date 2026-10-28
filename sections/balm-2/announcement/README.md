# Announcement bar

Slim announcement bar with an optional code, link and dismiss button.

- Category: announcement
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/announcement--announcement.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Announcement bar" (id `announcement`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/announcement--announcement.html; Shopify bundle: sections/balm-2/announcement/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-announcement.liquid`
- `snippets/blko-icon.liquid`
- `assets/blko-announcement.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-4 |
| `padding_top` | range | Top padding | 8 |
| `padding_bottom` | range | Bottom padding | 8 |
| `text` | inline_richtext | Text | It’s <em>glow</em> season, 15% off your first order |
| `code` | text | Code chip | GLOW15 |
| `link` | url | Link |  |
| `text_style` | select | Text style | heading |
| `dismissible` | checkbox | Show dismiss button | true |
| `home_only` | checkbox | Show on the home page only | true |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-announcement.js`
- Snippets: `blko-icon.liquid`
- Locale keys: `blko.announcement.dismiss`, `blko.announcement.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
