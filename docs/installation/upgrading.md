---
id: upgrading
title: Upgrading
---

To upgrade, you can overwrite the files of your install. I recommend removing the `vendor` directory and re-uploading that, in case there were major version updates which could interfere in things. Then, visit the `/update` URL of your site (e,g `http://myva.com/update`) to complete any migrations

:::note
If you run into an error similar to this, delete your `vendor` folder and re-upload it

```
Argument 1 passed to Carbon\CarbonInterval::setLocalTranslator() must implement interface Symfony\Component\Translation\TranslatorInterface, instance of Carbon\Translator given
```
:::
