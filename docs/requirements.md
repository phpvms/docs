---
id: 'requirements'
title: 'Requirements'
---

## Server Requirements

One of the first steps in the installer is to check your server for the proper requirements.

- PHP 7.3+ (not including PHP 8, yet), extensions required (most of these are installed by default):

  - cURL
  - JSON
  - fileinfo
  - mbstring
  - openssl
  - pdo
  - tokenizer
  - bcmath
- Database:
  - MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)

##### Optional

- [php-apc](http://php.net/manual/en/book.apc.php)
- [Redis](https://redis.io) (for job queuing, various caching and optimizations)

---

### Shared Hosting

While shared hosts are not ideal for numerous reasons (don't use free hosts, you'll have
a really bad time), it's still possible to run phpVMS. By just uploading the files, you
will be able to visit the site. Assuming your host is running Apache, the `.htaccess` file
should handle the URL rewriting. If you're unable to reach the installer (the first test
to see if it will work with your host), contact your host's support about `.htaccess`
support.

---

### VPS/Dedicated Hosts

If you have control over your server, the combination of nginx/php-fpm will offer you
the best performance, over using Apache. It's the combination that I test with.
It will also be much more secure, seeing that only the `/public` directory is exposed.

Pointing the vhost to the `/public` directory is the best way to run on a host that you
control.
