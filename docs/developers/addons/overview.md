---
id: overview
title: Overview
slug: /developers/addons
---

Addons (also called **modules** or **plugins**) let you ship self-contained
features for phpVMS — full pages with their own URLs, admin screens, API
endpoints, migrations, views, and assets — without modifying core. If you
only need a small embeddable component for someone else's templates, you
want a widget instead.

Under the hood, the module system is built on
[nWidart/laravel-modules](https://laravelmodules.com/docs/13/getting-started/introduction).
phpVMS ships customised stubs so generated modules match phpVMS conventions
out of the box.

## Why use modules

- **Clarity** — everything related to a feature lives in one folder.
- **Separation** — modules can be enabled or disabled independently
  without touching core.
- **Reusability** — a module can be extracted into a Composer package and
  shared across phpVMS installs.
- **Distribution** — modules can be published to the
  [phpVMS addon registry](./publishing.md) and installed by operators from
  the admin UI.

## Quick start

```shell
# Generate a new module
php artisan module:make Sample

# Run its migrations
php artisan module:migrate Sample
```

Visit `/sample` in your browser — the default web route and controller are
ready to go.

:::tip Reference module

All examples in these docs use a module named `Sample`. The reference source
is [nabeelio/phpvms-module on GitHub](https://github.com/nabeelio/phpvms-module).

:::

## Generating a module

`module:make` scaffolds a complete module with controllers, routes,
migrations, views, and a service provider. By default it also enables the
module — visit `/{module}` and your default route resolves immediately.

```shell
php artisan module:make Sample
```

You can pass several flags to control what gets generated:

| Flag                   | Effect                                                       |
| ---------------------- | ------------------------------------------------------------ |
| `--plain` / `-p`       | Minimal scaffold (no controllers, no views).                 |
| `--api`                | API-only — generates `routes/api.php` and a controller, no views. |
| `--web` (default)      | Full web scaffold with views and `routes/web.php`.           |
| `--disabled` / `-d`    | Create the module disabled instead of auto-enabling it.      |
| `--force`              | Overwrite an existing module of the same name.               |
| `--author-name=`       | Sets author name in the generated `composer.json`.           |
| `--author-email=`      | Sets author email in the generated `composer.json`.          |
| `--author-vendor=`     | Sets the Composer vendor segment.                            |

Multi-create:

```shell
php artisan module:make Sample Tours Reports
```

After generating, edit `Modules/{Module}/composer.json` to set your
**vendor** and author information if you plan to distribute the module. The
vendor segment becomes the first part of your registry name (see
[Publishing](./publishing.md)).

## Naming

The root namespace for your module is `Modules\{YourModule}` — for example,
`Modules\Sample`.

If your module name is generic, prefix it with a unique identifier. Instead
of `Tours`, use `XXTours` (where `XX` is your brand or initials). This
avoids conflicts with other addons and with future phpVMS core features.

:::warning Pick your author prefix early

Your module's database tables must use a prefix that matches your registry
name (e.g. `acme/reports` → `acme_*`). Choose your vendor/author prefix
**before** writing migrations — changing it later means a destructive
migration. See [Database → Table name convention](./database.md#table-name-convention).

:::

## Directory structure

A generated module looks like this:

```
Modules/Sample/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── SampleController.php
│   ├── Models/
│   └── Providers/
│       ├── SampleServiceProvider.php
│       └── RouteServiceProvider.php
├── config/
│   └── config.php
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
│       └── SampleDatabaseSeeder.php
├── resources/
│   ├── assets/
│   │   ├── js/
│   │   └── sass/
│   └── views/
│       ├── layouts/master.blade.php
│       └── index.blade.php
├── routes/
│   ├── api.php
│   └── web.php
├── tests/
│   ├── Feature/
│   └── Unit/
├── composer.json
├── module.json
├── package.json
└── vite.config.js
```

A few notes:

- **`app/`** holds all your PHP source — controllers, models, services,
  listeners, providers. The PSR-4 root maps `Modules\Sample\` to this
  directory.
- **`config/config.php`** is published to `config/sample.php` in the host
  app. Access values with `config('sample.option_name')`.
- **`database/migrations/`** holds your migrations (see
  [Database](./database.md)). When an operator visits `/update`, pending
  migrations from all enabled modules are run automatically.
- **`resources/views/`** holds Blade views, accessed as `view('sample::index')`.
  See [Templating](./templating.md).
- **`routes/web.php`** and **`routes/api.php`** define the module's URLs.
  See [Routing & Controllers](./routing-controllers.md).

## `module.json`

The metadata for your module. Generated automatically; you'll only edit it
if you need to change descriptors:

```json
{
  "name": "Sample",
  "alias": "sample",
  "description": "Sample module for phpVMS",
  "keywords": [],
  "priority": 0,
  "providers": [
    "Modules\\Sample\\Providers\\SampleServiceProvider"
  ],
  "files": []
}
```

| Field         | Purpose                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------- |
| `name`        | StudlyCase module name. Used as the directory name and in class namespaces.              |
| `alias`       | **Lowercase** namespace for views, config, and translations. `view('sample::index')`.    |
| `description` | Short human-readable description.                                                        |
| `keywords`    | Optional array of search keywords (used by the registry).                                |
| `priority`    | Integer load order. Lower numbers boot first. Use to enforce inter-module dependencies.  |
| `providers`   | Service providers to register. Add additional providers here if you create more.         |
| `files`       | Extra files to autoload on boot — e.g. `["app/helpers.php"]` for global helper functions.|

## Enabling and disabling modules

State is stored in `modules_statuses.json` at the project root. New modules
auto-enable on creation unless you pass `--disabled`.

From the command line:

```shell
php artisan module:list                # show all modules and their status
php artisan module:enable Sample
php artisan module:disable Sample
php artisan module:delete Sample       # permanently removes the directory
```

Programmatically (e.g. from a console command or service):

```php
use Nwidart\Modules\Facades\Module;

Module::enable('Sample');
Module::disable('Sample');

if (Module::isEnabled('Sample')) {
    // …
}
```

## The `Module` facade

`Nwidart\Modules\Facades\Module` lets you query and manipulate modules at
runtime:

```php
use Nwidart\Modules\Facades\Module;

Module::all();           // all modules (enabled + disabled)
Module::allEnabled();    // collection of enabled modules
Module::allDisabled();   // collection of disabled modules
Module::find('sample');  // Module instance, or null
Module::has('sample');   // bool
Module::count();         // total module count
```

Once you have a module instance, you can introspect its metadata:

```php
$module = Module::find('sample');

$module->getName();            // 'Sample'
$module->getLowerName();       // 'sample'
$module->getDescription();
$module->getPriority();
$module->get('alias');         // any module.json key
$module->getPath();            // absolute path on disk
$module->getAppPath();         // path to app/
$module->isEnabled();
```

The `module_path()` helper resolves paths inside a module without needing a
`Module` instance:

```php
module_path('Sample', 'resources/views');
// → /var/www/phpvms/Modules/Sample/resources/views
```

See the [Module facade reference](https://laravelmodules.com/docs/13/advanced-tools/facade-methods)
and [Module instance reference](https://laravelmodules.com/docs/13/advanced-tools/module-methods)
for the full surface.

## Common artisan commands

A few you'll use often. The full list lives in the
[laravel-modules artisan reference](https://laravelmodules.com/docs/13/advanced-tools/artisan-commands).

```shell
# Module lifecycle
php artisan module:list
php artisan module:enable Sample
php artisan module:disable Sample
php artisan module:delete Sample

# Generators (see the relevant doc page for details)
php artisan module:make-controller Sample PostController
php artisan module:make-model Sample Post --migration --factory
php artisan module:make-migration create_sample_posts_table Sample
php artisan module:make-seed SamplePostsSeeder Sample
php artisan module:make-view posts.index Sample
php artisan module:make-component Alert Sample
php artisan module:make-middleware EnsurePostIsPublished Sample
php artisan module:make-event PostWasCreated Sample
php artisan module:make-listener NotifyAdmin Sample --event=PostWasCreated

# Migrations
php artisan module:migrate Sample              # run pending
php artisan module:migrate-rollback Sample
php artisan module:migrate-refresh Sample --seed
php artisan module:seed Sample

# Maintenance
php artisan module:dump Sample                 # regenerate autoload
php artisan module:composer-update Sample      # composer update inside the module
php artisan module:show-model Sample           # inspect models
```

## Distributing your module

Once you're ready to share your module:

1. Tag a release in your Git repository.
2. Submit it to the [phpVMS addon registry](./publishing.md) — operators
   can then discover and install it from the admin UI without ever touching
   the command line.
