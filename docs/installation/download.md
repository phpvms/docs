---
id: download
title: 'Download'
---
There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the `vendor` directory and you don't need to do anything but upload it.

## Download Full Package

The tar file from the downloads site contains all of the dependencies. The versions available are:

- [Official releases and pre-releases](https://github.com/nabeelio/phpvms/releases) - The latest released versions
- [Development branch](http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz) - The latest commit, unstable

---

## Cloning the Repository

After you SSH to your server, you can clone from Github, or download the ZIP that's offered by Github of the source, you have to run `composer install` in order for the dependencies and vendor data to be downloaded. 

```bash
git clone https://github.com/nabeelio/phpvms.git
cd phpvms
composer install
```

After running `composer install`, you can continue the directions below.

---

## Composer

Coming Soon
