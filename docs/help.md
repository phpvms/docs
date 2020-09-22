---
id: help
title: Getting Help
---

Help is provided through community support at the forums. 

---
## Enable Debug and Debugging

:::info
Before asking for help, try to reproduce on the [demo site](https://demo.phpvms.net), and with the `default` skin
:::

- Look at the logs - they're located in `storage/logs`
- Enable debug logging and the Laravel Debug Toolbar:
    - Open your `config.php`
        - Under `app`, change `debug` to `true`, and `debug_toolbar` to `true`

---

## How to ask for help

Without a lot of this information, it will be difficult to provide help.

- A clear description of the issue
- Versions
    - **PHP Version**
    - **Database versions** - MySQL, MariaDB or Percona, or whatever other backend your running
    - **phpVMS Version**
        - From either the admin panel (bottom left, click on the version for the full version)
        - Running `php artisan phpvms:version`
- How to reproduce the error 
    - Include as much detail as possible
    - Include any relevent data - for example, an error with expenses, include how the expenses are configured. See "Exporting Data" below.
    - Screenshots
- Logs
    - **Laravel logs**: These are located in `storage/logs`, you must include these. Look through the logs to also ensure that no sensitive information is included inadvertantly
    - **PHP logs**: These can be found wherever your PHP error logs are kept, for example, the PHP-FPM logs. Ask your host, if you don't know. They're often found in cPanel, under Error Logs.
    - **HTTP logs**: These are, for example, your Apache logs. These might be required, depending on the issue. If you're not sure how to get them, ask your host. They're often found in cPanel, under Error Logs.
- Any and all other relevent details


### Exporting Data for Troubleshooting

Sometimes, additional data for troubleshooting is required. To export that data more easily, you can use the artisan YAML exporter, listing the tables to export:

```bash
cd /path/to/phpvms
php artisan phpvms:yaml-exporter table1 table2
```

---

## Where to ask for help

### Forums

The forums are located at [https://forum.phpvms.net](https://forum.phpvms.net)

### Discord

There's also a Discord channel for quick questions. [Invite Code Here](https://discord.gg/wvAmMnd)

### Github

For bug reports, visit the [Github page](https://github.com/nabeelio/phpvms)