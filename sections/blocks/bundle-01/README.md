# Bundle 01 - room photo, glass panel

A room photo fills the band, with numbered hotspots on each piece. A glass panel lists the pieces as a checklist with a live total, the bundle saving and one button that adds every ticked piece to the cart.

- Category: bundle-builder
- Kind: section (standalone block, works in any Online Store 2.0 theme, e.g. Dawn)
- Shopify target: ok
- Pieces: one `piece` block each (product picker, hotspot position, ticked by default). A block without a product shows its demo title, variant and price, matching the Blocko design system; demo pieces can't be added to the cart.
- Cart: one `POST /cart/add.js` with every ticked piece (first available variant, quantity 1), then the cart page or an inline message. It fires `blko:cart:add` on `document`.
- Discount: the saving is display only. Create a matching automatic discount in Shopify admin, or set **Discount code to apply** and the code is applied on the way to the cart when the bundle qualifies.

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko) to install the standalone section "Bundle 01 - room photo, glass panel" (bundle: sections/blocks/bundle-01/ in the repo) into my project. Before changing any code, ask me which theme, which page or template and the position on the page, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix, keep the custom element idempotent, merge the locale keys instead of replacing the file, don't touch unrelated code, run `shopify theme check`, and finish by telling me how to add the section and pick a product for each piece in the Theme Editor.
```

## Install

Copy the files into the same folders of your theme, merge the locale keys, then add **Bundle, room photo** from the Theme Editor (Add section) and pick a product for each piece.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-bundle-01.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/blocks/bundle-01/sections/blko-bundle-01.liquid
   - `snippets/blko-bundle-01-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/blocks/bundle-01/snippets/blko-bundle-01-icon.liquid
   - `assets/blko-bundle-01.css`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/blocks/bundle-01/assets/blko-bundle-01.css
   - `assets/blko-bundle-01.js`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/blocks/bundle-01/assets/blko-bundle-01.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/blocks/bundle-01/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor, add **Bundle, room photo** at the chosen position, then pick a product in each **Piece** block and drag its hotspot into place.
5. If the bundle should really be cheaper, create an automatic discount (or a code, set in the section) that matches **Discount shown** and **Pieces needed for the discount**.

## Files

- `sections/blko-bundle-01.liquid`
- `snippets/blko-bundle-01-icon.liquid`
- `assets/blko-bundle-01.css`
- `assets/blko-bundle-01.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Room photo |  |
| `overlay` | range | Photo shade | 50 |
| `show_hotspots` | checkbox | Show numbered hotspots | true |
| `eyebrow` | text | Eyebrow | Shop the room |
| `heading` | inline_richtext | Heading | Complete the <em>room</em> |
| `heading_font` | select | Heading font | serif |
| `heading_size` | range | Heading size | 64 |
| `deal_text` | text | Deal line | 2+ pieces = −10% |
| `discount_percent` | range | Discount shown | 10 |
| `min_pieces` | range | Pieces needed for the discount | 2 |
| `discount_code` | text | Discount code to apply |  |
| `after_add` | select | After adding | cart |
| `note_save` | text | Saving note | You save [amount] |
| `note_more_one` | text | Nudge, one piece left | Add [count] more piece to save [percent]% |
| `note_more_other` | text | Nudge, several left | Add [count] more pieces to save [percent]% |
| `button_empty` | text | Button, nothing ticked | Select a piece |
| `button_one` | text | Button, one piece | Add [count] piece to cart |
| `button_other` | text | Button, several pieces | Add [count] pieces to cart |
| `full_width` | checkbox | Full width | false |
| `panel_position` | select | Panel position | right |
| `panel_width` | range | Panel width | 416 |
| `min_height` | range | Height, desktop | 720 |
| `min_height_mobile` | range | Height, mobile | 640 |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |
| `radius_panel` | range | Panel | 24 |
| `radius_row` | range | Rows | 12 |
| `radius_button` | range | Button | 8 |
| `color_band` | color | Band background | #f4f4f5 |
| `color_on_image` | color | Text on photo | #ffffff |
| `color_panel` | color | Panel background | #ffffff |
| `panel_opacity` | range | Panel opacity | 90 |
| `color_text` | color | Panel text | #09090b |
| `color_muted` | color | Panel muted text | #65656e |
| `color_border` | color | Lines and checkboxes | #e4e4e7 |
| `color_row` | color | Ticked row | #f4f4f5 |
| `color_sale` | color | Sale price and deal icon | #dc2626 |
| `color_button` | color | Button | #18181b |
| `color_button_label` | color | Button label | #ffffff |
| `color_button_hover` | color | Button hover | #3f3f46 |

## Blocks

`piece` (up to 6; the preset has 4: sofa, lounge chair, side stool, candle)

| id | type | label | default |
| --- | --- | --- | --- |
| `product` | product | Product |  |
| `variant_label` | text | Line under the name |  |
| `checked` | checkbox | Ticked by default | true |
| `x` | range | Hotspot, left | 50 |
| `y` | range | Hotspot, top | 50 |
| `demo_title` | text | Title | Harbor 3-Seat Sofa |
| `demo_variant` | text | Variant | Cognac leather |
| `demo_price` | number | Price | 1499 |

## Dependencies

- Assets: `blko-bundle-01.css`, `blko-bundle-01.js`
- Snippets: `blko-bundle-01-icon.liquid` (Lucide `tag` and `check`)
- Locale keys: `blko.bundle_01.adding`, `.added`, `.error`, `.demo`, `.sold_out`, `.was` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read: none. Every colour, size and text is a section setting; the heading can use the theme's heading font (`--font-heading-family`, with a fallback).
