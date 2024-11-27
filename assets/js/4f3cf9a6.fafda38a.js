"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[4685],{2866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"installation/vhost","title":"VHost Configuration","description":"If you\'re configuring your own VPS/webserver, the vhosts should point to the public directory.","source":"@site/docs/installation/vhost.md","sourceDirName":"installation","slug":"/installation/vhost","permalink":"/installation/vhost","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/installation/vhost.md","tags":[],"version":"current","frontMatter":{"id":"vhost","title":"VHost Configuration"},"sidebar":"docs","previous":{"title":"Uploading Files","permalink":"/installation/uploading"},"next":{"title":"Installation","permalink":"/installation/"}}');var i=t(4848),s=t(8453);const r={id:"vhost",title:"VHost Configuration"},a=void 0,l={},c=[{value:"Apache",id:"apache",level:2},{value:"nginx",id:"nginx",level:2},{value:"More details",id:"more-details",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["If you're configuring your own VPS/webserver, the vhosts should point to the ",(0,i.jsx)(n.code,{children:"public"})," directory."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"These are only example configurations and may require some tweaking, depending on the software versions"})}),"\n",(0,i.jsx)(n.h2,{id:"apache",children:"Apache"}),"\n",(0,i.jsx)(n.p,{children:"If you're using Apache as your webserver, you can use a similiar vhost file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-htaccess",children:'<VirtualHost *:80>\n    ServerAdmin webmaster@localhost\n    ServerName yoursite.com\n    ServerAlias www.yoursite.com\n\n    # Update these paths to the /public folder of phpVMS\n    DocumentRoot /path/to/phpvms/public\n    <Directory "/path/to/phpvms/public">\n           Options FollowSymLinks\n            ReWriteEngine On\n            AllowOverride All\n    </Directory>\n\n    # Example paths to log files\n    ErrorLog /var/log/http/phpvms/error.log\n    CustomLog /var/log/http/phpvms/access.log combined\n</VirtualHost>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"nginx",children:"nginx"}),"\n",(0,i.jsx)(n.p,{children:'If you\'re setting up a VPS with nginx, you can use a similiar vhost configuration. This is the vhost I use on the demo site. This passes the PHP files to the FastCGI PHP handler, as well as enables the short, "friendly" URLS that Laravel requires.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 80 default_server;\n    server_name phpvms.test;\n\n    access_log /var/log/nginx/access.log;\n    error_log /var/log/nginx/error.log;\n\n    # The vhost root should point to the /public directory of phpVMS\n    root /var/www/public;\n    index index.php index.html index.htm;\n\n    location / {\n         try_files $uri $uri/ /index.php$is_args$args;\n    }\n\n    location ~ \\.php$ {\n        try_files $uri =404;\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass 127.0.0.1:9000; # THIS DEPENDS ON YOUR SERVER AND MIGHT NEED TO CHANGE\n        fastcgi_index index.php;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"more-details",children:"More details"}),"\n",(0,i.jsxs)(n.p,{children:["For more information, view the ",(0,i.jsx)(n.a,{href:"https://laravel.com/docs/9.x/deployment#server-configuration",children:"Laravel Web Server Configuration Docs"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);