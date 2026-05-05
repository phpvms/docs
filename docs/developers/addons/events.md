---
id: events
title: Events & Listeners
---

phpVMS dispatches a number of events you can subscribe to from your module —
when a PIREP is filed, a flight is bid on, a user registers, and so on. The
full list of available events lives in the core
[app/Events](https://github.com/nabeelio/phpvms/tree/master/app/Events)
directory.

Subscribing follows the standard
[Laravel events](https://laravel.com/docs/events) pattern.

## Listening to phpVMS events

### 1. Generate a listener

```shell
php artisan module:make-listener PirepAcceptedListener Sample --event=PirepAccepted
# → Modules/Sample/app/Listeners/PirepAcceptedListener.php
```

Pass `--queued` if you want the listener to run on a queue rather than
synchronously:

```shell
php artisan module:make-listener PirepAcceptedListener Sample \
    --event=PirepAccepted --queued
```

### 2. Implement `handle()`

```php
namespace Modules\Sample\Listeners;

use App\Events\PirepAccepted;
use Illuminate\Support\Facades\Log;

class PirepAcceptedListener
{
    public function handle(PirepAccepted $event): void
    {
        Log::info('Received PIREP', [$event->pirep]);
    }
}
```

The argument passed to `handle()` is the event class itself — open the
event under `app/Events` to see what data is exposed (e.g.
`$event->pirep`, `$event->user`).

### 3. Register the listener

Register it in the module's `EventServiceProvider`. If you don't have one
yet, generate it:

```shell
php artisan module:make-event-provider EventServiceProvider Sample
```

Then add your listeners to the `$listen` array:

```php
namespace Modules\Sample\Providers;

use App\Events\PirepAccepted;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Modules\Sample\Listeners\PirepAcceptedListener;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        PirepAccepted::class => [
            PirepAcceptedListener::class,
        ],
    ];
}
```

Finally, register the new provider from your module's main service
provider:

```php
// Modules/Sample/app/Providers/SampleServiceProvider.php

public function register(): void
{
    $this->app->register(RouteServiceProvider::class);
    $this->app->register(EventServiceProvider::class);
}
```

## Dispatching your own events

Modules can dispatch their own events too — useful when other addons (or
the operator's customisations) might want to react to something that
happens inside your module.

```shell
php artisan module:make-event PostWasPublished Sample
# → Modules/Sample/app/Events/PostWasPublished.php

php artisan module:make-listener NotifyAdminListener Sample --event=PostWasPublished
```

Then dispatch from anywhere — controllers, services, observers:

```php
use Modules\Sample\Events\PostWasPublished;

PostWasPublished::dispatch($post);
// or
event(new PostWasPublished($post));
```

## Listening to module lifecycle events

The module system itself dispatches events when modules are enabled,
disabled, created, or destroyed. You can hook into them to run setup,
teardown, or notification logic.

```php
use Nwidart\Modules\Events\ModuleEvent;

protected $listen = [
    ModuleEvent::ENABLED => [
        \Modules\Sample\Listeners\OnModuleEnabled::class,
    ],
    ModuleEvent::DISABLING => [
        \Modules\Sample\Listeners\OnModuleDisabling::class,
    ],
];
```

| Constant     | When it fires                                    |
| ------------ | ------------------------------------------------ |
| `BOOT`       | Each module finishes booting on every request.   |
| `REGISTER`   | Each module is registered.                       |
| `ENABLING`   | Just before a module is enabled.                 |
| `ENABLED`    | After a module is enabled.                       |
| `DISABLING`  | Just before a module is disabled.                |
| `DISABLED`   | After a module is disabled.                      |
| `CREATING`   | Before a module is created via `module:make`.    |
| `CREATED`    | After `module:make` completes.                   |
| `DELETING`   | Before `module:delete`.                          |
| `DELETED`    | After `module:delete`.                           |
| `USED`       | A module is selected with `module:use`.          |
| `UNUSED`     | `module:unuse`.                                  |

## Dependency injection

Listeners are resolved out of the Laravel container, so any constructor
dependencies (services, core models, clients) are auto-injected:

```php
namespace Modules\Sample\Listeners;

use App\Events\PirepAccepted;
use App\Services\PirepService;

class PirepAcceptedListener
{
    public function __construct(
        private PirepService $pirepSvc,
    ) {}

    public function handle(PirepAccepted $event): void
    {
        // $this->pirepSvc is ready to use
    }
}
```

See [Patterns & Conventions → Dependency injection](./patterns.md#dependency-injection)
for the recommended constructor-injection style.
