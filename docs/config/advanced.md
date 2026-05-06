---
id: advanced
title: Advanced Configuration
---

Tuning for production: environment flags, cache, sessions, queues, and storage
drivers. Most defaults work fine for small installs — reach here when traffic
grows or you're going live.

For deeper detail, the
[Laravel performance docs](https://laravel.com/docs/configuration) cover the
underlying mechanics.

## Cache

Caching is disabled by default. Enable a driver once you have one available.

| Driver  | When to use                                  | `.env`               |
| ------- | -------------------------------------------- | -------------------- |
| `file`  | No extra services. Cached to flat files.     | `CACHE_DRIVER=file`  |
| `redis` | Recommended. Fastest, requires Redis server. | `CACHE_DRIVER=redis` |
| `apc`   | PHP-APC extension installed.                 | `CACHE_DRIVER=apc`   |

Other drivers (memcached, dynamodb, etc) — see `config/cache.php`.

## Sessions

Sessions store login state. Disk by default; Redis recommended if available.

```shell title=".env"
SESSION_DRIVER=redis    # or: file, apc, database
```

## Queues

phpvms uses asynchronous queues for slow tasks (sending email, exporting to
vaCentral). Default mode is `sync` — tasks run inline, which can slow user
requests.

If you see slow page loads, switch to `database` (no extra services needed):

```shell title=".env"
QUEUE_DRIVER=database
```

For higher throughput, use Redis:

```shell title=".env"
QUEUE_DRIVER=redis
```

Other drivers — see `config/queue.php`.

:::info

Non-`sync` queues require a worker process to actually run the jobs. Set up
`php artisan queue:work` via supervisor, systemd, or your cron. Otherwise jobs
queue up but never run.

:::

## Storage Drivers

### Redis

Single Redis install can power cache, sessions, and queues simultaneously.
Easiest performance win for medium-traffic VAs.

### PHP-APC

Server-side PHP extension. No `.env` config beyond pointing
`CACHE_DRIVER`/`SESSION_DRIVER` at `apc`.

### Other Laravel drivers

Any driver Laravel supports works in phpvms — Memcached, DynamoDB, SQS,
Beanstalkd, etc. Configure per Laravel docs.
