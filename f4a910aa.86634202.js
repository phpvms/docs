(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(84)),o={id:"building-assets",title:"Building Assets"},s={unversionedId:"customize/building-assets",id:"customize/building-assets",isDocsHomePage:!1,title:"Building Assets",description:"The default CSS/Javascript is built and packaged using webpack.",source:"@site/docs/customize/building-assets.md",permalink:"/customize/building-assets",editUrl:"https://github.com/phpvms/docs/tree/master/docs/customize/building-assets.md",sidebar:"someSidebar",previous:{title:"Theming",permalink:"/customize/theming"},next:{title:"Environment Configuration",permalink:"/developers/environment"}},l=[{value:"Required Tools",id:"required-tools",children:[]},{value:"Building CSS",id:"building-css",children:[]},{value:"Building JS",id:"building-js",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The default CSS/Javascript is built and packaged using ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack"),"."),Object(i.a)("h2",{id:"required-tools"},"Required Tools"),Object(i.a)("p",null,"nodejs and yarn are required to build. Follow the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"instructions for your platform")," to install ",Object(i.a)("inlineCode",{parentName:"p"},"nodejs")," and then install ",Object(i.a)("inlineCode",{parentName:"p"},"yarn"),". After installing it, run the following in your phpVMS folder (the same directory as the ",Object(i.a)("inlineCode",{parentName:"p"},"package.json")," file). This installs webpack and the associated dependencies into ",Object(i.a)("inlineCode",{parentName:"p"},"node_modules")),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn install\n")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"building-css"},"Building CSS"),Object(i.a)("p",null,"For the frontend and backend, the CSS is built from SASS templates, which are based on bootstrap, with some pre-built templates."),Object(i.a)("p",null,"The frontend template uses Bootstrap 4 built using ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://demos.creative-tim.com/now-ui-kit/index.html"}),"now-ui"),"; the SASS is located in ",Object(i.a)("inlineCode",{parentName:"p"},"resources/sass/now-ui"),"."),Object(i.a)("p",null,"The backend template is built using Bootstrap 3, with the template being based on ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.creative-tim.com/product/paper-dashboard"}),"paper-dashboard"),"; the SASS files are located in ",Object(i.a)("inlineCode",{parentName:"p"},"resources/sass/admin"),"."),Object(i.a)("hr",null),Object(i.a)("h2",{id:"building-js"},"Building JS"),Object(i.a)("p",null,"To update the Javascript files (for example, if you update the livemap file, etc), you need to rebuild the JS files:"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"yarn run production\n")),Object(i.a)("p",null,"Then reupload the files from ",Object(i.a)("inlineCode",{parentName:"p"},"public/assets")))}p.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);