# Customer login

Sign-in form with inline password recovery.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-login.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Customer login" (id `main-login`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-login.html; Shopify bundle: sections/balm-2/main-login/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-login.liquid`
- `snippets/blko-account-shell.liquid`
- `snippets/blko-fallback-image.liquid`
- `assets/blko-customer.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Log in |
| `heading_size` | select | Heading size | h2 |
| `text` | richtext | Intro text |  |
| `layout` | select | Layout | center |
| `image` | image_picker | Side image |  |
| `image_position` | select | Image position | right |
| `form_width` | range | Form width | 440 |
| `show_register_link` | checkbox | Show create account link | true |
| `show_guest` | checkbox | Show continue as guest | true |
| `recover_heading` | text | Password reset heading | Reset your password |
| `recover_text` | richtext | Password reset text | <p>We’ll email you a link to reset it.</p> |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-customer.css`
- Snippets: `blko-account-shell.liquid`, `blko-fallback-image.liquid`
- Locale keys: `blko.customer.cancel`, `blko.customer.create_account`, `blko.customer.email`, `blko.customer.forgot`, `blko.customer.guest`, `blko.customer.password`, `blko.customer.recover_submit`, `blko.customer.recover_success`, `blko.customer.sign_in` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
