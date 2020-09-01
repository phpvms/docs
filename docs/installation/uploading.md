---
id: uploading
title: Uploading Files
---

The first step is to upload your files, and ensure that the dependencies are loaded. If you're using a "fat" distribution, the `vendor` directory with the composer dependencies is already included.

:::note
If you are uploading to a shared host or to cPanel, chose one of the following methods when uploading your files For your own server or if you have control over the vhost files, upload/extract the files to your desired location and point the vhost to the `/public` folder.
:::

## Copying the public directory

:::tip
Uploading and change the path of the public directory is the recommended method if you're on shared hosting
:::

This method works well if your main site is going to be phpVMS, and you're not running something like Wordpress. Running phpVMS in a subdirectory isn't recommended. Download/upload phpVMS into a `phpvms` folder in your home folder. It should look something like:

```
/home/youruser
    phpvms
    public_ftp
    public_html
```

Next, copy the files from the `/public` folder into the `public_html` folder. As long as you named the folder `phpvms`, the `index.php` will autodetect the location of the phpVMS folder.

:::note
Updates/auto-updates won't update the files in the `/public_html` folder, you'll need to update them manually. The other method, the symlink method, is recommended if you have command-line access and are more comfortable creating those types of links.
:::

---

## Creating a Subdomain

Creating a subdomain is the next recommended method, if you're unable to change the `public_html` path (this might not always be feasiable). Upload phpVMS to a directory with the name of your subdomain, for example, `demo.vmshost.io`. It should be parallel to the `public_html` folder (as above). In this example, I want to create the subdomain `demo.vmshost.io`.

First, create a folder to extract phpVMS into:


```
/home/youruser
    demo.vmshost.io < Extract phpvms files into here
    public_ftp
    public_html
  ```

Next, create a subdomain cPanel, go to "Subdomains", and create the subdomain. For the "Document Root", enter the path above, with the public folder - `demo.vmshost.io/public`. Usually, cPanel will autocomplete the path to be the subdomain - so just add `/public` to the end of it.

  ![](img/subdomain-add.png)

It will look like this:

  ![](img/subdomain-view.png)

---

## Symlink

This method works well if your main site is going to be phpVMS, and you're not running something like Wordpress. Running phpVMS in a subdirectory isn't recommended (see method 2 instead).

Download/upload phpVMS into a `phpvms` folder in your home folder. It should look something like:

```
/home/youruser
    phpvms
    public_ftp
    public_html
```

To make this work properly and be secure, we're going to change the `public_html` directory to point into the phpVMS public directory. Then you can upload files as usual, but phpVMS will be the primary entry point. When you create folder/files in the `public_html` directory, they'll actually get created into the `phpvms/public` folder.

SSH into your server, symlink the `public_html` folder to point to `phpvms/public` instead:

```sh
mv public_html public_html_backup
ln -s phpvms/public/ public_html
```

  !!! Ensure that the permissions of the `phpvms` folder are correct (normally 0770), though check with your host to make sure
  
---

## Direct Upload

This method isn't recommended because it can potentially expose your install if the `.htaccess` or something isn't correctly configured. Upload the files directly into the `public_html` folder, and make sure the `.htaccess` file is active (check with your webhost). This uses the `public` folder directly
