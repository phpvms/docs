"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[7815],{8032:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});a(6540);var t=a(3855),l=a(7006),s=a(4848);function o(e){var n=e.pluginId,a=e.pluginInstanceContent;return(0,s.jsxs)("section",{style:{marginBottom:30},children:[(0,s.jsx)("code",{children:n}),(0,s.jsx)(l.A,{src:a,collapseDepth:2})]})}function c(e){var n=e.pluginName,a=e.pluginContent;return(0,s.jsxs)("section",{style:{marginBottom:60},children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("div",{children:Object.entries(a).filter((function(e){return!!e[1]})).map((function(e){var n=e[0],a=e[1];return(0,s.jsx)(o,{pluginId:n,pluginInstanceContent:a},n)}))})]})}function r(e){var n=e.allContent;return(0,s.jsxs)(t.A,{children:[(0,s.jsx)("h2",{children:"Plugin content"}),(0,s.jsx)("div",{children:Object.entries(n).filter((function(e){var n=e[1];return Object.values(n).some((function(e){return!!e}))})).map((function(e){var n=e[0],a=e[1];return(0,s.jsx)(c,{pluginName:n,pluginContent:a},n)}))})]})}},7006:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(6540);const l=e=>!!e&&e instanceof Date;let s=1;const o=()=>s++;function c(e){let{field:n,value:a,data:l,lastElement:s,openBracket:c,closeBracket:r,level:i,style:u,shouldExpandNode:d,clickToExpandNode:m}=e;const v=(0,t.useRef)(!1),[b,f,h]=function(e){const[n,a]=(0,t.useState)(e());return[n,()=>a((e=>!e)),a]}((()=>d(i,a,n)));(0,t.useEffect)((()=>{v.current?h(d(i,a,n)):v.current=!0}),[d]);const x=b?u.collapseIcon:u.expandIcon,_=b?"collapse JSON":"expand JSON",E=function(){const e=(0,t.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${o()}:`),e.current}(),g=i+1,N=l.length-1,k=e=>{" "===e.key&&(e.preventDefault(),f())};return(0,t.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,t.createElement)("span",{className:x,onClick:f,onKeyDown:k,role:"button",tabIndex:0,"aria-label":_,"aria-expanded":b,"aria-controls":b?E:void 0}),n&&(m?(0,t.createElement)("span",{className:u.clickableLabel,onClick:f,onKeyDown:k,role:"button",tabIndex:-1},n,":"):(0,t.createElement)("span",{className:u.label},n,":")),(0,t.createElement)("span",{className:u.punctuation},c),b?(0,t.createElement)("div",{id:E},l.map(((e,n)=>(0,t.createElement)(p,{key:e[0]||n,field:e[0],value:e[1],style:u,lastElement:n===N,level:g,shouldExpandNode:d,clickToExpandNode:m})))):(0,t.createElement)("span",{className:u.collapsedContent,onClick:f,onKeyDown:k,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":_,"aria-expanded":b}),(0,t.createElement)("span",{className:u.punctuation},r),!s&&(0,t.createElement)("span",{className:u.punctuation},","))}function r(e){let{field:n,openBracket:a,closeBracket:l,lastElement:s,style:o}=e;return(0,t.createElement)("div",{className:o.basicChildStyle,role:"listitem"},n&&(0,t.createElement)("span",{className:o.label},n,":"),(0,t.createElement)("span",{className:o.punctuation},a),(0,t.createElement)("span",{className:o.punctuation},l),!s&&(0,t.createElement)("span",{className:o.punctuation},","))}function i(e){let{field:n,value:a,style:t,lastElement:l,shouldExpandNode:s,clickToExpandNode:o,level:i}=e;return 0===Object.keys(a).length?r({field:n,openBracket:"{",closeBracket:"}",lastElement:l,style:t}):c({field:n,value:a,lastElement:l||!1,level:i,openBracket:"{",closeBracket:"}",style:t,shouldExpandNode:s,clickToExpandNode:o,data:Object.keys(a).map((e=>[e,a[e]]))})}function u(e){let{field:n,value:a,style:t,lastElement:l,level:s,shouldExpandNode:o,clickToExpandNode:i}=e;return 0===a.length?r({field:n,openBracket:"[",closeBracket:"]",lastElement:l,style:t}):c({field:n,value:a,lastElement:l||!1,level:s,openBracket:"[",closeBracket:"]",style:t,shouldExpandNode:o,clickToExpandNode:i,data:a.map((e=>[void 0,e]))})}function d(e){let{field:n,value:a,style:s,lastElement:o}=e,c=a,r=s.otherValue;var i;return null===a?(c="null",r=s.nullValue):void 0===a?(c="undefined",r=s.undefinedValue):"string"==typeof(i=a)||i instanceof String?(c=s.noQuotesForStringValues?a:`"${a}"`,r=s.stringValue):(e=>"boolean"==typeof e||e instanceof Boolean)(a)?(c=a?"true":"false",r=s.booleanValue):(e=>"number"==typeof e||e instanceof Number)(a)?(c=a.toString(),r=s.numberValue):(e=>"bigint"==typeof e||e instanceof BigInt)(a)?(c=`${a.toString()}n`,r=s.numberValue):c=l(a)?a.toISOString():a.toString(),""===n&&(n='""'),(0,t.createElement)("div",{className:s.basicChildStyle,role:"listitem"},n&&(0,t.createElement)("span",{className:s.label},n,":"),(0,t.createElement)("span",{className:r},c),!o&&(0,t.createElement)("span",{className:s.punctuation},","))}function p(e){const n=e.value;return a=n,Array.isArray(a)?(0,t.createElement)(u,Object.assign({},e)):(e=>e instanceof Object&&null!==e)(n)&&!l(n)?(0,t.createElement)(i,Object.assign({},e)):(0,t.createElement)(d,Object.assign({},e));var a}var m="_2bkNM";const v={container:"_2IvMF _GzYRV",basicChildStyle:m,label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},b=()=>!0,f=e=>{let{data:n,style:a=v,shouldExpandNode:l=b,clickToExpandNode:s=!1}=e;return(0,t.createElement)("div",{className:a.container},(0,t.createElement)(p,{value:n,style:a,lastElement:!0,level:0,shouldExpandNode:l,clickToExpandNode:s}))},h="containerParaiso_cQJv",x="basicElementParaiso_QZsA",_="labelParaiso_wRN4",E="nullValueParaiso_AoA7",g="undefinedValueParaiso_FhTI",N="stringValueParaiso_V3BI",k="booleanValueParaiso_DtTx",y="numberValueParaiso_QJS7",j="otherValueParaiso_LEJn",V="punctuationParaiso_IgdH",I="expandIconParaiso_FXv1",C="collapseIconParaiso_vUhq",S="collapseContentParaiso_r7rr";var B=a(4848),P={clickableLabel:v.clickableLabel,noQuotesForStringValues:!1,container:h,basicChildStyle:x,label:_,nullValue:E,undefinedValue:g,stringValue:N,booleanValue:k,numberValue:y,otherValue:j,punctuation:V,collapseIcon:C,expandIcon:I,collapsedContent:S};function A(e){var n=e.src,a=e.collapseDepth;return(0,B.jsx)(f,{data:n,shouldExpandNode:function(e,n){return Array.isArray(n)?n.length<5:void 0!==a&&e<a},style:P})}},3855:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var t=a(1141),l=a(4783);const s={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var o=a(4848);function c(e){var n=e.to,a=e.children;return(0,o.jsx)(l.A,{className:s.navlink,isNavLink:!0,to:n,exact:!0,activeStyle:{backgroundColor:"#363739"},children:a})}function r(e){var n=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.A,{children:[(0,o.jsx)("html",{lang:"en"}),(0,o.jsx)("title",{children:"Docusaurus debug panel"}),(0,o.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("nav",{className:s.nav,children:[(0,o.jsx)(c,{to:"/__docusaurus/debug",children:"Config"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/content",children:"Content"}),(0,o.jsx)(c,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,o.jsx)("main",{className:s.container,children:n})]})]})}}}]);