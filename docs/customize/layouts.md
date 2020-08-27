---
id: layouts
title: Layouts and Template Basics
---
phpVMS can customized to fit your VA's look and feel. The templating is powered by [Laravel Blade](https://laravel.com/docs/7.x/blade). To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense.

## Layout Basics

At a minimum, `app.blade.php` has 3 sections that are extended by the templates.

:::info
See the `default/app.blade.php` as an example template, since there are several sections of code which are required in the templates, including some Javascript and CSS.
:::

- `@section('title')` is the page title, and shows up in the title bar
- `@section('content')` is the main content for the page
- `@section('scripts')` is where any Javascript will go (note, you need to include the `<script></script>` tags when extending this section.
- Layouts and templates follows [Laravel's Template Inheritance](https://laravel.com/docs/5.6/blade#template-inheritance)
- Your page layout needs to be called `app.blade.php`. This is to keep compatibility with any addons/modules that will extend the basic layout
  - All of the templates will `@extend('app')`.
- The page layout requires several sections:
  - `@yield('title')` - this would go into the `<title>` tag of the page
  - `@yield('css')` - place this towards the end of the `<head>` section
  - `@include('system.scripts')` - put this last the last statement before the `</head>` tag
  - `@yield('content')` - where the body of the page will display
  - This goes at the end of the body:
    ```html
    <script src="{!! public_asset('/assets/system/js/vendor.js') !!}?v={!! time() !!}"></script>
    <script src="{!! public_asset('/assets/system/js/phpvms.js') !!}?v={!! time() !!}"></script>
    ```
  - `@yield('scripts')` has to go right before the `</body>` tag

### Template basics

phpVMS takes advantage of many of the [Laravel Blade](https://laravel.com/docs/5.6/blade) features, and there are no limitations placed within the system to prevent anyone from using the full power of the templating system. There are only a few guidelines, to ensure a consistent standard for addons, widgets and other customizations.

- All templates extend the 'app' layout (as described above). Unless you have a custom page that has all of the HTML required

```php 
@extends('app')
```

- This is the page title, as described above

```php
@section('title', 'flights')
```

- This is where all of the content for a page will go

```php
@section('content')
# Place content here
@endsection
```

- This is also optional, where any CSS can go. Needs to include the `<style>` tags
```php
@section('css')
@endsection
```

- This is optional, where any Javascript will go. Needs to be in `<script>` tags
```php
@section('scripts')
@endsection
```


## Resources

A few good resources are:

- [Laravel Blade](https://laravel.com/docs/5.5/blade)
- [Blade 101, Laracast Video](https://laracasts.com/series/laravel-5-fundamentals/episodes/5)
- [Layouts and Structure, Laracast Video](https://laracasts.com/series/laravel-from-scratch-2017/episodes/10)

Laracasts is a great resource for learning the ins and outs of Laravel.