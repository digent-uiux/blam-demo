# Ingredients

Ingredient cards with image, name and benefit.

- Category: ingredients
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/ingredients--ingredients.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Ingredients" (id `ingredients`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/ingredients--ingredients.html; Shopify bundle: sections/balm-2/ingredients/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-ingredients.liquid`
- `snippets/blko-fallback-image.liquid`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | Four ingredients doing the heavy lifting |
| `note` | textarea | Side note | Every ingredient is listed with its concentration. No fillers, no synthetic fragrance, nothing hidden behind “parfum”. |
| `columns` | range | Columns on large screens | 4 |
| `show_images` | checkbox | Show images | true |
| `image_ratio` | select | Image shape | square |
| `show_list` | checkbox | Show full ingredient list | true |
| `list_open` | checkbox | Open by default | false |
| `list_label` | text | Disclosure label | Full ingredient list |
| `list` | richtext | Full ingredient list | <p>Aloe Barbadensis Leaf Juice, Aqua, Glycerin, Avena Sativa Kernel Flour, Squalane, Citrus Aurantium Dulcis Peel Oil, Niacinamide, Sodium Hyaluronate, Lavandula Angustifolia Oil, Xanthan Gum, Tocopherol, Citric Acid, Linalool.</p> |

## Blocks

- `ingredient`: Ingredient

## Dependencies

- Assets: none
- Snippets: `blko-fallback-image.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
