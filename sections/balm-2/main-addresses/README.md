# Customer addresses

Saved addresses list with add and edit forms.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-addresses.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Customer addresses" (id `main-addresses`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--main-addresses.html; Shopify bundle: sections/balm-2/main-addresses/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-main-addresses.liquid`
- `snippets/blko-account-shell.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `assets/blko-addresses.js`
- `assets/blko-customer.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | text | Heading | Your addresses |
| `heading_size` | select | Heading size | h1 |
| `text` | richtext | Intro text |  |
| `layout` | select | Layout | center |
| `image` | image_picker | Side image |  |
| `image_position` | select | Image position | right |
| `show_back_link` | checkbox | Show back to account link | true |
| `per_page` | range | Addresses per page | 12 |
| `columns` | select | Columns on desktop | 2 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-addresses.js`, `blko-customer.css`
- Snippets: `blko-account-shell.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`
- Locale keys: `blko.customer.add_address`, `blko.customer.address1`, `blko.customer.address2`, `blko.customer.back_to_account`, `blko.customer.city`, `blko.customer.company`, `blko.customer.country`, `blko.customer.default`, `blko.customer.delete`, `blko.customer.delete_confirm`, `blko.customer.edit`, `blko.customer.first_name`, `blko.customer.last_name`, `blko.customer.phone`, `blko.customer.province`, `blko.customer.save_address`, `blko.customer.set_default`, `blko.customer.zip`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
