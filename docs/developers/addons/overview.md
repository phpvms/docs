---
id: overview
title: Overview
---

Addons let you ship self-contained features for phpvms — full pages with their
own URLs, admin screens, API endpoints, migrations, views, and assets — without
modifying core. If you only need a small embeddable component for someone else's
templates, you want a widget instead.

Under the hood, the module system is built on
[nWidart/laravel-modules](https://laravelmodules.com/docs/13/getting-started/introduction).
phpvms ships customised stubs so generated modules match phpvms conventions out
of the box.

## Why use modules

- **Distribution** — modules can be published to the
  [phpvms Addon Registry](./publishing.md) and installed by operators from the
  admin UI.
- **Clarity** — everything related to a feature lives in one folder.
- **Separation** — modules can be enabled or disabled independently without
  touching core.
- **Reusability** — a module can be extracted into a Composer package and shared
  across phpvms installs.

## Quick start

```shell
# Generate a new module
php artisan module:make Sample

# Run its migrations
php artisan module:migrate Sample
```

Visit `/sample` in your browser — the default web route and controller are ready
to go.

:::tip Reference module

All examples in these docs use a module named `Sample`. The reference source is
[nabeelio/phpvms-module on GitHub](https://github.com/nabeelio/phpvms-module).

:::

## Naming

The root namespace for your module is `Modules\{YourModule}` — for example,
`Modules\Sample`.

- If you are `Acme`, and your module is `Tours`, your module name should be
  `AcmeTours`
- You also need to set a `registry_id` - for example, this would be
  `acme/tours`. You'll need to add this to the `module.json` that's generated.

:::warning Pick your author prefix early Your module's database tables must use
a prefix that matches your registry name/id (e.g. `acme/reports` → `acme_*`).
Choose your vendor/author prefix **before** writing migrations — changing it
later means a destructive migration. See
[Database → Table name convention](./database.md#table-name-convention).

:::

## Generating a module

`module:make` scaffolds a complete module with controllers, routes, migrations,
views, and a service provider. By default it also enables the module — visit
`/{module}` and your default route resolves immediately.

```shell
php artisan module:make Sample
```

You can pass several flags to control what gets generated:

| Flag                | Effect                                                            |
| ------------------- | ----------------------------------------------------------------- |
| `--plain` / `-p`    | Minimal scaffold (no controllers, no views).                      |
| `--api`             | API-only — generates `routes/api.php` and a controller, no views. |
| `--web` (default)   | Full web scaffold with views and `routes/web.php`.                |
| `--disabled` / `-d` | Create the module disabled instead of auto-enabling it.           |
| `--force`           | Overwrite an existing module of the same name.                    |
| `--author-name=`    | Sets author name in the generated `composer.json`.                |
| `--author-email=`   | Sets author email in the generated `composer.json`.               |
| `--author-vendor=`  | Sets the Composer vendor segment.                                 |

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
  listeners, providers. The PSR-4 root maps `Modules\AcmeSample\` to this
  directory.
- **`config/config.php`** is published to `config/sample.php` in the host app.
  Access values with `config('sample.option_name')`.
- **`database/migrations/`** holds your migrations (see
  [Database](./database.md)). When an operator visits `/update`, pending
  migrations from all enabled modules are run automatically.
- **`resources/views/`** holds Blade views, accessed as `view('sample::index')`.
  See [Templating](./templating.md).
- **`routes/web.php`** and **`routes/api.php`** define the module's URLs. See
  [Routing & Controllers](./routing-controllers.md).

## module.json

The metadata for your module. Generated automatically; you'll only edit it if
you need to change descriptors:

```json
{
  "name": "AcmeSample",
  "alias": "acme_sample",
  "registry_id": "acme/sample",
  "description": "Sample module for phpvms",
  "keywords": [],
  "priority": 0,
  "providers": ["Modules\\AcmeSample\\Providers\\AcmeSampleServiceProvider"],
  "files": []
}
```

| Field         | Purpose                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| `name`        | StudlyCase module name. Used as the directory name and in class namespaces.               |
| `alias`       | **Lowercase** namespace for views, config, and translations. `view('sample::index')`.     |
| `registry_id` | Unique identifier for the module in the registry.                                         |
| `description` | Short human-readable description.                                                         |
| `keywords`    | Optional array of search keywords (used by the registry).                                 |
| `priority`    | Integer load order. Lower numbers boot first. Use to enforce inter-module dependencies.   |
| `providers`   | Service providers to register. Add additional providers here if you create more.          |
| `files`       | Extra files to autoload on boot — e.g. `["app/helpers.php"]` for global helper functions. |

## Getting module information

The `Module` facade lets you query and manipulate modules at runtime. Once you
have a module instance, you can introspect its metadata:

```php
$module = Module::find('acme_sample');

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
module_path('AcmeSample', 'resources/views');
// → /var/www/phpvms/Modules/AcmeSample/resources/views
```

See the
[Module facade reference](https://laravelmodules.com/docs/13/advanced-tools/facade-methods)
and
[Module instance reference](https://laravelmodules.com/docs/13/advanced-tools/module-methods)
for the full surface.

## Common artisan commands

A few you'll use often. The full list lives in the
[laravel-modules artisan reference](https://laravelmodules.com/docs/13/advanced-tools/artisan-commands).

```shell
# Module lifecycle
php artisan module:list
php artisan module:enable AcmeSample
php artisan module:disable AcmeSample
php artisan module:delete AcmeSample

# Generators (see the relevant doc page for details)
php artisan module:make-controller AcmeSample PostController
php artisan module:make-model AcmeSample Post --migration --factory
php artisan module:make-migration create_acme_sample_posts_table AcmeSample
php artisan module:make-seed AcmeSamplePostsSeeder AcmeSample
php artisan module:make-view posts.index AcmeSample
php artisan module:make-component Alert AcmeSample
php artisan module:make-middleware EnsurePostIsPublished AcmeSample
php artisan module:make-event PostWasCreated AcmeSample
php artisan module:make-listener NotifyAdmin AcmeSample --event=PostWasCreated

# Migrations
php artisan module:migrate AcmeSample              # run pending
php artisan module:migrate-rollback AcmeSample
php artisan module:migrate-refresh AcmeSample --seed
php artisan module:seed AcmeSample

# Maintenance
php artisan module:dump AcmeSample                 # regenerate autoload
php artisan module:composer-update AcmeSample      # composer update inside the module
php artisan module:show-model AcmeSample           # inspect models
```
