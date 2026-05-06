---
id: basics
title: Basic Configuration
sidebar_title: Basics
---

phpvms configuration lives in two places:

- **Admin panel** — `/admin/settings`. Most day-to-day settings live here.
- **`.env` file** — root of your phpvms install. Holds infrastructure settings:
  database, mail, cache, OAuth keys.

This page covers the `.env` file. For admin panel settings, log in as an admin
and explore each section.

---

## The `.env` file

Laravel ships configuration in PHP files under `/config`. phpvms overrides these
via a `.env` file in the install root that the installer generates for you.

:::caution

Don't edit files in `/config` directly. Edits get overwritten on update.
Override values in `.env` instead — that file is preserved across updates.

:::

See [Laravel configuration](https://laravel.com/docs/13.x/configuration) for the
full reference.

## Environment & Debug

Two flags control whether phpvms behaves like a dev install or a production
install.

### `APP_ENV`

Set to `production` when going live. Default is `dev`.

```shell title=".env"
APP_ENV=production
```

### `APP_DEBUG`

Controls error verbosity. Keep `true` while developing — set `false` in
production so users don't see stack traces.

```shell title=".env"
APP_DEBUG=false
DEBUG_TOOLBAR=false
```

### After editing `.env`

Clear the application cache so changes take effect:

```bash
php artisan config:clear
php artisan cache:clear
```

If you skip this, your edits won't load.

---

## Where to go next

| Setting             | Page                                                                                |
| ------------------- | ----------------------------------------------------------------------------------- |
| Outgoing email      | [Email](./email.md)                                                                 |
| Discord webhooks    | [Notifications](./notifications.md)                                                 |
| OAuth login         | [Discord](./oauth/discord.md), [IVAO](./oauth/ivao.md), [VATSIM](./oauth/vatsim.md) |
| Database backups    | [Backups](./backups.md)                                                             |
| Cache, queues, perf  | [Advanced Configuration](./advanced.md)               |

---

## Language

Change the system language to any available translation. Locale codes match
folder names under `phpvms/resources/lang/`.

For Brazilian Portuguese, confirm `phpvms/resources/lang/pt-br` exists, then set
in `.env`:

```shell title=".env"
APP_LOCALE=pt-br
```
