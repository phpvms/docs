---
id: download
title: 'Download'
---
There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the `vendor` directory and you don't need to do anything but upload it.

## Downloading Full Package

The zip/tar file from the downloads site contains all of the dependencies.

:::tip
Use the **development branch** version, as the latest beta may be out of date.
:::

- [Official releases and pre-releases](https://github.com/nabeelio/phpvms/releases) - The latest released versions
- [Development branch, TAR.GZ](http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz) - The latest development build, may contain new bugs or non-documented features
- [Development branch, ZIP](http://downloads.phpvms.net/phpvms-7.0.0-dev.zip) - The latest development build, may contain new bugs or non-documented features

---

## Cloning the Repository

If you chose to instead clone it from Github, rather than download it from above, you can do the following:

```bash
git clone https://github.com/nabeelio/phpvms.git
cd phpvms
composer install
```

After running `composer install`, you can continue the installation instructions.
