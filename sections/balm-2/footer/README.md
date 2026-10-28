# Footer

Footer with brand, menus, newsletter, social links and payment marks.

- Category: footer
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/footer--footer.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Footer" (id `footer`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/footer--footer.html; Shopify bundle: sections/balm-2/footer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-footer.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/footer/sections/blko-footer.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/footer/snippets/blko-icon.liquid
   - `snippets/blko-payment-marks.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/footer/snippets/blko-payment-marks.liquid
   - `snippets/blko-social-icons.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/footer/snippets/blko-social-icons.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/footer/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-footer.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-payment-marks.liquid`
- `snippets/blko-social-icons.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 64 |
| `padding_bottom` | range | Bottom padding | 64 |
| `show_legal` | checkbox | Show legal row | true |
| `show_copyright` | checkbox | Show copyright | true |
| `copyright` | text | Copyright name |  |
| `show_policies` | checkbox | Show policy links | true |
| `show_payment` | checkbox | Show payment icons | true |

## Blocks

- `brand`: Brand
- `menu`: Menu column
- `text`: Text
- `newsletter`: Newsletter
- `social`: Social icons

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`, `blko-payment-marks.liquid`, `blko-social-icons.liquid`
- Locale keys: `blko.footer.pay_1`, `blko.footer.pay_2`, `blko.footer.pay_3`, `blko.footer.pay_4`, `blko.footer.pay_5`, `blko.footer.payment_methods`, `blko.newsletter.email`, `blko.newsletter.subscribe`, `blko.newsletter.success`, `blko.social.facebook`, `blko.social.instagram`, `blko.social.pinterest`, `blko.social.tiktok`, `blko.social.x`, `blko.social.youtube` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): `logo`, `logo_text`

Generated file: do not edit; open an issue instead.
