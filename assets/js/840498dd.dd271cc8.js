"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[7628],{1444:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"developers/awards","title":"Awards","description":"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an Award plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same Award class for multiple awards.","source":"@site/docs/developers/awards.md","sourceDirName":"developers","slug":"/developers/awards","permalink":"/developers/awards","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/developers/awards.md","tags":[],"version":"current","frontMatter":{"id":"awards","title":"Awards"},"sidebar":"docs","previous":{"title":"Addons","permalink":"/developers/addons"},"next":{"title":"Overview","permalink":"/api/overview"}}');var r=n(4848),t=n(8453);const i={id:"awards",title:"Awards"},d=void 0,l={},o=[{value:"Adding an Award",id:"adding-an-award",level:2},{value:"Award Plugin Structure",id:"award-plugin-structure",level:2},{value:"Award Class",id:"award-class",level:3},{value:"Parameter passed",id:"parameter-passed",level:4},{value:"Accessing information",id:"accessing-information",level:4}];function c(e){const a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an ",(0,r.jsx)(a.code,{children:"Award"})," plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same ",(0,r.jsx)(a.code,{children:"Award"})," class for multiple awards."]}),"\n",(0,r.jsxs)(a.p,{children:["All of the awards are run and scanned on the ",(0,r.jsx)(a.code,{children:"UserStatsChanged"})," event, so when a PIREP is accepted, or other properties for the user are changed (e.g, the number of flights, flight hours, etc). The user being scanned is passed in as the ",(0,r.jsx)(a.code,{children:"$user"})," property."]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"adding-an-award",children:"Adding an Award"}),"\n",(0,r.jsx)(a.p,{children:"An award consists of two parts:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"An award plugin"}),"\n",(0,r.jsx)(a.li,{children:"The award link"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"The award link is created in the admin panel, linking an award to a plugin. The plugin allows for advanced, reusable plugins and can be as complex or as simple as you like. To create an award from a plugin, view the awards page:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(9666).A+"",width:"640",height:"309"})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"award-plugin-structure",children:"Award Plugin Structure"}),"\n",(0,r.jsx)(a.p,{children:"The award class needs to be placed in either the main Awards directory, or in a module, which can then be distributed as a full package."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:"modules/Awards"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.code,{children:"modules/{YOUR_MODULE}/Awards"})}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"award-class",children:"Award Class"}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"modules/Awards/PilotFlightAwards.php"})," is a fully-commented example"]})}),"\n",(0,r.jsx)(a.p,{children:"The Award class basically looks like this:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-php",children:"<?php\n\nnamespace Modules\\Awards;\n\nuse App\\Contracts\\Award;\n\n/**\n * The Award needs to extend the AwardInterface class. It's abstract\n * so if check() isn't implemented, it'll throw an error\n */\nclass MyAward extends Award\n{\n    // The name of this award that shows in the Award class dropdown\n    public $name = 'My Award';\n    \n    // If this award is selected in the dropdown, this description is shown\n    // to the user to tell them what the parameter is\n    public $param_description = 'Describe what the parameter is';\n    \n    /**\n     * This method needs to be implemented\n     * @param null $parameter Optional parameters that are passed in from the UI\n     */\n    public function check($parameter = null): bool\n    {        \n        if(!$parameter) {\n            // Set $parameter to some good default\n        }\n        \n        // Return true if the award should be awarded\n        return true;\n    }\n}\n"})}),"\n",(0,r.jsx)(a.h4,{id:"parameter-passed",children:"Parameter passed"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"$parameter"})," is the value that is set in the Award row in the admin panel. It's optional, so it might be good for you to set a default if it's null. An example could be the number of flights, so you can use the same ",(0,r.jsx)(a.code,{children:"Award"})," class for different types of awards."]}),"\n",(0,r.jsx)(a.h4,{id:"accessing-information",children:"Accessing information"}),"\n",(0,r.jsxs)(a.p,{children:["Your Award class, in the ",(0,r.jsx)(a.code,{children:"check($parameter)"})," function, has access the class property called ",(0,r.jsx)(a.code,{children:"$this->user"}),". For example, if you want to see the user's flights, or if you wanted to have an award for a low landing rate:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-php",children:"// ...\n// In the Award row in the admin, $landing_rate might be set to 100\n// This check will get called when a PIREP is accepted, so you can \n// have access to the user's last PIREP\npublic function check($landing_rate = null): bool\n{\n    // Have the default landing rate if it hasn't been set in the admin\n    // It's best to make sure you set a default value if you're using it\n    if(!$landing_rate) {\n        $landing_rate = 200;\n    }\n    \n    if($this->user->last_pirep->landing_rate <= (int) $landing_rate) {\n        return true;\n    }\n    \n    return false;\n}\n// ...\n"})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9666:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/admin-awards-98a29b5a4476a3d09d6896080d9f3a12.png"},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>d});var s=n(6540);const r={},t=s.createContext(r);function i(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);