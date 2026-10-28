# Newsletter

Email sign-up with optional side image.

- Category: newsletter
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/newsletter--newsletter.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Newsletter" (id `newsletter`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/newsletter--newsletter.html; Shopify bundle: sections/balm-2/newsletter/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-newsletter.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/newsletter/sections/blko-newsletter.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/newsletter/snippets/blko-fallback-image.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/newsletter/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-newsletter.liquid`
- `snippets/blko-fallback-image.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-5 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `show_image` | checkbox | Show image | true |
| `image` | image_picker | Image |  |
| `image_position` | select | Image position on large screens | left |
| `heading` | inline_richtext | Heading | Calm skin, delivered |
| `lead` | text | Lead | One letter every other Sunday: new formulas and routines that work. |
| `button_label` | text | Button label | Subscribe |
| `note` | text | Note under the form | Unsubscribe any time. |
| `success` | text | Success message |  |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-fallback-image.liquid`
- Locale keys: `blko.newsletter.email_label`, `blko.newsletter.error`, `blko.newsletter.subscribe`, `blko.newsletter.success` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
