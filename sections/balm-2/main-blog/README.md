# Blog posts

Blog listing with tag filter and paginated post cards.

- Category: main-blog
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/main-blog--main-blog.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Blog posts" (id `main-blog`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/main-blog--main-blog.html; Shopify bundle: sections/balm-2/main-blog/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-blog.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/sections/blko-main-blog.liquid
   - `snippets/blko-demo-article.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/snippets/blko-demo-article.liquid
   - `snippets/blko-fallback-image.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/snippets/blko-fallback-image.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/snippets/blko-pagination.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/main-blog/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-blog.liquid`
- `snippets/blko-demo-article.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `show_title` | checkbox | Show heading | true |
| `heading` | text | Heading |  |
| `text` | richtext | Text |  |
| `heading_size` | select | Heading size | h1 |
| `show_tag_filter` | checkbox | Show tag filter | true |
| `layout` | select | Layout | grid |
| `per_page` | range | Posts per page | 9 |
| `columns_desktop` | range | Columns on desktop | 3 |
| `columns_mobile` | select | Columns on mobile | 1 |
| `show_image` | checkbox | Show image | true |
| `image_ratio` | select | Image ratio | landscape |
| `show_date` | checkbox | Show date | true |
| `show_author` | checkbox | Show author | false |
| `show_excerpt` | checkbox | Show excerpt | true |
| `empty_text` | richtext | Text when there are no posts | <p>No posts yet.</p> |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-demo-article.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`
- Locale keys: `blko.blog.all`, `blko.blog.empty`, `blko.blog.tags`, `blko.demo.article_1_excerpt`, `blko.demo.article_1_title`, `blko.demo.article_2_excerpt`, `blko.demo.article_2_title`, `blko.demo.article_3_excerpt`, `blko.demo.article_3_title`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
