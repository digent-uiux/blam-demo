# Contact form

Contact form beside store details and an optional phone field.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-form.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact form" (id `contact-form`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-form.html; Shopify bundle: sections/balm-2/contact-form/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-contact-form.liquid`
- `snippets/blko-icon.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Write to <em>us</em> |
| `heading_size` | select | Heading size | blko-h2 |
| `text` | richtext | Intro | <p>Questions about a formula, an order or your routine? We answer every message within one working day.</p> |
| `details` | richtext | Contact details | <p><strong>Email</strong><br>hello@example.com</p><p><strong>Hours</strong><br>Monday to Friday, 9 am to 5 pm</p> |
| `show_phone` | checkbox | Show phone field | true |
| `show_company` | checkbox | Show company field | false |
| `button_label` | text | Button label | Send message |
| `note` | text | Note beside the button | We reply within one working day. |
| `success_message` | text | Success message | Thanks for writing. We’ll get back to you within one working day. |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`
- Locale keys: `blko.contact.company`, `blko.contact.email`, `blko.contact.error`, `blko.contact.message`, `blko.contact.name`, `blko.contact.phone` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
