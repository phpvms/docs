"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3075],{3571:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"customize/layouts","title":"Layouts and Template Basics","description":"phpVMS can customized to fit your VA\'s look and feel. The templating is powered by Laravel Blade. To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense.","source":"@site/docs/customize/layouts.md","sourceDirName":"customize","slug":"/customize/layouts","permalink":"/customize/layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/customize/layouts.md","tags":[],"version":"current","frontMatter":{"id":"layouts","title":"Layouts and Template Basics"},"sidebar":"docs","previous":{"title":"VATSIM","permalink":"/oauth/vatsim"},"next":{"title":"Theming","permalink":"/customize/theming"}}');var i=n(4848),l=n(8453);const a={id:"layouts",title:"Layouts and Template Basics"},c=void 0,r={},o=[{value:"Layout Basics",id:"layout-basics",level:2},{value:"Template basics",id:"template-basics",level:3},{value:"Caching Items",id:"caching-items",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["phpVMS can customized to fit your VA's look and feel. The templating is powered by ",(0,i.jsx)(s.a,{href:"https://laravel.com/docs/7.x/blade",children:"Laravel Blade"}),". To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense."]}),"\n",(0,i.jsx)(s.h2,{id:"layout-basics",children:"Layout Basics"}),"\n",(0,i.jsxs)(s.p,{children:["All of the themes are stored in the ",(0,i.jsx)(s.code,{children:"resources/views/layouts/"})," folder. There is a base theme file, ",(0,i.jsx)(s.code,{children:"app.blade.php"}),", which is then used by the templates. It has several required sections:"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.code,{children:"resources/views/layouts/default/app.blade.php"})," as an example template, since there are several sections of code which are required in any custom templates, including some Javascript and CSS. I've tried to make notes and outline those sections in the ",(0,i.jsx)(s.code,{children:"default/app.blade.php"})," file itself."]})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@section('title')"})," is the page title, and shows up in the title bar"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@section('content')"})," is the main content for the page"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@section('scripts')"})," is where any Javascript will go (note, you need to include the ",(0,i.jsx)(s.code,{children:"<script><\/script>"})," tags when extending this section."]}),"\n",(0,i.jsxs)(s.li,{children:["Layouts and templates follows ",(0,i.jsx)(s.a,{href:"https://laravel.com/docs/9.x/blade#layouts-using-template-inheritance",children:"Laravel's Template Inheritance"})]}),"\n",(0,i.jsxs)(s.li,{children:["Your page layout needs to be called ",(0,i.jsx)(s.code,{children:"app.blade.php"}),". This is to keep compatibility with any addons/modules that will extend the basic layout","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["All of the templates will ",(0,i.jsx)(s.code,{children:"@extend('app')"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["The page layout requires several sections:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@yield('title')"})," - this would go into the ",(0,i.jsx)(s.code,{children:"<title>"})," tag of the page"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@yield('css')"})," - place this towards the end of the ",(0,i.jsx)(s.code,{children:"<head>"})," section"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@include('system.scripts')"})," - put this last the last statement before the ",(0,i.jsx)(s.code,{children:"</head>"})," tag"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@yield('content')"})," - where the body of the page will display"]}),"\n",(0,i.jsxs)(s.li,{children:["This goes at the end of the body:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:"<script src=\"{!! public_asset('/assets/system/js/vendor.js') !!}?v={!! time() !!}\"><\/script>\n<script src=\"{!! public_asset('/assets/system/js/phpvms.js') !!}?v={!! time() !!}\"><\/script>\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"@yield('scripts')"})," has to go right before the ",(0,i.jsx)(s.code,{children:"</body>"})," tag"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["View the main ",(0,i.jsx)(s.code,{children:"resources/views/layouts/default/app.blade.php"})," to ensure that you've got all of the Javascript and code required. There are notes in that file as to what is absolutely required."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"template-basics",children:"Template basics"}),"\n",(0,i.jsxs)(s.p,{children:["phpVMS takes advantage of many of the ",(0,i.jsx)(s.a,{href:"https://laravel.com/docs/9.x/blade",children:"Laravel Blade"})," features, and there are no limitations placed within the system to prevent anyone from using the full power of the templating system. There are only a few guidelines, to ensure a consistent standard for addons, widgets and other customizations."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"All templates extend the 'app' layout (as described above). Unless you have a custom page that has all of the HTML required"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"@extends('app')\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"This is the page title, as described above"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"@section('title', 'flights')\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"This is where all of the content for a page will go"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"@section('content')\n# Place content here\n@endsection\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["This is also optional, where any CSS can go. Needs to include the ",(0,i.jsx)(s.code,{children:"<style>"})," tags"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"@section('css')\n@endsection\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["This is optional, where any Javascript will go. Needs to be in ",(0,i.jsx)(s.code,{children:"<script>"})," tags"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"@section('scripts')\n@endsection\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"caching-items",children:"Caching Items"}),"\n",(0,i.jsxs)(s.p,{children:["When making calls to models, etc in templates, to increase performance, using the ",(0,i.jsx)(s.code,{children:"cache()->remember()"})," call. The call looks like:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$value = cache()->remember($cache_name, $cache_time_in_seconds, $function_to_lookup);\n"})}),"\n",(0,i.jsx)(s.p,{children:"An example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"// Cache for 5 minutes (3600 seconds)\n$schedule_count = cache()->remember('schedule_count', 3600, function () {\n    return \\App\\Models\\Flight::where('active', true)->count();\n});\n\nSchedule Count: {{ $schedule_count }}\n"})}),"\n",(0,i.jsx)(s.p,{children:"This will greatly increase the performance on your pages"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(s.p,{children:"A few good resources are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://laravel.com/docs/9.x/blade",children:"Laravel Blade"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://laracasts.com/series/laravel-5-fundamentals/episodes/5",children:"Blade 101, Laracast Video"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://laracasts.com/series/laravel-from-scratch-2017/episodes/10",children:"Layouts and Structure, Laracast Video"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Laracasts is a great resource for learning the ins and outs of Laravel."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(6540);const i={},l=t.createContext(i);function a(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);