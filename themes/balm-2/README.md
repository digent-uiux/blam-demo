# Balm 2

A complete Shopify Online Store 2.0 theme. Install it by editing your theme code directly; no zip needed.

## Turn your current theme into Balm 2

1. **Back up first.** In Online Store > Themes, duplicate your current theme so you can roll back.
2. **Create or replace every file at the same path.** Copy each file in this folder into your theme, keeping its folder:
   `layout/`, `templates/` (including `templates/customers/`), `sections/` (including `header-group.json` and
   `footer-group.json`), `snippets/`, `assets/` and `config/settings_schema.json`. Use the exact file content.
3. **Fonts are in `assets/`.** The `blko-font-*.woff2` files are binary. Upload them to `assets/` with the same names;
   if you cannot, the theme falls back to system fonts.
4. **Merge locales.** Add the keys from `locales/en.default.json` into your `locales/en.default.json`. Keep your existing
   keys; on a clash, use the value from this folder.
5. **Replace `config/settings_data.json` last**, after every other file is in place, so the Theme Editor finds all the
   sections and settings it refers to.
6. Open the theme in the Theme Editor and check the home, product, collection and cart pages.

Old sections and snippets from your previous theme can stay; this theme only uses files prefixed `blko-`.
Run `shopify theme check` if you work locally.
