---
id: 'requirements'
title: 'Requirements'
---

## Server Requirements

One of the first steps in the installer is to check your server for the proper requirements.

- PHP 8.1+; extensions required (most of these are installed by default):
  - cURL
  - JSON
  - fileinfo
  - mbstring
  - openssl
  - pdo
  - tokenizer
  - bcmath
  - intl
  - zip
- Database:
  - MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)

##### Optional

- [php-apc](http://php.net/manual/en/book.apc.php)
- [Redis](https://redis.io) (for job queuing, various caching and optimizations)

---

### Shared Hosting

While shared hosts are not ideal for numerous reasons, it's still possible to run phpVMS.  
Check especially CRON features/capabilities and hidden limits the provider applies while advertising the service as "limitless". Ram or resource usage limits (like I/O) may directly affect phpVMS and your operations.  

*Don't use free hosts, you'll have a really bad time and they can not be supported.*

---

### VPS/Dedicated Hosts

If you have control over your server, the combination of nginx/php-fpm will offer you the best performance, over using Apache. It's the combination that I test with.
It will also be much more secure, seeing that only the `/public` directory is exposed.

Pointing the vhost to the `/public` directory is the best way to run on a host that you control.
