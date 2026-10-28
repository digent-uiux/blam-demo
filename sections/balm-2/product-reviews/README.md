# Product reviews

Review summary with score bars beside a list of reviews.

- Category: reviews
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/reviews--product-reviews.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Product reviews" (id `product-reviews`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/reviews--product-reviews.html; Shopify bundle: sections/balm-2/product-reviews/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-product-reviews.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/product-reviews/sections/blko-product-reviews.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/product-reviews/snippets/blko-icon.liquid
   - `snippets/blko-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/product-reviews/snippets/blko-rating.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/product-reviews/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-product-reviews.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-rating.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `sticky_summary` | checkbox | Keep the summary in view while scrolling | true |
| `heading` | text | Heading | Customer reviews |
| `show_score` | checkbox | Show large average number | true |
| `average` | text | Average rating |  |
| `count` | number | Review count |  |
| `show_bars` | checkbox | Show breakdown | true |
| `bar_5` | number | 5 star reviews | 0 |
| `bar_4` | number | 4 star reviews | 0 |
| `bar_3` | number | 3 star reviews | 0 |
| `bar_2` | number | 2 star reviews | 0 |
| `bar_1` | number | 1 star reviews | 0 |
| `button_label` | text | Label | Write a review |
| `button_url` | url | Link |  |
| `show_builtin` | checkbox | Show review blocks | true |
| `visible_count` | range | Reviews shown before "Show more" | 3 |
| `more_label` | text | "Show more" button label |  |

## Blocks

- `@app`: @app
- `review`: Review

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`, `blko-rating.liquid`
- Locale keys: `blko.products.rating`, `blko.reviews.breakdown`, `blko.reviews.show_more`, `blko.reviews.star_label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
