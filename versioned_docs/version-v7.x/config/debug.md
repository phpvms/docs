---
id: debug
title: Debug Mode
---

Debugging enables extra logging, and the Laravel toolbar allows you to inspect
what's happening on the page.

## Enable Debug and Debugging

- Look at the logs - they're located in `storage/logs`
- Enable debug logging and the Laravel Debug Toolbar:
  - Open your `config.php`, under `app`, change:
    - `debug` to `true`
    - `debug_toolbar` to `true`
