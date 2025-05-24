---
id: backups
title: Backups
sidebar_title: Backups
---

phpVMS uses [`spatie/laravel-backup`](https://github.com/spatie/laravel-backup)
to perform backups. By default, this feature is disabled, but you can activate
it if you want to create backups of your files and database.

Backups are scheduled nightly, and an older backup is removed, ensuring you have
multiple backups available (e.g., last night's, the one before, etc.).

:::caution Backups can consume up to 5GB of disk space. :::

## Basic Configuration

With this configuration, a backup will be added to the
`storage/app/{yourApplicationName}` folder every day. You will receive a
notification in case of failure at the email address you specify.

```shell title=".env"
BACKUP_ENABLED=true
BACKUP_NOTIFICATIONS_MAIL_TO=yourEmail@example.com
```

For this feature to work, you need to have email configured (see
[here](/config/email)).

## Advanced Configuration

### Notifications

By default, only failure notifications are sent via email. You can choose to
receive success notifications as well and send them to Discord.

```shell title=".env"
BACKUP_FAILED_NOTIFICATIONS_CHANNELS=mail
BACKUP_SUCCEED_NOTIFICATIONS_CHANNELS=mail,discord
# The following line shouldn't be added again if you already added it in the basic configuration
BACKUP_NOTIFICATIONS_MAIL_TO=yourEmail@example.com
BACKUP_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

If you choose the `mail` channel, you need to configure
`BACKUP_NOTIFICATIONS_MAIL_TO` with the email where you want to receive
notifications.

If you choose the `discord` channel, you need to configure
`BACKUP_DISCORD_WEBHOOK_URL` with the webhook URL where you want to receive
notifications. See [here](/config/notifications#discord) to create a webhook.

### Disks

By default, backups are only made on the local disk corresponding to the
`/storage/app/{yourApplicationName}` folder. You can add other disks to send
your backups.

```shell title=".env"
BACKUP_DISKS=local,r2
```

To use a remote disk like Amazon S3, CloudFlare R2 or SFTP, you must configure
the details in `.env` properly. By default phpVMS v7 supports Amazon S3,
CloudFlare R2 and SFTP. As an example; To use CloudFlare R2, a bucket should be
configured in your account along with an S3 compatible API and below details
should be in your `.env` file

```shell title=".env"
CLOUDFLARE_R2_BUCKET=''
CLOUDFLARE_R2_ENDPOINT=''
CLOUDFLARE_R2_ACCESS_KEY_ID=''
CLOUDFLARE_R2_SECRET_ACCESS_KEY=''
```

Also it is possible to add more disks to support different file systems, you
need to create the disk in `config/filesystems.php`. Examples of configuring
disks can be found in
[Laravel Documents](https://laravel.com/docs/10.x/filesystem#driver-prerequisites)
and other online sources.

### Backup Retention Configuration

By default, phpVMS keeps backups for the last 7 days and retains a maximum of
5000 MB of backup data. You can adjust these settings to customize the retention
period and maximum size.

To change the number of days for which backups are kept, set the
`BACKUP_MAX_DAYS` variable in your `.env` file. For example, to keep backups for
3 days, add the following line:

```shell title=".env"
BACKUP_MAX_DAYS=3
```

To change the maximum size of backups retained, set the `BACKUP_MAX_SIZE`
variable in your `.env` file. The size is specified in megabytes. For example,
to retain backups up to 10000 MB in size, add the following line:

```shell title=".env"
BACKUP_MAX_SIZE=10000
```

### Encryption

You can encrypt your backups with AES256 and a password.

```shell title=".env"
BACKUP_ARCHIVE_PASSWORD=yourPassword
```

---
