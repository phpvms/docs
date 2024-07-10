"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[1526],{3964:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var o=s(4848),i=s(8453);const n={id:"discord",title:"Discord",sidebar_title:"Discord"},c=void 0,d={id:"oauth/discord",title:"Discord",description:"First, you need to create a developer application on the Discord website. If you have already created this application to use the rich presence of vmsACARS, you can use the same one.",source:"@site/docs/oauth/discord.md",sourceDirName:"oauth",slug:"/oauth/discord",permalink:"/oauth/discord",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/oauth/discord.md",tags:[],version:"current",frontMatter:{id:"discord",title:"Discord",sidebar_title:"Discord"},sidebar:"docs",previous:{title:"Backups",permalink:"/config/backups"},next:{title:"IVAO",permalink:"/oauth/ivao"}},r={},a=[{value:"Sending Private Messages",id:"sending-private-messages",level:2},{value:"Customizing scopes",id:"customizing-scopes",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["First, you need to ",(0,o.jsx)(t.a,{href:"https://discord.com/developers/applications",children:"create a developer application"})," on the Discord website. If you have already created this application to use the rich presence of vmsACARS, you can use the same one."]}),"\n",(0,o.jsxs)(t.p,{children:["Next, go to OAuth2 > General. Copy the client ID and client secret to be used in the configuration later. Additionally, you need to add a redirect; the URL to add is ",(0,o.jsx)(t.code,{children:"https://yourdomain.com/oauth/discord/callback"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(7655).A+"",width:"1279",height:"548"})}),"\n",(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.code,{children:".env"})," file, add the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:'title=".env"',children:"DISCORD_OAUTH_ENABLED=true\nDISCORD_CLIENT_ID={your_client_id_copied_before}\nDISCORD_CLIENT_SECRET={your_client_secret_copied_before}\n"})}),"\n",(0,o.jsx)(t.p,{children:'Now, your users can link their Discord account to their phpVMS account and use their Discord account to log in. The link between the two accounts is automatically established when clicking the "Login with Discord" button on the login page. However, if the email address of the Discord account is different from the email address of the phpVMS account, it must be done manually on the profile page.'}),"\n",(0,o.jsx)(t.h2,{id:"sending-private-messages",children:"Sending Private Messages"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to send private message notifications to your users (development still in progress), you need to create a Discord bot in the bot section of your Discord application and copy the token. ",(0,o.jsx)("br",{}),"\nIf this option is not enabled, the ",(0,o.jsx)(t.code,{children:"discord_private_channel_id"})," field will not be filled. This field contains a unique discussion ID between the bot and the user, so it is imperative to have a bot to fill it."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:s(803).A+"",width:"1387",height:"599"})}),"\n",(0,o.jsxs)(t.p,{children:["Place the token in the ",(0,o.jsx)(t.code,{children:".env"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:'title=".env"',children:"DISCORD_BOT_TOKEN={your_bot_token_copied_before}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"customizing-scopes",children:"Customizing scopes"}),"\n",(0,o.jsxs)(t.p,{children:["You can add scopes to the OAuth request in addition to the default scopes by adding your scopes to the ",(0,o.jsx)(t.code,{children:".env"})," file, separated by commas.\nSee ",(0,o.jsx)(t.a,{href:"https://discord.com/developers/docs/topics/oauth2",children:"Discord Scopes List"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",metastring:'title=".env"',children:"DISCORD_SCOPES=scope1,scope2\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},803:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/create-discord-bot-ca86bdcff6df0c8ea17ad4614983431c.png"},7655:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/create-discord-3e4ff6daa49cdb7fe3bcdcfa9910a996.png"},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var o=s(6540);const i={},n=o.createContext(i);function c(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);