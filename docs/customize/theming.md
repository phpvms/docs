---
id: theming
title: Theming
---

The custom theme system is using [laravel-theme](https://github.com/igaster/laravel-theme), which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change.

---

## Creating a theme

To create a new theme, you can either copy and existing one, or use the command line artisan command to generate one fresh.

---

### The Quick Way

The quick way to create a new theme is to just copy the `default` theme to a new folder, and edit the `theme.json` file:

  1. Copy the `resources/views/layouts/default` into a new folder, e.g, `resources/views/layouts/mytheme`
  2. Edit the `resources/views/layouts/mytheme/theme.json` file, and update the `name`

If you want to edit only select templates (also recommended), set the `extends` value to `default`. Then you only need to copy over the templates that you modify, instead of all them (makes it easier to update)

---

### New Theme from Scratch

:::tip
You can use `theme:create` command to bootstrap these steps
:::

Into the root of the `resources/views/layouts/` path, create a new folder, with a `theme.json` file. This JSON file serves as the manifest for your theme

```json
{
  "name"        : "THEME_NAME",
  "asset-path"  : "ASSET_PATH",
  "extends"     : "PARENT_THEME"
}
```

After doing this, copy the files from `resources/views/layouts/default` into the new theme folder. 

#### Creating/copying an existing theme

Important notes:

- **THEME_NAME** (REQUIRED) is the name of your theme. Can be any string.
- **ASSET_PATH** (optional) is relative to public path. You should create this folder too!
- **PARENT_THEME** (optional) is the name of the parent theme. Set it to `null` if this is a stand-alone theme. If you want to extend an existing theme, place that name there. You can extend the default template and change only the templates you want, by recreating the same structure for the template you want to override.
- You can add any additional configuration into the json file. You may access to your own settings with `Theme:getSetting('key')` & `Theme:setSetting('key','value')` at runtime.

#### Assets in the public folder

While `laravel-theme` has a helper for the `theme_url`, in phpVMS, you should use the `public_asset()` helper function. Since phpVMS can run on both shared and on its own, the public folder path could be different. The `public_asset()` method takes care of that.

It's recommended you create a new folder for your theme, under `public/assets` (or, `public_html/assets`, depending on how you uploaded your files), and then referring to those assets like:

```php
echo public_asset('assets/my-theme/img/someimage.png');
```

---

## Packaging a theme to distribute

To distribute a theme, on the command line run:

```bash
php artisan theme:package <theme name>
```

This will create a distributable theme package in the `storage/themes` path, which can then be distributed.

---

## More resources for themes

- The documentation for `laravel-theme` is great for more detailed tricks: [see the documentation here](https://github.com/igaster/laravel-theme/wiki/5.-Setting-the-active-theme)
