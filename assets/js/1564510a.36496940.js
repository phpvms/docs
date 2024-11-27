"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[108],{1654:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"installation/uploading","title":"Uploading Files","description":"When uploading the files, you have several options on how to. These mainly apply to shared hosts. For your own server or if you have control over the vhost files, upload/extract the files to your desired location and point the vhost to the /public folder.","source":"@site/docs/installation/uploading.md","sourceDirName":"installation","slug":"/installation/uploading","permalink":"/installation/uploading","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/uploading.md","tags":[],"version":"current","frontMatter":{"id":"uploading","title":"Uploading Files"},"sidebar":"docs","previous":{"title":"Finances","permalink":"/guides/finances"},"next":{"title":"VHost Configuration","permalink":"/installation/vhost"}}');var t=i(4848),s=i(8453);const l={id:"uploading",title:"Uploading Files"},d=void 0,r={},h=[{value:"Option 1: Creating a Subdomain",id:"option-1-creating-a-subdomain",level:2},{value:"Option 2: Copying the public directory",id:"option-2-copying-the-public-directory",level:2},{value:"Option 3: Symlink",id:"option-3-symlink",level:2},{value:"Option 4: Direct Upload (Not Recommended!)",id:"option-4-direct-upload-not-recommended",level:2}];function c(e){const o={admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["When uploading the files, you have several options on how to. These mainly apply to shared hosts. For your own server or if you have control over the vhost files, upload/extract the files to your desired location and point the vhost to the ",(0,t.jsx)(o.code,{children:"/public"})," folder."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:"If you are uploading to a shared host or to cPanel, chose one of the following methods when uploading your files."})}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"option-1-creating-a-subdomain",children:"Option 1: Creating a Subdomain"}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["Creating a subdomain is the easiest and more recommended method, especially for shared hosting. This works well if you have a landing or promo page on your site's main domain, and then a subdomain like ",(0,t.jsx)(o.code,{children:"crew.yourva.com"})," or something similar."]})}),"\n",(0,t.jsxs)(o.p,{children:["Upload phpVMS to a directory with the name of your subdomain, for example, ",(0,t.jsx)(o.code,{children:"demo.vmshost.io"}),". It should be parallel to the ",(0,t.jsx)(o.code,{children:"public_html"})," folder (as above). In this example, I want to create the subdomain ",(0,t.jsx)(o.code,{children:"demo.vmshost.io"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"First, create a folder to extract phpVMS into:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"/home/youruser\n  demo.vmshost.io < Extract phpvms files into here\n  public_ftp\n  public_html\n"})}),"\n",(0,t.jsx)(o.p,{children:"Next, extract the phpvms files into this folder, so it looks something like:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"/home/youruser\n  /demo.vmshost.io\n    /app\n    /config\n    /public\n    ...\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:i(4111).A+"",width:"320",height:"349"})}),"\n",(0,t.jsxs)(o.p,{children:['Next, create a subdomain cPanel, go to "Subdomains", and create the subdomain. For the "Document Root", enter the path above, with the public folder - ',(0,t.jsx)(o.code,{children:"demo.vmshost.io/public"}),". Usually, cPanel will autocomplete the path to be the subdomain - so just add ",(0,t.jsx)(o.code,{children:"/public"})," to the end of it."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:i(3894).A+"",width:"640",height:"331"})}),"\n",(0,t.jsx)(o.p,{children:"It will look like this:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:i(9753).A+"",width:"640",height:"52"})}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"option-2-copying-the-public-directory",children:"Option 2: Copying the public directory"}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:"Uploading and change the path of the public directory is the recommended method if you're on shared hosting"})}),"\n",(0,t.jsx)(o.p,{children:"This method works well if your main site is going to be phpVMS."}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Download/upload phpVMS into a ",(0,t.jsx)(o.code,{children:"phpvms"})," folder in your home folder. It should look something like:"]}),"\n",(0,t.jsxs)(o.li,{children:["Copy the files from the ",(0,t.jsx)(o.code,{children:"/public"})," folder into the ",(0,t.jsx)(o.code,{children:"public_html"})," folder."]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"/home/youruser\n    phpvms      < Create this folder and upload phpvms into it\n    public_ftp\n    public_html < Upload the files from phpvms/public into\n"})}),"\n",(0,t.jsxs)(o.p,{children:["As long as you named the folder ",(0,t.jsx)(o.code,{children:"phpvms"}),", the ",(0,t.jsx)(o.code,{children:"index.php"})," will autodetect the location of the phpVMS folder."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsxs)(o.p,{children:["Updates/auto-updates won't update the files in the ",(0,t.jsx)(o.code,{children:"/public_html"})," folder, you'll need to update them manually. The other method, the symlink method, is recommended if you have command-line access and are more comfortable creating those types of links."]})}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"option-3-symlink",children:"Option 3: Symlink"}),"\n",(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsx)(o.p,{children:"This is an advanced method and not recommended to use on shared hosts, only do this if you know what you're doing"})}),"\n",(0,t.jsx)(o.p,{children:"This method works well if your main site is going to be phpVMS, and you're not running something like Wordpress. Running phpVMS in a subdirectory isn't recommended (see method 2 instead)."}),"\n",(0,t.jsxs)(o.p,{children:["Download/upload phpVMS into a ",(0,t.jsx)(o.code,{children:"phpvms"})," folder in your home folder. It should look something like:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"/home/youruser\n    phpvms\n    public_ftp\n    public_html\n"})}),"\n",(0,t.jsxs)(o.p,{children:["To make this work properly and be secure, we're going to change the ",(0,t.jsx)(o.code,{children:"public_html"})," directory to point into the phpVMS public directory. Then you can upload files as usual, but phpVMS will be the primary entry point. When you create folder/files in the ",(0,t.jsx)(o.code,{children:"public_html"})," directory, they'll actually get created into the ",(0,t.jsx)(o.code,{children:"phpvms/public"})," folder."]}),"\n",(0,t.jsxs)(o.p,{children:["SSH into your server, symlink the ",(0,t.jsx)(o.code,{children:"public_html"})," folder to point to ",(0,t.jsx)(o.code,{children:"phpvms/public"})," instead:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mv public_html public_html_backup\nln -s phpvms/public/ public_html\n"})}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"option-4-direct-upload-not-recommended",children:"Option 4: Direct Upload (Not Recommended!)"}),"\n",(0,t.jsx)(o.admonition,{type:"warning",children:(0,t.jsx)(o.p,{children:"This method isn't recommended, it could expose some sensitive directories if it isn't setup correctly."})}),"\n",(0,t.jsxs)(o.p,{children:["This method isn't recommended because it can potentially expose your install if the ",(0,t.jsx)(o.code,{children:".htaccess"})," or something isn't correctly configured. Upload the files directly into the ",(0,t.jsx)(o.code,{children:"public_html"})," folder, and make sure the ",(0,t.jsx)(o.code,{children:".htaccess"})," file is active (check with your webhost). This uses the ",(0,t.jsx)(o.code,{children:"public"})," folder directly."]})]})}function a(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3894:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/subdomain-add-c6849f4f4fc599be67a8addeadad087c.png"},4111:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/subdomain-folders-95d93052cb20e4064bf46af45d426472.png"},9753:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/subdomain-view-2b65e50153b2ed93d0cdf07312a592ab.png"},8453:(e,o,i)=>{i.d(o,{R:()=>l,x:()=>d});var n=i(6540);const t={},s=n.createContext(t);function l(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);