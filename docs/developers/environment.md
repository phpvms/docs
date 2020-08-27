---
id: environment
title: Environment Configuration
---

## Docker Compose

The easiest way to get a local install working is using [Docker Compose](https://docs.docker.com/compose), which comes with [Docker](https://www.docker.com). Check out the latest code:

```bash
composer install
docker-compose up
```

Then visit your site at `http://localhost`. This is what I (Nabeel) use for my day-to-day development

## Laravel Valet

If you don't want to use `docker-compose`, easiest way to load locally is to install [Laravel Valet](https://laravel.com/docs/5.5/valet) (if you're running a Mac). Follow the instructions to install; you install it, go to your phpvms directory, and run:

```bash
valet link phpvms
```

Now going to `http://phpvms.test` should work. If you want to use mysql, follow the valet directions on installing mysql (`brew install mysql`) and then update the `env.php` file to point to the mysql.

The default username and password are `admin@phpvms.net` and `admin`. To see the available users in the development environment, [see this file](https://github.com/nabeelio/phpvms/blob/master/app/Database/seeds/sample.yml#L11) 

There is no reason you can't use [MAMP](https://www.mamp.info/en) or [XAMPP](https://www.apachefriends.org), or if you're feeling fancy, using Docker or configuring any webservers yourself.

---

## Development Configuration

:::info
This is just how I work on phpVMS, to quickly reset the database and test/develop items locally, without having to transfer files anywhere.

If you're on Windows, I highly recommend installing WSL with your distro of choice (I use Ubuntu). If you don't have `make` available, open the `Makefile` and look for the commands to run for the individual commands of what you're trying to run.
:::

### Creating and Resetting the Environment

:::caution
This requires sqlite to be installed on your system
:::

To quickly setup a running install, you can do this:

```bash
git clone https://github.com/nabeelio/phpvms.git phpvms
cd phpvms
composer update
php artisan phpvms:dev-install
```

The `phpvms:dev-install` command creates the two config files: `config.php` and `env.php`. It will then run the migrations, and install the sample seed data, which is located in `app/Database/seeds/sample.yml`

Then to reset the database and reinstall the dev data:

```bash
php artisan phpvms:dev-install --reset-db
```

This does require sqlite. If you want to use MySQL, you need to run the phpVMS installer, so it can generate the config files for MySQL (or you can modify the generated `config.php`), then you can run the above command to reset the database and migrations in MySQL.

#### Resetting the Environment

To reset the database/clear cache, use this command.

```bash
make reload-db
```

You can run the `reload-db` command as much as you want. If you log in using the default login (admin@phpvms.net), this won't log you out, it'll just reload the database with all the sample data (from app/Database/seeds/sample.yml)

---

## Updating

extract files and run the migrations:

```bash
php artisan migrate
```

---

## Composer Access

By default, the Makefile calls the system-wide `composer`. If your host requires a certain path or name for composer, add `COMPOSER=` to the front of the `make` command, e.g:

```bash
COMPOSER=composer.phar make install
```