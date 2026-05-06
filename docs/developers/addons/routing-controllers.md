---
id: routing-controllers
title: Routing & Controllers
---

Routing in a phpvms module follows the standard
[Laravel routing](https://laravel.com/docs/routing) format. Each generated
module has its own `routes/` directory with separate files for web pages and
API endpoints, registered automatically by the module's `RouteServiceProvider`.

## Route files

A generated module ships with two route files:

| File              | URL prefix         | Middleware group | Default name prefix |
| ----------------- | ------------------ | ---------------- | ------------------- |
| `routes/web.php`  | `/{module}`        | `web`            | `{module}.`         |
| `routes/api.php`  | `/api/{module}`    | `api`            | `api.{module}.`     |

### Web routes (`routes/web.php`)

```php
<?php

use Illuminate\Support\Facades\Route;
use Modules\Sample\Http\Controllers\SampleController;

Route::middleware(['web'])
    ->prefix('sample')
    ->name('sample.')
    ->group(function () {
        Route::get('/', [SampleController::class, 'index'])->name('index');
        Route::get('/{post}', [SampleController::class, 'show'])->name('show');
    });
```

The named route `sample.index` resolves to `route('sample.index')` and the
URL `/sample`.

### API routes (`routes/api.php`)

```php
<?php

use Illuminate\Support\Facades\Route;
use Modules\Sample\Http\Controllers\Api\PostController;

Route::middleware(['api'])
    ->prefix('api/sample')
    ->name('api.sample.')
    ->group(function () {
        Route::apiResource('posts', PostController::class);
    });
```

`apiResource` registers the standard `index/show/store/update/destroy`
routes — see the
[Laravel API resource controllers docs](https://laravel.com/docs/controllers#api-resource-routes).

### Standard Laravel features

All Laravel routing features work as you'd expect inside module route files:

- Resource and API resource routes (`Route::resource`, `Route::apiResource`).
- Route model binding — `Route::get('/posts/{post}', ...)` resolves a `Post`
  by its primary key automatically.
- Named routes and route groups.
- Cross-module references — your module can call `route('shop.checkout')`
  on routes defined in another module.

### `RouteServiceProvider`

The provider at `app/Providers/RouteServiceProvider.php` registers the route
files and sets the controller namespace. You won't normally need to edit
it. If you delete it accidentally, regenerate with:

```shell
php artisan module:route-provider Sample
```

## Controllers

Controllers live under `Modules/{Module}/app/Http/Controllers/`, with the
namespace `Modules\{Module}\Http\Controllers`. A minimal controller looks
like:

```php
<?php

namespace Modules\Sample\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SampleController extends Controller
{
    public function index()
    {
        return view('sample::index');
    }
}
```

The `sample::index` view reference uses the module's `alias` (from
`module.json`) as a view-namespace prefix. See [Templating](./templating.md).

### Generating controllers

```shell
# Resource controller (default — generates index/create/store/show/edit/update/destroy)
php artisan module:make-controller PostController Sample

# API-only controller (drops create/edit form methods)
php artisan module:make-controller PostController Sample --api

# Plain controller (no methods)
php artisan module:make-controller PostController Sample --plain

# Single-action invokable controller
php artisan module:make-controller PublishPostController Sample --invokable
```

You can nest controllers in subdirectories. This is the convention for
admin- and API-specific controllers:

```shell
php artisan module:make-controller Admin/PostController Sample
# → Modules/Sample/app/Http/Controllers/Admin/PostController.php
# → namespace Modules\Sample\Http\Controllers\Admin

php artisan module:make-controller Api/PostController Sample --api
# → Modules/Sample/app/Http/Controllers/Api/PostController.php
# → namespace Modules\Sample\Http\Controllers\Api
```

Use route groups in `web.php` or `api.php` to wire these up:

```php
Route::middleware(['web', 'role:admin'])
    ->prefix('sample/admin')
    ->name('sample.admin.')
    ->group(function () {
        Route::resource('posts', \Modules\Sample\Http\Controllers\Admin\PostController::class);
    });
```

### Form requests

Generate validation classes with:

```shell
php artisan module:make-request StorePostRequest Sample
# → Modules/Sample/app/Http/Requests/StorePostRequest.php
```

Inside the request class:

```php
namespace Modules\Sample\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'body'  => 'required|string',
        ];
    }
}
```

Type-hint it in your controller method to get validated input automatically:

```php
public function store(StorePostRequest $request)
{
    $post = Post::create($request->validated());
    return redirect()->route('sample.show', $post);
}
```

### API resources

For shaping JSON responses:

```shell
php artisan module:make-resource PostResource Sample
php artisan module:make-resource PostCollection Sample --collection
```

```php
return PostResource::collection(Post::all());
```

### A full resource controller

```php
<?php

namespace Modules\Sample\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Sample\Http\Requests\StorePostRequest;
use Modules\Sample\Http\Requests\UpdatePostRequest;
use Modules\Sample\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return view('sample::posts.index', [
            'posts' => Post::latest()->paginate(15),
        ]);
    }

    public function create()
    {
        return view('sample::posts.create');
    }

    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());
        return redirect()->route('sample.posts.show', $post);
    }

    public function show(Post $post)
    {
        return view('sample::posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('sample::posts.edit', compact('post'));
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        return redirect()->route('sample.posts.show', $post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('sample.posts.index');
    }
}
```

## Middleware

Middleware lets you inject access checks into the request chain so you don't
need to repeat them in every method. phpvms provides three middleware
aliases on top of Laravel's defaults:

| Middleware     | Purpose                                                    |
| -------------- | ---------------------------------------------------------- |
| `auth`         | Standard Laravel — request must come from a logged-in user.|
| `role:user`    | Logged-in phpvms user. Use for normal pilot pages.         |
| `role:admin`   | Admin user. Use for admin-only screens.                    |
| `api.auth`     | API key authentication. Use on `routes/api.php` routes.    |

Apply middleware in route groups or directly on routes:

```php
Route::middleware(['web', 'role:user'])->prefix('sample')->group(function () {
    Route::get('/dashboard', [SampleController::class, 'dashboard']);
});

Route::middleware(['api', 'api.auth'])->prefix('api/sample')->group(function () {
    Route::get('/stats', [Api\StatsController::class, 'index']);
});
```

You can also apply middleware from inside a controller's constructor:

```php
public function __construct()
{
    $this->middleware('auth');
    $this->middleware('role:admin')->only(['edit', 'update', 'destroy']);
}
```

### Custom middleware

Generate one with:

```shell
php artisan module:make-middleware EnsurePostIsPublished Sample
# → Modules/Sample/app/Http/Middleware/EnsurePostIsPublished.php
```

Register an alias in your module's `RouteServiceProvider` if you want to use
it as a string:

```php
public function boot(): void
{
    $this->app['router']->aliasMiddleware(
        'post.published',
        \Modules\Sample\Http\Middleware\EnsurePostIsPublished::class,
    );

    parent::boot();
}
```

Or apply it directly to a route by class name:

```php
Route::get('/posts/{post}', [PostController::class, 'show'])
    ->middleware(\Modules\Sample\Http\Middleware\EnsurePostIsPublished::class);
```

See the [Laravel middleware docs](https://laravel.com/docs/middleware) for
the full feature set, including parameters, terminable middleware, and
group registration.

## Getting the current user

```php
use Illuminate\Support\Facades\Auth;

$user = Auth::user();

if (Auth::check()) {
    // user is logged in
}
```

For API routes protected by `api.auth`, the authenticated user is also
available via `Auth::user()` once the middleware has resolved the API key.
