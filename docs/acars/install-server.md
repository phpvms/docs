---
id: install-server
title: Installation (Server)
---

## 1. Module Installation

:::info The latest [dev](http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz)
versions of phpVMS are currently required :::

For the server-side installation, extract the ACARS zip file, open the `Web`
folder and copy the `VMSAcars` into your `phpvms/modules` folder:

![](img/copy_module_folder.png)

Then go to your site's URL to the `/update` folder, and follow through the
update. When there are updates (as notified in the ACARS Changelog), you will do
the same thing - copy the module folder in and then run the `/update` again.

## 2. License Entry

After installation, go to the admin panel, and enter your license key, from your
https://vmshost.io invoice/email:

![](img/module_config.png)

## 3. Premium Edition

If you've purchased the Premium ACARS edition, the options in the admin panel
marked "Premium" will work. There are no additional downloads - the client will
check the license and enable the options locally.
