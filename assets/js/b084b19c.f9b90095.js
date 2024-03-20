"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[1422],{1011:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=n(4848),r=n(8453);const d={id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},t=void 0,l={id:"config/optimizing",title:"Optimizing",description:"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs",source:"@site/docs/config/optimizing.md",sourceDirName:"config",slug:"/config/optimizing",permalink:"/config/optimizing",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/optimizing.md",tags:[],version:"current",frontMatter:{id:"optimizing",title:"Optimizing",sidebar_title:"Optimizing"},sidebar:"docs",previous:{title:"Email",permalink:"/config/email"},next:{title:"Notifications",permalink:"/config/notifications"}},a={},o=[{value:"Drivers",id:"drivers",level:2},{value:"Redis",id:"redis",level:3},{value:"PHP-APC",id:"php-apc",level:3},{value:"Additional Drivers",id:"additional-drivers",level:3},{value:"Environment/Debug Modes",id:"environmentdebug-modes",level:2},{value:"Environment",id:"environment",level:3},{value:"Debug Mode",id:"debug-mode",level:3},{value:"Sessions",id:"sessions",level:2},{value:"Redis",id:"redis-1",level:4},{value:"PHP APC",id:"php-apc-1",level:4},{value:"Caching",id:"caching",level:2},{value:"File",id:"file",level:4},{value:"Redis",id:"redis-2",level:4},{value:"PHP APC",id:"php-apc-2",level:4},{value:"Other drivers",id:"other-drivers",level:4},{value:"Queue Driver",id:"queue-driver",level:2},{value:"Database Driver",id:"database-driver",level:4},{value:"Redis Driver",id:"redis-driver",level:4}];function c(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs"}),"\n",(0,s.jsx)(i.h2,{id:"drivers",children:"Drivers"}),"\n",(0,s.jsx)(i.h3,{id:"redis",children:"Redis"}),"\n",(0,s.jsxs)(i.p,{children:["Installing Redis is one way to enable optimizations. After installing, add to the ",(0,s.jsx)(i.code,{children:"config.php"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"CACHE_DRIVER=redis\n"})}),"\n",(0,s.jsx)(i.h3,{id:"php-apc",children:"PHP-APC"}),"\n",(0,s.jsx)(i.p,{children:"PHP-APC needs to be installed server-side (as a PHP extension) for it to be made available. No additional configuration is required on the database driver level."}),"\n",(0,s.jsx)(i.h3,{id:"additional-drivers",children:"Additional Drivers"}),"\n",(0,s.jsx)(i.p,{children:"Any additional drivers supported by Laravel are automatically supported by phpVMS."}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"environmentdebug-modes",children:"Environment/Debug Modes"}),"\n",(0,s.jsx)(i.h3,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(i.p,{children:["When going live, this should be set to ",(0,s.jsx)(i.code,{children:"production"}),". By default, it's ",(0,s.jsx)(i.code,{children:"dev"}),". Change this:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"APP_ENV=production\n"})}),"\n",(0,s.jsx)(i.h3,{id:"debug-mode",children:"Debug Mode"}),"\n",(0,s.jsxs)(i.p,{children:["This adjusts the logging level, making it more verbose. The default value is ",(0,s.jsx)(i.code,{children:"true"}),", and should be set to ",(0,s.jsx)(i.code,{children:"false"})," when you're live/in-production."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"APP_DEBUG=true\nDEBUG_TOOLBAR=false\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"sessions",children:"Sessions"}),"\n",(0,s.jsx)(i.p,{children:"Sessions store the logged in users and other information. By default, they're stored on disk."}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"The Redis store is recommended if you have access to it"})}),"\n",(0,s.jsx)(i.h4,{id:"redis-1",children:"Redis"}),"\n",(0,s.jsx)(i.p,{children:"Sessions can be saved in PHP."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"SESSION_DRIVER=redis\n"})}),"\n",(0,s.jsx)(i.h4,{id:"php-apc-1",children:"PHP APC"}),"\n",(0,s.jsx)(i.p,{children:"Sessions can also be saved in PHP."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"SESSION_DRIVER=apc\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(i.p,{children:"By default, caching is disabled."}),"\n",(0,s.jsx)(i.h4,{id:"file",children:"File"}),"\n",(0,s.jsxs)(i.p,{children:["You can cache to flat files, instead of hitting the database constantly. These will be stored in the ",(0,s.jsx)(i.code,{children:"storage/framework/cache"})," folder"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"CACHE_DRIVER=file\n"})}),"\n",(0,s.jsx)(i.h4,{id:"redis-2",children:"Redis"}),"\n",(0,s.jsx)(i.p,{children:"Instead of using PHP APC, you can also use Redis for caching"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"CACHE_DRIVER=redis\n"})}),"\n",(0,s.jsx)(i.h4,{id:"php-apc-2",children:"PHP APC"}),"\n",(0,s.jsx)(i.p,{children:"This doesn't require any configuration on the server side"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"CACHE_DRIVER=apc\n"})}),"\n",(0,s.jsx)(i.h4,{id:"other-drivers",children:"Other drivers"}),"\n",(0,s.jsxs)(i.p,{children:["You can see the ",(0,s.jsx)(i.code,{children:"config/cache.php"})," file for the other available drivers (memcached, redis, etc)"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"queue-driver",children:"Queue Driver"}),"\n",(0,s.jsxs)(i.p,{children:["phpVMS uses asyncronous queues for several tasks, including sending emails and exporting to vaCentral. The default mode is ",(0,s.jsx)(i.code,{children:"sync"}),", which means the tasks are done in-line. This could be useful if you're running a high-traffic VA and on your own VPS."]}),"\n",(0,s.jsxs)(i.p,{children:["If you're running into performance issues, try changing the ",(0,s.jsx)(i.code,{children:"QUEUE_DRIVER"})," to ",(0,s.jsx)(i.code,{children:"database"})," (probably the easiest option), or another queue driver option (look in the ",(0,s.jsx)(i.code,{children:"config/queue.php"})," for available options)"]}),"\n",(0,s.jsx)(i.h4,{id:"database-driver",children:"Database Driver"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"QUEUE_DRIVER=database\n"})}),"\n",(0,s.jsx)(i.h4,{id:"redis-driver",children:"Redis Driver"}),"\n",(0,s.jsx)(i.p,{children:"If you have Redis installed, you can use that:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",metastring:'title=".env"',children:"QUEUE_DRIVER=redis\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>l});var s=n(6540);const r={},d=s.createContext(r);function t(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);