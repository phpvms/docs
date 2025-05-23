---
id: environment
title: Environment Configuration
---

# Environment Configuration

This is for running a local configuration, for running unit-tests, etc.

:::info This is just how I work on phpVMS, to quickly reset the database and
test/develop items locally, without having to transfer files anywhere. I mainly
use the Docker Compose setup

If you're on Windows, I highly recommend installing WSL with your distro of
choice (I use Ubuntu). If you don't have `make` available, open the `Makefile`
and look for the commands to run for the individual commands of what you're
trying to run. :::

:::info You may want to disable caching during development phases to ensure your
changes are applied correctly, as caching cna prevent changes from taking
effect. To do this, set `CACHE_DRIVER=null` in your `.env` file.

:::

:::info We strongly recommend reading the
[Laravel Documentation](https://laravel.com/docs/10.x), as it's more detailed
and up-to-date. Since phpVMS is based on Laravel, the installation process is
the same. In addition, you can simply use the `php artisan phpvms:dev-install`
command to set up a development database. :::

## Creating and Resetting the Environment with docker

We are using [Laravel Sail](https://laravel.com/docs/10.x/sail#main-content)
which provides a simple way to set up and manage a local development environment
for laravel apps using Docker.

Before you begin, ensure you have docker installed on your system

```bash
git clone https://github.com/nabeelio/phpvms.git phpvms
cd phpvms
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs

./vendor/bin/sail up -d
./vendor/bin/sail artisan phpvms:dev-install
```

The `phpvms:dev-install` command creates the `.env` config file. It will then
run the migrations, and install the sample seed data, which is located in
`app/Database/seeds/sample.yml`

Then to reset the database and reinstall the dev data:

```bash
./vendor/bin/sail artisan phpvms:dev-install --reset-db
```

This does require sqlite. If you want to use MySQL, you need to run the phpVMS
installer, so it can generate the config files for MySQL (or you can modify the
generated `.env`), then you can run the above command to reset the database and
migrations in MySQL.

### Resetting the Environment

To reset the database/clear cache, use this command.

```bash
./vendor/bin/sail artisan database:create --reset
./vendor/bin/sail artisan migrate --seed
```

You can run the `reload-db` command as much as you want. If you log in using the
default login (admin@phpvms.net), this won't log you out, it'll just reload the
database with all the sample data (from app/Database/seeds/sample.yml)

### Updating

Extract files and run the migrations:

```bash
git pull origin dev
./vendor/bin/sail artisan migrate
```

---

## Without Docker

If you don't want to use Docker, you can use other software like
[Laravel Herd](https://herd.laravel.com) (Mac/Windows) or
[Laragon](https://laragon.org/) (Windows only).

There are many tutorials on how to install Laravel applications with these
softwares, but here are the basics:

```bash
git clone https://github.com/nabeelio/phpvms.git phpvms
cd phpvms

composer install
php artisan phpvms:dev-install
```

This does require sqlite. If you want to use MySQL, you need to run the phpVMS
installer, so it can generate the config files for MySQL (or you can modify the
generated `.env`), then you can run the above command to reset the database and
migrations in MySQL.

---

## Laravel Valet

If you don't want to use `docker-compose`, easiest way to load locally is to
install [Laravel Valet](https://laravel.com/docs/5.5/valet) (if you're running a
Mac). Follow the instructions to install; you install it, go to your phpvms
directory, and run:

```bash
valet link phpvms
```

Now going to `http://phpvms.test` should work. If you want to use mysql, follow
the valet directions on installing mysql (`brew install mysql`) and then update
the `.env` file to point to the mysql.

The default username and password are `admin@phpvms.net` and `admin`. To see the
available users in the development environment,
[see this file](https://github.com/nabeelio/phpvms/blob/master/app/Database/seeds/sample.yml#L11)

There is no reason you can't use [MAMP](https://www.mamp.info/en) or
[XAMPP](https://www.apachefriends.org), or if you're feeling fancy, using Docker
or configuring any webservers yourself.
