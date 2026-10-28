# Blog posts

Latest journal posts in a card row with a view-all link.

- Category: featured-blog-posts
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/featured-blog-posts--blog-posts.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Blog posts" (id `blog-posts`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/featured-blog-posts--blog-posts.html; Shopify bundle: sections/balm-2/blog-posts/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Files

- `sections/blko-blog-posts.liquid`
- `snippets/blko-demo-article.liquid`
- `snippets/blko-fallback-image.liquid`
- `snippets/blko-icon.liquid`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `heading` | inline_richtext | Heading | From the journal |
| `heading_size` | select | Heading size | blko-h2 |
| `link_label` | text | Link label | All stories |
| `link_url` | url | Link |  |
| `blog` | blog | Blog |  |
| `posts_to_show` | range | Posts to show | 3 |
| `columns_desktop` | range | Columns on desktop | 3 |
| `columns_mobile` | select | Columns on mobile | 1 |
| `show_image` | checkbox | Show image | true |
| `image_ratio` | select | Image ratio | landscape |
| `show_date` | checkbox | Show date | true |
| `show_author` | checkbox | Show author | false |
| `show_excerpt` | checkbox | Show excerpt | false |

## Blocks

_No blocks._

## Dependencies

- Assets: none
- Snippets: `blko-demo-article.liquid`, `blko-fallback-image.liquid`, `blko-icon.liquid`
- Locale keys: `blko.demo.article_1_excerpt`, `blko.demo.article_1_title`, `blko.demo.article_2_excerpt`, `blko.demo.article_2_title`, `blko.demo.article_3_excerpt`, `blko.demo.article_3_title` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
