---
id: database
title: Database
---

Modules use Laravel's standard Eloquent ORM and migration system. This page
covers models, migrations, the **registry migration rules** (which apply if you
plan to publish your addon), seeders, and factories.

## Models

Models live under `Modules/{Module}/app/Models/`, with the namespace
`Modules\{Module}\Models`. The fastest way to scaffold one is:

```shell
php artisan module:make-model Report Sample
```

After it's generated, open the model and set its `$table` property to the
underlying table name. **The table name must use your author prefix** — see the
warning below.

```php
namespace Modules\Sample\Models;

use App\Contracts\Model;

class Report extends Model
{
    protected $table = 'acme_reports';

    protected $fillable = [
        'name',
        'pirep_id',
    ];
}
```

phpvms provides `App\Contracts\Model` as a convenience base class — extend it
instead of `Illuminate\Database\Eloquent\Model` to pick up phpvms's shared
traits and conventions.

See the [Laravel Eloquent docs](https://laravel.com/docs/eloquent) for full
details on working with models.

:::warning Table names must be prefixed

Every table your addon creates **must** start with your author prefix — the
first segment of your registry name. For an addon registered as `acme/reports`,
every table must match `^acme_*`.

Unprefixed (or wrongly prefixed) table names will collide with phpvms core or
other addons, and the [addon registry migration linter](#migration-rules) will
reject your submission.

**Read [Table name convention](#table-name-convention) before writing your first
migration.**

:::

### Generating models with extras

You can scaffold a model alongside its migration, factory, seeder, and
controller in one command:

```shell
# Model + migration
php artisan module:make-model Report Sample --migration

# Model + migration + factory
php artisan module:make-model Report Sample --migration --factory

# Everything: model, migration, factory, seeder, controller, request, resource, policy
php artisan module:make-model Report Sample --all

# Set the fillable array up front
php artisan module:make-model Report Sample --fillable="name,pirep_id,status"
```

| Flag                  | Generates                                      |
| --------------------- | ---------------------------------------------- |
| `--migration` / `-m`  | A matching migration in `database/migrations/` |
| `--factory` / `-f`    | A factory in `database/factories/`             |
| `--seed` / `-s`       | A seeder in `database/seeders/`                |
| `--controller` / `-c` | A controller in `app/Http/Controllers/`        |
| `--request` / `-r`    | Form request classes                           |
| `--resource` / `-R`   | An API resource class                          |
| `--policy` / `-p`     | A policy class                                 |
| `--all` / `-a`        | All of the above                               |
| `--fillable=`         | Sets the model's `$fillable` array             |

### Relationships

If your table has a column called `pirep_id`, you can add a relationship to the
core `Pirep` model:

```php
namespace Modules\Sample\Models;

use App\Contracts\Model;
use App\Models\Pirep;

class Report extends Model
{
    protected $table = 'acme_reports';

    public function pirep()
    {
        return $this->belongsTo(Pirep::class, 'pirep_id');
    }
}
```

Now you can access the parent PIREP without writing any queries:

```php
$record = Report::with(['pirep'])->find(1);
echo $record->pirep->dpt_airport_id;
```

The `Pirep` model itself has relationships to airports, users, etc., so you can
chain further:

```php
echo $record->pirep->dpt_airport->name;
```

The right relationships make life easier. Read the
[Laravel relationships docs](https://laravel.com/docs/eloquent-relationships)
for the full set of patterns.

### Scopes, casts, and observers

Standard Laravel patterns work as you'd expect:

```shell
# Reusable query scope
php artisan module:make-scope PublishedScope Sample

# Custom attribute cast
php artisan module:make-cast TitleCast Sample

# Lifecycle observer
php artisan module:make-observer ReportObserver Sample
```

Register an observer in your module's service provider:

```php
// Modules/Sample/app/Providers/SampleServiceProvider.php

use Modules\Sample\Models\Report;
use Modules\Sample\Observers\ReportObserver;

public function boot(): void
{
    parent::boot();

    Report::observe(ReportObserver::class);
}
```

### Inspecting a model

```shell
php artisan module:show-model Sample
```

Lists every model in the module along with its attributes, casts, and
relationships — useful when joining a project you didn't write.

## Migrations

phpvms uses [Laravel migrations](https://laravel.com/docs/migrations) to version
your database schema. Generate a new migration with:

```shell
php artisan module:make-migration create_acme_reports_table Sample
```

This creates a file under `Modules/{Module}/database/migrations/`. When an
operator visits `/update`, pending migrations from all enabled modules are run
automatically — installs and updates require no manual SQL.

The core migrations under `app/Database/migrations/` are a good reference for
field types, indexes, and foreign keys.

### Migration syntax

phpvms uses Laravel's modern **anonymous-class** migration style:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('acme_reports', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('pirep_id')->constrained();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('acme_reports');
    }
};
```

Adding a column later? Generate another migration:

```shell
php artisan module:make-migration add_published_at_to_acme_reports_table Sample
```

```php
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('acme_reports', function (Blueprint $table) {
            $table->timestamp('published_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('acme_reports', function (Blueprint $table) {
            $table->dropColumn('published_at');
        });
    }
};
```

:::warning No raw SQL

Do **not** use `DB::statement` or `DB::unprepared`. Beyond being fragile across
database engines, raw SQL is **forbidden** by the addon registry's migration
linter — see [Migration rules](#migration-rules) below.

:::

:::note Always add a new migration

Always add a new migration when you change a table schema after release. The
migration runner records what's been applied, so previously-run files are
skipped — editing an old migration after operators have run it has no effect on
their database.

:::

### Running migrations

| Command                                                                                      | Effect                                                                                                       |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `module:migrate Sample`                                                                      | Run pending migrations for one module.                                                                       |
| `module:migrate`                                                                             | Run pending migrations for **all** modules.                                                                  |
| `module:migrate Sample --pretend`                                                            | Show the SQL without running it.                                                                             |
| `module:migrate Sample --seed`                                                               | Run migrations, then run the module's seeders.                                                               |
| `module:migrate Sample --database=pgsql`                                                     | Run against a specific database connection.                                                                  |
| `module:migrate-rollback Sample`                                                             | Roll back the last batch.                                                                                    |
| `module:migrate-rollback Sample --subpath="2024_01_15_120000_create_acme_reports_table.php"` | Roll back a specific migration.                                                                              |
| `module:migrate-refresh Sample [--seed]`                                                     | Roll back everything, then re-run.                                                                           |
| `module:migrate-reset Sample`                                                                | Roll back everything (no re-run).                                                                            |
| `module:migrate-fresh Sample`                                                                | Drop tables and re-run. **Warning** — drops all tables on the connection, including ones from other modules. |
| `module:publish-migration Sample`                                                            | Copy module migrations into the host app's `database/migrations/` (one-time export).                         |

### Table name convention

Table names **must** be prefixed with your **author namespace** — the first
segment of your addon registry name. For an addon registered as `acme/reports`,
the author namespace is `acme`, and every table must match `^acme_*`. Prefix
pivot tables too.

```php
// Good — matches the author namespace `acme`
Schema::create('acme_reports', ...);
Schema::create('acme_reports_runs', ...);

// Bad — no prefix, will collide with core or another addon
Schema::create('reports', ...);

// Bad — prefix doesn't match the author namespace
Schema::create('reports_acme', ...);
```

You can share tables across your own addons. If you publish both `acme/reports`
and `acme/inventory`, both addons may legitimately read and write `acme_*`
tables.

Not prefixing your tables (or using a prefix that doesn't match your namespace)
will:

- Conflict with future phpvms core tables, breaking upgrades.
- Conflict with other addons that share the same generic name.
- **Be rejected** by the [registry migration linter](#migration-rules) if you
  publish your addon.

:::tip Picking a namespace before you publish

If you haven't picked a registry name yet, choose one now and use its first
segment as your prefix. Changing the prefix later means a destructive migration.
The convention is to use your **GitHub username or organisation** as the author
segment — see [Publishing](./publishing.md#naming-rules).

:::

## Migration rules

If you plan to publish your addon to the
[phpvms addon registry](./publishing.md), every migration under
`database/migrations/` is statically analysed at PR time using an allow-list.
The author namespace is the first segment of your registry name — for
`acme/reports` the namespace is `acme`, and your tables must match `^acme_*`.

### Rules at a glance

| Rule                                                                  | Allowed                               | Forbidden                                               |
| --------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------- |
| Migration class                                                       | anonymous class extending `Migration` | classes that don't extend `Migration`                   |
| `Schema::create / table / drop / dropIfExists / rename` table targets | tables matching `^{author}_*`         | core tables, other authors' tables, dynamic table names |
| `DB::table()` targets                                                 | tables matching `^{author}_*`         | core tables, other authors' tables, dynamic table names |
| `DB::raw()`                                                           | always                                | —                                                       |
| `DB::statement`, `DB::unprepared`                                     | —                                     | always forbidden                                        |
| Foreign key referent (`->on('users')`)                                | any table                             | —                                                       |
| `foreignId(...)->constrained()` (implicit referent)                   | any table                             | —                                                       |
| `eval`, `include`, `include_once`, `require`, `require_once`          | —                                     | always forbidden                                        |

### Why allow-list, not deny-list

A deny-list of "core tables" would need updating every time phpvms adds a table.
The allow-list catches **all** core tables (none start with `{author}_`) and
**all** other authors' tables automatically. It also lets you share tables
across your own addons — `acme/reports` may legitimately read `acme_inventory_*`
tables.

### Examples that pass

```php
// Schema operation on author-prefixed table
Schema::create('acme_reports_runs', function (Blueprint $t) {
    $t->id();
    $t->timestamps();
});

// Cross-addon, same author
Schema::table('acme_inventory_items', function (Blueprint $t) {
    $t->boolean('reported')->default(false);
});

// Foreign key referent on a core table
Schema::create('acme_reports_runs', function (Blueprint $t) {
    $t->id();
    $t->foreignId('user_id')->constrained();             // implicit ->on('users')
    $t->foreign('aircraft_id')->references('id')->on('aircraft'); // explicit
});

// DB::raw expression for a default value
Schema::create('acme_reports_runs', function (Blueprint $t) {
    $t->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
});

// Rename within author prefix
Schema::rename('acme_reports_old', 'acme_reports_new');
```

### Examples that fail

```php
// FAIL: target is a core table
Schema::create('users', function (Blueprint $t) {});

// FAIL: another author's prefix
Schema::create('beta_forms_responses', function (Blueprint $t) {});

// FAIL: dynamic table name
$name = 'foo';
Schema::create($name, function (Blueprint $t) {});

// FAIL: rename touches a core table
Schema::rename('users', 'acme_reports_users');

// FAIL: arbitrary SQL execution
DB::statement('TRUNCATE other_users');
DB::unprepared('UPDATE accounts SET ...');

// FAIL: eval / include / require
eval('echo 1;');
include 'helpers.php';
require_once 'config.php';

// FAIL: DB::table on a core table
DB::table('users')->update(['banned' => true]);
```

### Common gotchas

- **`Schema::create(...)` table name must be a string literal.** Patterns like
  `$name = 'acme_x'; Schema::create($name, ...)` are rejected — the lint can't
  prove what `$name` resolves to.
- **`DB::table($var)` is rejected** for the same reason.
- **Forbidden imports/requires.** Helpers belong in your service provider or a
  regular class file, not in migrations.
- **Drop migrations also need the prefix.** `Schema::drop('users')` fails just
  as `Schema::create('users')` does. Drop only what you own.
- **`down()` is linted with the same rules as `up()`.**

If you find a real-world legitimate pattern the lint rejects,
[open an issue](https://github.com/phpvms/addon-registry/issues) — the rules are
tunable.

## Seeding initial data

phpvms supports two ways of seeding data: phpvms's `addData()` migration helper
for setup data shipped with a release, and Laravel's standard seeder classes for
everything else.

### Inside a migration (phpvms-specific)

For rows that **must** exist for the addon to work — config defaults, default
categories, lookup tables — use phpvms's `$this->addData()` helper inside
`up()`. Extending `App\Contracts\Migration` (instead of Laravel's base
`Migration`) makes it available:

```php
<?php

use App\Contracts\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('acme_reports_settings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('group');
            $table->text('value')->nullable();
            $table->string('type');
            $table->text('description')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        $settings = [
            [
                'order'       => 1,
                'name'        => 'Start Date',
                'group'       => 'general',
                'value'       => '',
                'type'        => 'date',
                'description' => 'The date your VA started',
            ],
            // …more entries
        ];

        $this->addData('acme_reports_settings', $settings);
    }

    public function down(): void
    {
        Schema::dropIfExists('acme_reports_settings');
    }
};
```

`addData()` runs once when the migration is applied — perfect for setup rows the
addon depends on.

### Standard Laravel seeders

For development data, demo content, or anything an operator should choose to
load, use Laravel seeders. Generate one with:

```shell
php artisan module:make-seed AcmeReportsSeeder Sample
# → Modules/Sample/database/seeders/AcmeReportsSeeder.php
# → namespace Modules\Sample\Database\Seeders
```

```php
namespace Modules\Sample\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Sample\Models\Report;

class AcmeReportsSeeder extends Seeder
{
    public function run(): void
    {
        Report::factory()->count(20)->create();
    }
}
```

Each module ships with a master seeder named `{Module}DatabaseSeeder.php` that
calls the others:

```php
namespace Modules\Sample\Database\Seeders;

use Illuminate\Database\Seeder;

class SampleDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            AcmeReportsSeeder::class,
        ]);
    }
}
```

Run seeders:

```shell
# Run the module's master seeder
php artisan module:seed Sample

# Run a specific seeder class
php artisan module:seed Sample --class=AcmeReportsSeeder

# Run all modules' master seeders
php artisan module:seed

# Migrate + seed in one step
php artisan module:migrate Sample --seed
```

### Hooking into the main db:seed

If you want the host app's `php artisan db:seed` to also run your module's data,
add it to `database/seeders/DatabaseSeeder.php` in the host app:

```php
public function run(): void
{
    $this->call([
        \Modules\Sample\Database\Seeders\SampleDatabaseSeeder::class,
    ]);
}
```

### Factories

Factories let you generate fake records for tests and seeders. Generate one with
`module:make-model Report Sample --factory`, or stand-alone:

```shell
php artisan module:make-factory ReportFactory Sample
# → Modules/Sample/database/factories/ReportFactory.php
# → namespace Modules\Sample\Database\Factories
```

```php
namespace Modules\Sample\Database\Factories;

use App\Models\Pirep;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReportFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'     => $this->faker->sentence(),
            'pirep_id' => Pirep::factory(),
        ];
    }

    public function published(): self
    {
        return $this->state(['published_at' => now()]);
    }
}
```

```php
// Default 20 records
Report::factory()->count(20)->create();

// State helper
Report::factory()->published()->create();

// Relationships
Report::factory()
    ->for(Pirep::factory()->create())
    ->count(5)
    ->create();
```
