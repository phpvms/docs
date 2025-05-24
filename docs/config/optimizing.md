---
id: optimizing
title: Optimizing
sidebar_title: Optimizing
---

These are just some basic optimizing. For additional optimization information,
refer to the Laravel docs

## Drivers

### Redis

Installing Redis is one way to enable optimizations. After installing, add to
the `config.php`

```shell title=".env"
CACHE_DRIVER=redis
```

### PHP-APC

PHP-APC needs to be installed server-side (as a PHP extension) for it to be made
available. No additional configuration is required on the database driver level.

### Additional Drivers

Any additional drivers supported by Laravel are automatically supported by
phpVMS.

---

## Environment/Debug Modes

### Environment

When going live, this should be set to `production`. By default, it's `dev`.
Change this:

```shell title=".env"
APP_ENV=production
```

### Debug Mode

This adjusts the logging level, making it more verbose. The default value is
`true`, and should be set to `false` when you're live/in-production.

```shell title=".env"
APP_DEBUG=true
DEBUG_TOOLBAR=false
```

---

## Sessions

Sessions store the logged in users and other information. By default, they're
stored on disk.

:::info The Redis store is recommended if you have access to it :::

#### Redis

Sessions can be saved in PHP.

```shell title=".env"
SESSION_DRIVER=redis
```

#### PHP APC

Sessions can also be saved in PHP.

```shell title=".env"
SESSION_DRIVER=apc
```

---

## Caching

By default, caching is disabled.

#### File

You can cache to flat files, instead of hitting the database constantly. These
will be stored in the `storage/framework/cache` folder

```shell title=".env"
CACHE_DRIVER=file
```

#### Redis

Instead of using PHP APC, you can also use Redis for caching

```shell title=".env"
CACHE_DRIVER=redis
```

#### PHP APC

This doesn't require any configuration on the server side

```shell title=".env"
CACHE_DRIVER=apc
```

#### Other drivers

You can see the `config/cache.php` file for the other available drivers
(memcached, redis, etc)

---

## Queue Driver

phpVMS uses asyncronous queues for several tasks, including sending emails and
exporting to vaCentral. The default mode is `sync`, which means the tasks are
done in-line. This could be useful if you're running a high-traffic VA and on
your own VPS.

If you're running into performance issues, try changing the `QUEUE_DRIVER` to
`database` (probably the easiest option), or another queue driver option (look
in the `config/queue.php` for available options)

#### Database Driver

```shell title=".env"
QUEUE_DRIVER=database
```

#### Redis Driver

If you have Redis installed, you can use that:

```shell title=".env"
QUEUE_DRIVER=redis
```
