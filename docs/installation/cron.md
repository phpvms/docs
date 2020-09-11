---
id: cron
title: Cron/Scheduled Tasks
---

In order for some phpVMS features to work, a cronjob is required to be setup. Some of the features that rely on cronjobs include:

- Finances
- Mass Emails
- vaCentral features

### Setup

You need the path to the `artisan` file that's in the root of the phpVMS install. After that, add a cronjob that runs once a minute. Do not forget to include the username, for example, using `crontab -e`:

```bash
# THIS IS AN EXAMPLE 
* * * * * php /path/to/phpvms/artisan schedule:run >> /dev/null 2>&1
```

:::tip If unsure, ask your host
Many hosts offer multiple PHP versions, make sure to use the path to the PHP 7.x version in the cronjob. Please note that PHP cli version(s) may differ from the PHP version used with the webserver. Contact your host! Point them to this page
:::

### Guides on setting up a cron job

- [Adding a cronjob in cPanel](https://help.fasthosts.co.uk/app/answers/detail/a_id/2198/~/setting-up-cron-jobs-in-cpanel)
- [Adding a cronjob on Linux](https://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/)
