---
id: optimizing
title: Optimizing
sidebar_title: Optimizing
---

These are just some basic optimizing. For additional optimization information, refer to the Laravel docs

## Redis

Installing Redis is one way to enable optimizations. After installing, add to the `config.php`

```php title="config.php"
// ...
'database' => [
  // ...
  'redis' => [
      'default' => [
          'host'     => 'localhost',
          'port'     => 6379,
          'database' => 1,
      ],
  ],
  // ...
],
// ...
```


## PHP-APC

PHP-APC needs to be installed server-side (as a PHP extension) for it to be made available. No additional configuration is required on the database driver level.

---

## Environment/Debug Modes

### Environment

When going live, this should be set to `production`. By default, it's `dev`. Change this:

```php title="config.php"
// ...
'app' => [
    // ...  
    'env' => 'production',  // Change it to production when live
    // ...
],
// ...
```

### Debug Mode

This adjusts the logging level, making it more verbose. The default value is `true`, and should be set to `false` when you're live/in-production.

```php title="config.php"
// ...
'app' => [
    // ...
    'debug'         => true,
    'debug_toolbar' => true,
    // ...
],
// ...
```

---

## Sessions

Sessions store the logged in users and other information. By default, they're stored on disk.

:::info
The Redis store is recommended if you have access to it
:::

#### Redis

Sessions can be saved in PHP.

```php title="config.php"
// ...
'session' => [
  'default' => 'redis',
],
// ...  
```

#### PHP APC

Sessions can be saved in PHP.

```php title="config.php"
// ...
'session' => [
  'default' => 'apc',
],
// ...  
```

---

## Caching

#### Redis

Instead of using PHP APC, you can also use Redis for caching; adding to the `config.php` file:

```php title="config.php"
// ...
'cache' => [
  'default' => 'redis',
],
// ...
```

#### PHP APC

This doesn't require any configuration on the server side. To enable it, add the following to your `config.php` file:

```php title="config.php"
// ...
'cache' => [
  'default' => 'apc',
],
// ...  
```

---

## Queue Driver

:::caution
This requires that the [Laravel Queue Worker](https://laravel.com/docs/7.x/queues#running-the-queue-worker) be installed and working properly
:::

phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is `sync`, which means the tasks are done in-line. 

#### Redis

If you have Redis installed, you can add the following to the `config.php` file. Add the `redis` section (if it doesn't exist) to the existing `database` array:

```php title="config.php"
// ...

'queue' => [
  'default' => 'redis',
],

//...
```

