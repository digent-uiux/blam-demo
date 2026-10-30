# Password page

Password page with shop message and email sign-up.

- Category: page
- Kind: section
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Password page" (id `main-password`, theme `balm-2`; Shopify bundle: sections/balm-2/main-password/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-password.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-password/sections/blko-main-password.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-password/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-password/snippets/blko-icon.liquid
   - `snippets/blko-social-icons.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-password/snippets/blko-social-icons.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-password/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-password.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-social-icons.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 48 |
| `padding_bottom` | range | Bottom padding | 48 |
| `show_logo` | checkbox | Show logo | true |
| `heading` | inline_richtext | Heading | Opening soon |
| `heading_size` | select | Heading size | h2 |
| `use_shop_message` | checkbox | Use the message from Online Store preferences | true |
| `text` | richtext | Text | <p>Small-batch skincare is on its way. Leave your email and we’ll write when the doors open.</p> |
| `show_newsletter` | checkbox | Show newsletter form | true |
| `button_label` | text | Button label | Notify me |
| `newsletter_note` | text | Note under the form |  |
| `success_text` | text | Success message | Thanks for subscribing. Your first letter arrives on Sunday. |
| `show_social` | checkbox | Show social icons | false |
| `show_copyright` | checkbox | Show copyright | true |
| `layout` | select | Layout | center |
| `image` | image_picker | Image |  |
| `image_position` | select | Image position | right |
| `alignment` | select | Text alignment | center |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-social-icons.liquid`
- Locale keys: `blko.newsletter.email`, `blko.newsletter.success`, `blko.password.enter`, `blko.password.label`, `blko.password.notify`, `blko.password.owner`, `blko.social.facebook`, `blko.social.instagram`, `blko.social.pinterest`, `blko.social.tiktok`, `blko.social.x`, `blko.social.youtube` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `logo`, `logo_text`, `logo_width`

Generated file: do not edit; open an issue instead.
