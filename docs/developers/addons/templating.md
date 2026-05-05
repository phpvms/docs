---
id: templating
title: Templating & Assets
---

Module views are [Blade](https://laravel.com/docs/blade) templates stored
under `Modules/{Module}/resources/views/`. Reference them from controllers
using the module's `alias` (from `module.json`) as the view-namespace
prefix:

```php
return view('sample::index');           // resources/views/index.blade.php
return view('sample::admin.dashboard'); // resources/views/admin/dashboard.blade.php
```

A generated module ships with two views:

- `resources/views/layouts/master.blade.php` — a basic HTML skeleton with
  `@yield('content')`.
- `resources/views/index.blade.php` — extends the master layout.

## Generating views

```shell
php artisan module:make-view posts.index Sample
# → Modules/Sample/resources/views/posts/index.blade.php
```

## Using views

A typical module view extends a layout and yields content:

```blade
{{-- Modules/Sample/resources/views/posts/index.blade.php --}}
@extends('sample::layouts.master')

@section('content')
    <h1>Posts</h1>

    @foreach ($posts as $post)
        <article>
            <h2>{{ $post->title }}</h2>
            <p>{{ $post->excerpt }}</p>
        </article>
    @endforeach
@endsection
```

You can also extend phpVMS's main layouts directly:

```blade
@extends('layouts.app')
```

Or include partials from other modules:

```blade
@include('shop::partials.cart-summary')
@extends('admin::layouts.dashboard')
```

## View composers

If a view always needs the same data, register a view composer in the
module's service provider — usually inside `boot()`:

```php
// Modules/Sample/app/Providers/SampleServiceProvider.php

public function boot(): void
{
    parent::boot();

    $this->app['view']->composer('sample::*', function ($view) {
        $view->with('siteSettings', \App\Models\Setting::all());
    });
}
```

Now every view in the `sample` namespace receives `$siteSettings`
automatically.

See the [Laravel view composers docs](https://laravel.com/docs/views#view-composers)
for the full pattern.

## Blade components

Blade components are reusable view fragments. Generate one with:

```shell
php artisan module:make-component Alert Sample
```

This creates two files:

- `Modules/Sample/app/View/Components/Alert.php` — the PHP class.
- `Modules/Sample/resources/views/components/alert.blade.php` — the markup.

```php
namespace Modules\Sample\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    public function __construct(
        public string $type = 'info',
        public ?string $message = null,
    ) {}

    public function render()
    {
        return view('sample::components.alert');
    }
}
```

```blade
{{-- resources/views/components/alert.blade.php --}}
<div class="alert alert-{{ $type }}">
    {{ $message ?? $slot }}
</div>
```

Use it from any view, prefixed with the module alias:

```blade
<x-sample::alert type="success" :message="$message" />

<x-sample::alert type="warning">
    Heads up — your flight plan was modified.
</x-sample::alert>
```

### Anonymous (view-only) components

If you don't need PHP logic, generate just the view:

```shell
php artisan module:make-component-view card Sample
# → Modules/Sample/resources/views/components/card.blade.php
```

```blade
<x-sample::card>
    <h3>{{ $title }}</h3>
    {{ $slot }}
</x-sample::card>
```

## Overriding views

If an operator wants to customise your module's views without editing the
module itself, they have two options. Both work because the module's service
provider registers the **app override path first** when calling
`loadViewsFrom`, so Laravel resolves the operator's copy before the
module's own.

### 1. Publish the views

```shell
php artisan vendor:publish
```

…and pick your module from the list. This copies the Blade files into
`resources/views/modules/{alias}/` in the host app, where edits survive
module updates.

### 2. Manually copy the file

Copy the specific view from
`Modules/{Module}/resources/views/...` into
`resources/views/modules/{alias}/...` in the host app. The override is
picked up immediately — no `vendor:publish` required.

:::note

The override path uses the module's lowercase **alias** (`sample`), not its
StudlyCase name. For a module aliased `sample`, overrides go to
`resources/views/modules/sample/`.

:::

## Compiling assets (Vite)

Module assets live under `Modules/{Module}/resources/assets/`:

```
Modules/Sample/
├── package.json
├── vite.config.js
└── resources/
    └── assets/
        ├── js/app.js
        └── sass/app.scss
```

There are two ways to compile module assets — pick one per project.

### Option A — Main Vite config (recommended)

A single `vite.config.js` at the project root collects assets from every
enabled module. The host project's main `vite.config.js` should look like:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import collectModuleAssetsPaths from './vite-module-loader.js';

async function getConfig() {
    const paths = [
        'resources/css/app.css',
        'resources/js/app.js',
    ];

    return defineConfig({
        plugins: [
            laravel({
                input: await collectModuleAssetsPaths(paths, 'Modules'),
                refresh: true,
            }),
        ],
    });
}

export default getConfig();
```

Each module's `vite.config.js` exports its asset paths:

```js
// Modules/Sample/vite.config.js
export const paths = [
    'Modules/Sample/resources/assets/sass/app.scss',
    'Modules/Sample/resources/assets/js/app.js',
];
```

Render module assets in your layout:

```blade
@vite(\Nwidart\Modules\Module::getAssets())
```

Build everything from the project root:

```shell
npm run build      # production
npm run dev        # dev server with HMR
```

### Option B — Per-module Vite

If you'd rather keep each module fully self-contained, publish the
per-module loader:

```shell
php artisan vendor:publish \
    --provider="Nwidart\Modules\LaravelModulesServiceProvider" \
    --tag="vite"
```

Configure the module's `vite.config.js`:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: '../../public/build-sample',
        emptyOutDir: true,
    },
    plugins: [
        laravel({
            publicDirectory: '../../public',
            buildDirectory: 'build-sample',
            input: [
                __dirname + '/resources/assets/sass/app.scss',
                __dirname + '/resources/assets/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
```

Render the assets in a layout using the `module_vite()` helper:

```blade
{{ module_vite('build-sample', 'resources/assets/sass/app.scss') }}
{{ module_vite('build-sample', 'resources/assets/js/app.js') }}
```

Build from inside the module:

```shell
cd Modules/Sample
npm install
npm run build
```

## Further reading

- [Laravel Blade templating](https://laravel.com/docs/blade)
- [Laravel components](https://laravel.com/docs/blade#components)
- [Laravel Vite asset bundling](https://laravel.com/docs/vite)
