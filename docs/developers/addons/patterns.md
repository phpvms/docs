---
id: patterns
title: Patterns & Conventions
---

A few design patterns will keep your addon maintainable and consistent with
phpvms core. These are conventions, not hard requirements — but following
them makes your code easier to test, easier to debug, and easier for other
developers to contribute to.

## Service layer

When a task spans multiple models or steps, write it as a **Service class**
rather than putting the logic in a controller or model.

For example, filing a PIREP touches the `Pirep` model, the `User` model,
dispatches one or more events, updates ledgers, etc. Putting all of that in
one controller is fragile and hard to reuse. A service class ties the steps
together once and is callable from any entry point — web, API, console
command, scheduled job.

Generate one with:

```shell
php artisan module:make-service SampleReportService Sample
# → Modules/Sample/app/Services/SampleReportService.php
```

Inject any dependencies — other services, core models — via the
constructor:

```php
namespace Modules\Sample\Services;

use App\Models\Pirep;
use App\Services\PirepService;

class SampleReportService
{
    public function __construct(
        private PirepService $pirepSvc,
    ) {}

    public function generateReport(int $pirepId): array
    {
        $pirep = Pirep::with(['user', 'aircraft'])->findOrFail($pirepId);
        // … do the work
        return [/* … */];
    }
}
```

Core service classes live under
[`app/Services/`](https://github.com/nabeelio/phpvms/tree/master/app/Services)
and are the canonical place to look for "how does phpvms do X" — they're
also the safe entry points for mutating core data from your addon.

## Dependency injection

Listeners, controllers, services, and console commands are all resolved out
of the Laravel container, so any constructor dependencies are auto-injected.
Use this for everything — services, core models that need bootstrapping,
clients for external APIs:

```php
namespace Modules\Sample\Listeners;

use App\Events\PirepAccepted;
use App\Services\PirepService;
use Illuminate\Support\Facades\Log;

class PirepAcceptedListener
{
    public function __construct(
        private PirepService $pirepSvc,
    ) {}

    public function handle(PirepAccepted $event): void
    {
        Log::info('Received PIREP', [$event->pirep]);
    }
}
```

You can pass as many dependencies into a constructor as you need. See
`app/Http/Controllers/` in core for plenty of examples.

### Binding interfaces to implementations

If you want to depend on an interface and swap implementations at runtime,
register the binding in your module's service provider:

```php
// Modules/Sample/app/Providers/SampleServiceProvider.php

public function register(): void
{
    parent::register();

    $this->app->bind(
        \Modules\Sample\Contracts\ReportGenerator::class,
        \Modules\Sample\Services\PdfReportGenerator::class,
    );
}
```

Now anything type-hinting `ReportGenerator` gets the PDF implementation:

```php
public function __construct(
    private \Modules\Sample\Contracts\ReportGenerator $generator,
) {}
```

For singletons (one instance per request lifecycle), use `singleton()`
instead of `bind()`.

See the [Laravel automatic injection docs](https://laravel.com/docs/container#automatic-injection)
for the full pattern.

## Scheduled commands

Add a scheduled command from inside your module's service provider:

```php
// Modules/Sample/app/Providers/SampleServiceProvider.php

use Illuminate\Console\Scheduling\Schedule;

public function boot(): void
{
    parent::boot();

    $this->app->booted(function () {
        $schedule = $this->app->make(Schedule::class);
        $schedule->command('sample:cleanup-reports')->daily();
    });
}
```

Generate the command with:

```shell
php artisan module:make-command CleanupReportsCommand Sample
```

---

## Module-owned flights

If your module needs to generate flights for users to fly, attach them to
your module via the **`owner` polymorphic relationship** on the `Flight`
model.

When a flight is owned by a module, **phpvms core automation no longer
applies to it** (no automatic showing/hiding, no schedule-based filtering,
etc.). You're responsible for defining how those flights behave and when
they're visible.

There are two common ways to use the relationship.

### Just set the owner type

If you don't have a model to attach the flight to, point `owner_type` at any
class your module exposes — typically a service provider:

```php
$flight->owner_type = FreeFlightProvider::class;
$flight->save();
```

Core code only checks the `owner_type` value to know the flight is
module-owned, so any unique class name works.

### Attach to a specific model

If your module has a model the flight relates to (e.g. a `Tour`):

```php
use Modules\Sample\Models\Tour;

$tour = Tour::find(1);

$flight->owner_type = Tour::class;
$flight->owner_id   = $tour->id;
$flight->save();
```

If your `Tour` model declares the inverse `morphMany` relationship to
flights, you can use Laravel's polymorphic helpers directly. See the
[Laravel polymorphic relationship docs](https://laravel.com/docs/eloquent-relationships#polymorphic-relationships)
for the full pattern.
