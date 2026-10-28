# Blog post

Article page with date, author, body, tags and share links.

- Category: article
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/article--main-article.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Blog post" (id `main-article`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/article--main-article.html; Shopify bundle: sections/balm-2/main-article/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-main-article.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-article/sections/blko-main-article.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-article/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-article/snippets/blko-pagination.liquid
   - `snippets/blko-share.liquid`: https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-article/snippets/blko-share.liquid
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/blam-demo/main/sections/balm-2/main-article/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-main-article.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `snippets/blko-share.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading_size` | select | Title size | h1 |
| `show_blog_link` | checkbox | Show blog link | true |
| `show_date` | checkbox | Show date | true |
| `show_author` | checkbox | Show author | true |
| `width` | select | Content width | narrow |
| `alignment` | select | Heading alignment | start |
| `text_size` | select | Text size | body-lg |
| `show_image` | checkbox | Show featured image | true |
| `image_ratio` | select | Image ratio | landscape |
| `image_width` | select | Image width | full |
| `show_tags` | checkbox | Show tags | true |
| `show_share` | checkbox | Show share links | false |
| `show_comments` | checkbox | Show comments | true |
| `comments_per_page` | range | Comments per page | 20 |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-icon.liquid`, `blko-pagination.liquid`, `blko-share.liquid`
- Locale keys: `blko.blog.comments_count`, `blko.blog.leave_comment`, `blko.blog.message`, `blko.blog.moderated`, `blko.blog.moderated_note`, `blko.blog.name`, `blko.blog.post`, `blko.blog.posted`, `blko.blog.tags`, `blko.customer.email`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous`, `blko.share.email`, `blko.share.facebook`, `blko.share.label`, `blko.share.pinterest`, `blko.share.x` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
