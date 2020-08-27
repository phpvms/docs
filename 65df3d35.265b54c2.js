(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(84)),o={id:"overview",title:"Overview"},l={unversionedId:"api/overview",id:"api/overview",isDocsHomePage:!1,title:"Overview",description:"phpVMS includes a REST API that can be used for retrieving or saving information.",source:"@site/docs/api/overview.md",permalink:"/api/overview",editUrl:"https://github.com/phpvms/docs/tree/master/docs/api/overview.md",sidebar:"someSidebar",previous:{title:"Awards",permalink:"/developers/awards"},next:{title:"Authentication",permalink:"/api/auth"}},p=[{value:"Pagination",id:"pagination",children:[]},{value:"Rate Limiting",id:"rate-limiting",children:[{value:"Response Code",id:"response-code",children:[]},{value:"Response Headers",id:"response-headers",children:[]},{value:"More Information",id:"more-information",children:[]}]},{value:"Errors",id:"errors",children:[{value:"Unauthorized",id:"unauthorized",children:[]},{value:"Not Found",id:"not-found",children:[]},{value:"Validation Errors",id:"validation-errors",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"phpVMS includes a REST API that can be used for retrieving or saving information."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"pagination"},"Pagination"),Object(i.a)("p",null,"Where indicated, pagination is enabled/available. When calling those APIs, the data is returned in this format:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"data")," contains a list of all of the objects (for example, the airports)"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"links")," contains the links to navigate through the paginated list"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"meta")," contains information about the current dataset")),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{ \n  "data": [ ... ],\n  "links": {\n    "first":"http://phpvms.test/api/airports?page=1",\n    "last":"http://phpvms.test/api/airports?page=3",\n    "prev":null,\n    "next":"http://phpvms.test/api/airports?page=2"\n  },\n  "meta": {\n    "current_page": 1,\n    "from":1, \n    "last_page":3,\n    "path":"http://phpvms.test/api/airports",\n    "per_page":50,\n    "to":50,\n    "total":120\n  }\n}\n')),Object(i.a)("hr",null),Object(i.a)("h2",{id:"rate-limiting"},"Rate Limiting"),Object(i.a)("p",null,"Laravel's API Middleware includes a rate limiter, which, by default, it set to 60 requests per minute, per-IP."),Object(i.a)("h3",{id:"response-code"},"Response Code"),Object(i.a)("p",null,"If you exceed the throttling, you'll have a ",Object(i.a)("inlineCode",{parentName:"p"},"429 Too Many Requests")," HTTP response code. You'll also have a ",Object(i.a)("inlineCode",{parentName:"p"},"Retry-After")," header included, indicating the number of seconds to wait:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"Retry-After: 60\n")),Object(i.a)("p",null,"The below headers will also be included."),Object(i.a)("h3",{id:"response-headers"},"Response Headers"),Object(i.a)("p",null,"When a request is made, several headers are returned to show you where you are in terms of throttling:"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),"X-RateLimit-Limit: 60\nX-RateLimit-Remaining: 59\n")),Object(i.a)("h3",{id:"more-information"},"More Information"),Object(i.a)("p",null,"To read some more information about how the throttling works in Laravel, ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://mattstauffer.com/blog/api-rate-limiting-in-laravel-5-2/"}),"check out this page")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"errors"},"Errors"),Object(i.a)("p",null,"Where possible, the standard HTTP error codes are followed and returned, with extra information in the body, if available."),Object(i.a)("h3",{id:"unauthorized"},"Unauthorized"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"401")," is returned if the API key is invalid, or the user is disallowed from API access. The ",Object(i.a)("inlineCode",{parentName:"p"},"message")," parameter will offer more error."),Object(i.a)("h3",{id:"not-found"},"Not Found"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"404")," is returned if an entity is not found"),Object(i.a)("h3",{id:"validation-errors"},"Validation Errors"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"400"),", with details in the ",Object(i.a)("inlineCode",{parentName:"p"},"message")," parameter about the bad input."))}s.isMDXComponent=!0},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);