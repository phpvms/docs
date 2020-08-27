---
id: optimizing
title: Optimizing
sidebar_title: Optimizing
---

These are just some basic optimizing. For additional optimization information, refer to the Laravel docs

### PHP-APC

Just installing the package is enough to make it available.

### Redis

Installing Redis is one way to enable optimizations. After installing, add to the `config.php`

```php
  # Same config as in caching, but add to the existing `database` array in the `config.php` file:
  'database' => [
    'redis' => [
        'default' => [
            'host' => 'localhost',
            'port' => 6379,
            'database' => 1,
        ],
    ],
  ],
```

## Environment/Debug Modes

These can be changed in the `env.php` file

### Environment

When going live, this should be set to `production`. By default, it's `dev`. Change this:

```php
'app' => [
    'env' => 'dev',
],
```

### Debug Mode

This adjusts the logging level, making it more verbose. The default value is `true`, and should be set to `false` when you're live/in-production.

```php
'app' => [
    'debug' => true,
],
```

***

## Sessions

Sessions store the logged in users and other information. By default, they're stored on disk.

### PHP APC

Sessions can be saved in PHP.

```php
  'session' => [
    'default' => 'apc',
  ],
```

***

## Caching

### PHP APC

This doesn't require any configuration on the server side, however, to enable it, add the following to your `config.php` file:

```php
  'cache' => [
    'default' => 'apc',
  ],
```

### Redis

Instead of using PHP APC, you can also use Redis for caching; adding to the `config.php` file:

```php
  'cache' => [
    'default' => 'redis',
  ],
```

---

## Queue Driver

phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is `sync`, which means the tasks are done in-line. 

### Redis

If you have Redis installed, you can add the following to the `config.php` file:

```php
  'queue' => [
    'default' => 'redis',
  ],
  
  # Same config as in caching, but add to the existing `database` array in the `config.php` file:
  'database' => [
    'redis' => [
        'default' => [
            'host' => 'localhost',
            'port' => 6379,
            'database' => 1,
        ],
    ],
  ],
```

