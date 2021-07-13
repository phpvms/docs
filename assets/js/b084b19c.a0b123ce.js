(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4882],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7145:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},s={unversionedId:"config/optimizing",id:"config/optimizing",isDocsHomePage:!1,title:"Optimizing",description:"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs",source:"@site/docs/config/optimizing.md",sourceDirName:"config",slug:"/config/optimizing",permalink:"/config/optimizing",editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/optimizing.md",version:"current",frontMatter:{id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},sidebar:"docs",previous:{title:"Email",permalink:"/config/email"},next:{title:"Notifications",permalink:"/config/notifications"}},p=[{value:"Drivers",id:"drivers",children:[{value:"Redis",id:"redis",children:[]},{value:"PHP-APC",id:"php-apc",children:[]},{value:"Additional Drivers",id:"additional-drivers",children:[]}]},{value:"Environment/Debug Modes",id:"environmentdebug-modes",children:[{value:"Environment",id:"environment",children:[]},{value:"Debug Mode",id:"debug-mode",children:[]}]},{value:"Sessions",id:"sessions",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Queue Driver",id:"queue-driver",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs"),(0,a.kt)("h2",{id:"drivers"},"Drivers"),(0,a.kt)("h3",{id:"redis"},"Redis"),(0,a.kt)("p",null,"Installing Redis is one way to enable optimizations. After installing, add to the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"CACHE_DRIVER=redis\n")),(0,a.kt)("h3",{id:"php-apc"},"PHP-APC"),(0,a.kt)("p",null,"PHP-APC needs to be installed server-side (as a PHP extension) for it to be made available. No additional configuration is required on the database driver level."),(0,a.kt)("h3",{id:"additional-drivers"},"Additional Drivers"),(0,a.kt)("p",null,"Any additional drivers supported by Laravel are automatically supported by phpVMS."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"environmentdebug-modes"},"Environment/Debug Modes"),(0,a.kt)("h3",{id:"environment"},"Environment"),(0,a.kt)("p",null,"When going live, this should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"production"),". By default, it's ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),". Change this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"APP_ENV=production\n")),(0,a.kt)("h3",{id:"debug-mode"},"Debug Mode"),(0,a.kt)("p",null,"This adjusts the logging level, making it more verbose. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", and should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," when you're live/in-production."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"APP_DEBUG=true\nDEBUG_TOOLBAR=false\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sessions"},"Sessions"),(0,a.kt)("p",null,"Sessions store the logged in users and other information. By default, they're stored on disk."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The Redis store is recommended if you have access to it"))),(0,a.kt)("h4",{id:"redis-1"},"Redis"),(0,a.kt)("p",null,"Sessions can be saved in PHP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"SESSION_DRIVER=redis\n")),(0,a.kt)("h4",{id:"php-apc-1"},"PHP APC"),(0,a.kt)("p",null,"Sessions can also be saved in PHP."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"SESSION_DRIVER=apc\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"caching"},"Caching"),(0,a.kt)("p",null,"By default, caching is disabled."),(0,a.kt)("h4",{id:"file"},"File"),(0,a.kt)("p",null,"You can cache to flat files, instead of hitting the database constantly. These will be stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"storage/framework/cache")," folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"CACHE_DRIVER=file\n")),(0,a.kt)("h4",{id:"redis-2"},"Redis"),(0,a.kt)("p",null,"Instead of using PHP APC, you can also use Redis for caching"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"CACHE_DRIVER=redis\n")),(0,a.kt)("h4",{id:"php-apc-2"},"PHP APC"),(0,a.kt)("p",null,"This doesn't require any configuration on the server side"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"CACHE_DRIVER=apc\n")),(0,a.kt)("h4",{id:"other-drivers"},"Other drivers"),(0,a.kt)("p",null,"You can see the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/cache.php")," file for the other available drivers (memcached, redis, etc)"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"queue-driver"},"Queue Driver"),(0,a.kt)("p",null,"phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"sync"),", which means the tasks are done in-line. This could be useful if you're running a high-traffic VA and on your own VPS."),(0,a.kt)("p",null,"If you're running into performance issues, try changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"QUEUE_DRIVER")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," (probably the easiest option), or another queue driver option (look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/queue.php")," for available options)"),(0,a.kt)("h4",{id:"database-driver"},"Database Driver"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"QUEUE_DRIVER=database\n")),(0,a.kt)("h4",{id:"redis-driver"},"Redis Driver"),(0,a.kt)("p",null,"If you have Redis installed, you can use that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="env.php"',title:'"env.php"'},"QUEUE_DRIVER=redis\n")))}c.isMDXComponent=!0}}]);