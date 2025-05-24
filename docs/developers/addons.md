---
id: addons
title: Addons
---

If you're looking to create a full add-on, that has it's own URL, this is the
page you want. If you want to create a component that someone can include into
their own views/templates, you want a widget.

At their core, the module system uses
[laravel-modules](https://nwidart.com/laravel-modules/v2/introduction). The
stubs are modified so the generation create the structure that is compatible
with the phpVMS codebase.

---

# Basic Scaffold Generation

To generate a module, run:

```shell
php artisan module:make {ModuleName}
```

Which generates the basic structure in the `/modules` folder. After generating
the module, if you want to make it available on composer, edit the
`composer.json` file, setting your `VENDOR` and author information.

:::tip

All of the examples below will be based on a module named `Sample`. To see the
source for the module,
[check it out on GitHub](https://github.com/nabeelio/phpvms-module).

:::

:::tip

When naming your module, it is recommended that if your module name runs the
risk of being generic, to prefix your module name with a unique identifier. For
example, instead of naming your module `Tours`, name it `XXTours` (The XX in the
example being the identifier or brand name you choose)

In doing this, you reduce the chance of your module name conflicting directly
with another module.

:::

---

## Namespacing

The root namespace for your module will be `Modules\{YOUR_MODULE}`, e.g,
`Modules\Sample`

---

## Directory Structure

When a module is created, a directory structure like this is created:

```
├── Config
├── Console
├── Database
├── Http
├── Listeners
├── Models
├── Providers
└── Resources
```

- `Config` - This contains the config file for use in your module. The items in
  this will be prefixed by your module name, for example:

  ```php
  echo config('sample.name'); # writes out "Sample"
  ```

- `Console` - This contains any `artisan` commands your module might have
- `Database` - This contains several directories, the most important probably
  being the `migrations` directory. See below for more information about
  migrations and database access.
- `Http` - The folders in this are all related to HTTP access for your
  application - includes the controllers and routes
- `Listeners` - Any event listeners for your module will be in here. See below
  for more information about subscribing to events.
- `Models` - All of the models, used for database access, and corresponding to
  tables, are placed here.
- `Resources` - Any language files and views are placed here

---

### Automatic Installation

To be able to publish to composer, add `joshbrw/laravel-module-installer` as a
dependency in your module's `composer.json` file, and then set the `type` in the
`composer.json` file to `laravel-module`. Then a user can run
`composer require your/module` from Packagist to install.

See
[joshbrw/laravel-module-installer](https://github.com/joshbrw/laravel-module-installer)
for additional information.

---

# Routing And Controllers

Routing follows the standard Laravel routing format, and the files are placed in
the `modules/{MODULE}/Http/Routes` folder. For examples, see the `app/Routes`
files to see how the Route groups work and how the middleware works. For
example, the `Sample` module's routes:

---

## Web Routes

These are in the `Http/Routes/web.php` file. These define your pages that render
HTML. For example, the default routes look like:

```php
Route::group(['middleware' => [
    'role:user' # Define who can access this page
]], function() {

    # all your routes are prefixed with your module's name
    # e.g. yoursite.com/sample
    Route::get('/', 'SampleController@index');
});

```

#### Admin Routes

These are in the `Http/Routes/admin.php`. This will look for controllers in the
`Http/Controllers/Admin` folder and namespace. These routes will be prefixed
with `$module/admin`

#### API Routes

These are in `Http/Routes/api.php`, and will look for controllers in the
`Http/Controllers/Api` folder and namespace. These routes will be prefixed with
`/api/$module`.

#### `middleware`

Middleware allows you to inject a class into the HTTP request chain, so you
don't need to call a check or something in every method.

```php
'middleware' => ['role:user']   	# enable for all users
'middleware' => ['role:admin']  	# enable for admin only

'middleware' => ['api.auth'] # for API routes, you can add this middlware to require API auth
```

:::note

Read more about [Laravel Middleware](https://laravel.com/docs/9.x/middleware)

:::

---

## Controllers

Now we can look at the (truncated) corresponding controller:

```php
<?php

namespace Modules\Sample\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SampleController extends Controller
{
    // ...

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('sample::index');
    }

    // ...
}
```

---

##### Getting the User

```php
$user = Auth::user();
```

To check if a user is logged in, use:

```php
if(Auth::check())
```

---

# Database Access

## Models

Models are the more basic way to access your database tables. For example, if
you have a table called `sample_table`, a model called `SampleTable` would make
most sense. While table names generally refer to objects in the plural, a model
is named for an item in it's singular form.

### Creating a Model

The models go into the `Models` directory. The fastest way is to use the
`artisan` helper:

```
php artisan module:make-model SampleTable Sample
```

After it's generated, you should open the model, and fill in the table name. See
the [Laravel Model Documentation](https://laravel.com/docs/9.x/eloquent) for
more details on how to work with models.

#### Relationships

If your table has a column called `pirep_id`, you can add a relationship to your
model called `pireps`:

```php
namespace Modules\Sample\Models;

use App\Contracts\Model;

class SampleTable extends Model {
    public function pirep()
    {
        return $this->belongsTo(Pirep::class, 'pirep_id');
    }
}
```

Now, you can easily access the parent PIREP, without having to write any
queries:

```php
$record = SampleTable::with(['pirep'])->get(1);  # Get the ID of 1, eager-loading the pirep relationship
echo $record->pirep->dpt_airport_id; # Write out the departure airport
```

We can also get fancy, since the relationship returns the `Pirep` model, and it
has relationships to the `Airport` model, you can open the `App\Models\Pirep`
file and look at the relationships.

```php
echo $record->pirep->dpt_airport->name; # Write out the name of the departure airport
```

The right relationships make life easier. See the Laravel documentation on
relationships.

---

## Creating and modifying tables with migrations

Laravel includes a way to create and update tables, called
[migrations](https://laravel.com/docs/5.5/migrations). Migrations are ways to
programmatically define your tables, and let the framework worry about the exact
syntax to use. The advantage to this abstraction is being.

:::warning

You should _not_ be using raw SQL

:::

There is an `artisan` helper to generate migrations:

```shell
php artisan module:make-migration create_sample_table ModuleName
```

This will create a migration file in your module's `Database/migrations`
directory. Now, when a user can goes to the updater, at `/update`, it will show
that there are updates available, and the migrations will be run. During an
install, the migrations are also all run. This makes updates simple and
straight-forward, without having to run any SQL manually.

The `app/Database/migrations` directory has the core migrations and is a good
reference on field types, especially if you're looking to add relationships.

**Design your tables well** - follow the guidelines set by Laravel, and you'll
have a much better time.

:::note

Add new migration files when you have to modify a table, etc., after you've
released it into the wild. The migrations that are run are kept track of, so if
it's seen that it's already run the file, it won't run it again.

:::

### Table Name Convention

When naming tables, table names _should_ be prefixed with a short indentifier
that is unqiue to your addon or group of addons (e.g. `disposable_`, `ch_`,
`sp_`, etc.). For example, instead of naming a table `tours`, name it
`ch_tours`. This includes pivot tables. See Laravel documentation on how to
override the default conventions for table names, foreign relationships, etc.
where required.

**Not prefixing your tables could lead to unintended consequences**, including
but not limited to:

- Conflicting with future phpVMS core features that would use the same table
  name, thereby making it more difficult to update phpVMS at a later date.
- Conflicting with other addons by other 3rd party modules that don't head this
  warning.

### Seeding Data

I've added a few extra features, including adding seed data, including adding
seeder data. For example, the `Settings` table:

```php
<?php
use App\Contracts\Migration;
use App\Services\Installer\SeederService;
use Illuminate\Database\Schema\Blueprint;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('myaddon_settings', function (Blueprint $table) {
        	// ... Create all the columns
        });

        	// Create some initial data, with the columns filled out
        $settings = [
        	[
                'order' => 1,
                'name' => 'Start Date',
                'group' => 'general',
                'value' => '',
                'type' => 'date',
                'description' => 'The date your VA started',
            ],

            // A lot more entries

        ];

        $this->addData('myaddon_settings', $settings);
    }

    // Not showning the down()
}
```

---

# Templating

Templates are placed in `modules/{ModuleName}/Resources/views`. If someone wants
to modify the views, it's recommended that they either run
`php artisan vendor:publish` or they copy the templates into the
`resources/views/module/$moduleName` folder (look at the `$viewPath` value in
the `registerViews()` method in the
`$MODULE/Providers/$ModuleServiceProvider.php` file for the exact path if you're
unsure).

!!!! Read more about
[Laravel Blade Templating](https://laravel.com/docs/5.5/blade)

---

# Event Listeners

Available events from the main app are listed in the
[app/Events](/nabeelio/phpvms/tree/master/app/Events) directory. Subscribing to
events follows the
[Laravel Events](https://laravel.com/docs/5.5/events#event-subscribers) format.
Create the event listener in your `$MODULE\Listeners` folder (e.g,
`PirepAcceptedListener`), and then register it in your
`$MODULE\Providers\EventServiceProvider` folder, in the `$listen` section, like:

```php
protected $listen = [
    'App\Events\PirepAccepted' => [
        'Modules\Sample\Listeners\PirepAcceptedListener',
    ],
];
```

To see the data passed, just look in the Event class.

---

# Design Patterns and Suggestions

## Service Layer

When multiple models/repositories/steps are involved in a task, they should be
written as a `Service` class. For example, when filing a PIREP, there are
changes made to the `PIREP` model, but also to the `User` model, one or more
events are dispatched, etc. Instead of putting all of this logic into a
Controller or directly into a Model, a Service class should be defined, which
ties all these steps together. This helps with testing and debugging, and
portability. In the PIREP example, it can be filed through a web interface, or a
RESTful interface. A Service class allows for both of these to use the same
logic without reusing code.

---

## Repositories

While you can use and import models directly, it's recommended to use the
repositories, in the
[app/Repositories](/nabeelio/phpvms/tree/master/app/Repositories) are listed
[here](https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface).
Repositories give the added benefits of automatically caching and flushing the
cache when data is added/updated.

The recommended method is to use
[Automatic Injection](https://laravel.com/docs/5.5/container#automatic-injection),
which would involve adding a constructor to your Listener, as such:

```php
namespace Modules\Sample\Listeners;

use App\Events\PirepAccepted;
use App\Repositories\PirepRepository;

class PirepAcceptedListener {

    private $pirepRepo;

    // You can pass as many Repositories in as your wish.
    // See the app\Controllers for more examples
    public function __construct(PirepRepository $pirepRepo) {
        $this->pirepRepo = $pirepRepo;
    }

    public function handle(PirepAccepted $pirep) {
        Log::info('Received PIREP', [$pirep]);
    }
}
```

The methods in the repositories largely mirror the Model methods, but can
automatically handle searches, etc. The docs for the repositories
[are available here](https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface).
You can read more about the repository pattern
[here](https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/?utm_source=prettus-l5-repository&utm_medium=readme&utm_campaign=prettus-l5-repository)

## Module Owned Flights

In phpVMS's Flights Table, if your module needs to generate flights for the user
to fly, modules can use the `owner` polymoprhic relationship.

When a flight is owned by a module, the flight will not be subject to phpVMS's
core automation (e.g. hiding and showing flights). Therefore, you must define
your own automation regarding how flights behave and are accessible.

You can use the owner polymorphic relationship in two ways. The first way
involves just setting the type. The type is what's checked in the core code to
validate the existence of a module owned flight.

In this case, one way to utilize this, especially if you don't have a
relationship to a model setup, is to set one of your module's service providers
as the class. For example:

```php
$flight->owner_type = FreeFlightProvider::class;
```

If you do have a model, say a flight is attached to a `Tour` model, can add the
ID to the specific model.

```php
// Get a tour
$tour = Tour::find(1);

// Attach it to the flight
$flight->owner_type = Tour::class;
$flight->owner_id = $tour->id;
```

If you have a polymorphic relationship setup on the Tour model, you can use the
operators given via Laravel. See the
[Polymorphic Relationship docs](https://laravel.com/docs/11.x/eloquent-relationships#polymorphic-relationships)
for more info.
