---
id: updating
title: Updating
---

1. Make a backup of your site! Skip this at your own peril. At a minimum, make a backup of the `.env` files. Also, make note of any changes you made to files in the `/config` folder - I recommend making a backup of this as well and checking to see if there are changes to any of those files which might need to be copied over.
1. On your remote site (through your FTP client or SSH), delete the `vendor` folder
1. On your remote site (through your FTP client or SSH), delete all of the files in `bootstrap/cache` and `storage/framework/cache` (delete the contents, NOT the folders)
1. Upload all of the files (or upload latest build via your file manager and unpack), and overwrite everything.
1. If you are using `composer`, then run `composer install` command via shell/terminal
1. Visit the `/update` URL of your site (e,g `http://myva.com/update`) to complete the update/installs
1. Check the changelog for template changes so you can update your skin

---

### Update Errors

If you run into an error similar to this, delete your `vendor` folder and re-upload it

```
Argument 1 passed to Carbon\CarbonInterval::setLocalTranslator() must implement interface 
Symfony\Component\Translation\TranslatorInterface, instance of Carbon\Translator given
```
