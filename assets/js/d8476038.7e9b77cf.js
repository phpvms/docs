"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[247],{9913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>h,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"customize/theming","title":"Theming","description":"The custom theme system is using laravel-theme, which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change.","source":"@site/docs/customize/theming.md","sourceDirName":"customize","slug":"/customize/theming","permalink":"/customize/theming","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/customize/theming.md","tags":[],"version":"current","frontMatter":{"id":"theming","title":"Theming"},"sidebar":"docs","previous":{"title":"Layouts and Template Basics","permalink":"/customize/layouts"},"next":{"title":"Maps and Layouts","permalink":"/customize/maps"}}');var i=n(4848),o=n(8453);const r={id:"theming",title:"Theming"},h=void 0,a={},c=[{value:"Creating a theme",id:"creating-a-theme",level:2},{value:"The Quick Way",id:"the-quick-way",level:3},{value:"New Theme from Scratch",id:"new-theme-from-scratch",level:3},{value:"Creating/copying an existing theme",id:"creatingcopying-an-existing-theme",level:4},{value:"Assets in the public folder",id:"assets-in-the-public-folder",level:4},{value:"Packaging a theme to distribute",id:"packaging-a-theme-to-distribute",level:2},{value:"More resources for themes",id:"more-resources-for-themes",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The custom theme system is using ",(0,i.jsx)(t.a,{href:"https://github.com/igaster/laravel-theme",children:"laravel-theme"}),", which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-theme",children:"Creating a theme"}),"\n",(0,i.jsx)(t.p,{children:"To create a new theme, you can either copy and existing one, or use the command line artisan command to generate one fresh."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"the-quick-way",children:"The Quick Way"}),"\n",(0,i.jsxs)(t.p,{children:["The quick way to create a new theme is to just copy the ",(0,i.jsx)(t.code,{children:"default"})," theme to a new folder, and edit the ",(0,i.jsx)(t.code,{children:"theme.json"})," file:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Copy the ",(0,i.jsx)(t.code,{children:"resources/views/layouts/default"})," into a new folder, e.g, ",(0,i.jsx)(t.code,{children:"resources/views/layouts/mytheme"})]}),"\n",(0,i.jsxs)(t.li,{children:["Edit the ",(0,i.jsx)(t.code,{children:"resources/views/layouts/mytheme/theme.json"})," file, and update the ",(0,i.jsx)(t.code,{children:"name"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to edit only select templates (also recommended), set the ",(0,i.jsx)(t.code,{children:"extends"})," value to ",(0,i.jsx)(t.code,{children:"default"}),". Then you only need to copy over the templates that you modify, instead of all them (this makes it easier to update phpVMS, and you also know what you've modified)."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"new-theme-from-scratch",children:"New Theme from Scratch"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can use ",(0,i.jsx)(t.code,{children:"theme:create"})," command to bootstrap these steps"]})}),"\n",(0,i.jsxs)(t.p,{children:["Into the root of the ",(0,i.jsx)(t.code,{children:"resources/views/layouts/"})," path, create a new folder, with a ",(0,i.jsx)(t.code,{children:"theme.json"})," file. This JSON file serves as the manifest for your theme"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "name"        : "THEME_NAME",\n  "asset-path"  : "ASSET_PATH",\n  "extends"     : "PARENT_THEME"\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["After doing this, copy the files from ",(0,i.jsx)(t.code,{children:"resources/views/layouts/default"})," into the new theme folder."]}),"\n",(0,i.jsx)(t.h4,{id:"creatingcopying-an-existing-theme",children:"Creating/copying an existing theme"}),"\n",(0,i.jsx)(t.p,{children:"Important notes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"THEME_NAME"})," (REQUIRED) is the name of your theme. Can be any string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ASSET_PATH"})," (optional) is relative to public path. You should create this folder too!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"PARENT_THEME"})," (optional) is the name of the parent theme. Set it to ",(0,i.jsx)(t.code,{children:"null"})," if this is a stand-alone theme. If you want to extend an existing theme, place that name there. You can extend the default template and change only the templates you want, by recreating the same structure for the template you want to override."]}),"\n",(0,i.jsxs)(t.li,{children:["You can add any additional configuration into the json file. You may access to your own settings with ",(0,i.jsx)(t.code,{children:"Theme:getSetting('key')"})," & ",(0,i.jsx)(t.code,{children:"Theme:setSetting('key','value')"})," at runtime."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"assets-in-the-public-folder",children:"Assets in the public folder"}),"\n",(0,i.jsxs)(t.p,{children:["While ",(0,i.jsx)(t.code,{children:"laravel-theme"})," has a helper for the ",(0,i.jsx)(t.code,{children:"theme_url"}),", in phpVMS, you should use the ",(0,i.jsx)(t.code,{children:"public_asset()"})," helper function. Since phpVMS can run on both shared and on its own, the public folder path could be different. The ",(0,i.jsx)(t.code,{children:"public_asset()"})," method takes care of that."]}),"\n",(0,i.jsxs)(t.p,{children:["It's recommended you create a new folder for your theme, under ",(0,i.jsx)(t.code,{children:"public/assets"})," (or, ",(0,i.jsx)(t.code,{children:"public_html/assets"}),", depending on how you uploaded your files), and then referring to those assets like:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"echo public_asset('assets/my-theme/img/someimage.png');\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"packaging-a-theme-to-distribute",children:"Packaging a theme to distribute"}),"\n",(0,i.jsx)(t.p,{children:"To distribute a theme, on the command line run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"php artisan theme:package <theme name>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will create a distributable theme package in the ",(0,i.jsx)(t.code,{children:"storage/themes"})," path, which can then be distributed."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"more-resources-for-themes",children:"More resources for themes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The documentation for ",(0,i.jsx)(t.code,{children:"laravel-theme"})," is great for more detailed tricks: ",(0,i.jsx)(t.a,{href:"https://github.com/igaster/laravel-theme/wiki/5.-Setting-the-active-theme",children:"see the documentation here"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>h});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);