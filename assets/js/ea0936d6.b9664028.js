"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[9845],{9396:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=i(4848),o=i(8453);const s={id:"backups",title:"Backups",sidebar_title:"Backups"},t=void 0,c={id:"config/backups",title:"Backups",description:"phpVMS uses spatie/laravel-backup to perform backups. By default, this feature is disabled, but you can activate it if you want to create backups of your files and database.",source:"@site/docs/config/backups.md",sourceDirName:"config",slug:"/config/backups",permalink:"/config/backups",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/config/backups.md",tags:[],version:"current",frontMatter:{id:"backups",title:"Backups",sidebar_title:"Backups"},sidebar:"docs",previous:{title:"Notifications",permalink:"/config/notifications"},next:{title:"Discord",permalink:"/oauth/discord"}},r={},l=[{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Notifications",id:"notifications",level:3},{value:"Disks",id:"disks",level:3},{value:"Backup Retention Configuration",id:"backup-retention-configuration",level:3},{value:"Encryption",id:"encryption",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["phpVMS uses ",(0,a.jsx)(n.a,{href:"https://github.com/spatie/laravel-backup",children:(0,a.jsx)(n.code,{children:"spatie/laravel-backup"})})," to perform backups. By default, this feature is disabled, but you can activate it if you want to create backups of your files and database."]}),"\n",(0,a.jsx)(n.p,{children:"Backups are scheduled nightly, and an older backup is removed, ensuring you have multiple backups available (e.g., last night's, the one before, etc.)."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Backups can consume up to 5GB of disk space."})}),"\n",(0,a.jsx)(n.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["With this configuration, a backup will be added to the ",(0,a.jsx)(n.code,{children:"storage/app/{yourApplicationName}"})," folder every day. You will receive a notification in case of failure at the email address you specify."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_ENABLED=true\nBACKUP_NOTIFICATIONS_MAIL_TO=yourEmail@example.com\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For this feature to work, you need to have email configured (see ",(0,a.jsx)(n.a,{href:"/config/email",children:"here"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,a.jsx)(n.h3,{id:"notifications",children:"Notifications"}),"\n",(0,a.jsx)(n.p,{children:"By default, only failure notifications are sent via email. You can choose to receive success notifications as well and send them to Discord."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_FAILED_NOTIFICATIONS_CHANNELS=mail\nBACKUP_SUCCEED_NOTIFICATIONS_CHANNELS=mail,discord\n# The following line shouldn't be added again if you already added it in the basic configuration\nBACKUP_NOTIFICATIONS_MAIL_TO=yourEmail@example.com\nBACKUP_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you choose the ",(0,a.jsx)(n.code,{children:"mail"})," channel, you need to configure ",(0,a.jsx)(n.code,{children:"BACKUP_NOTIFICATIONS_MAIL_TO"})," with the email where you want to receive notifications."]}),"\n",(0,a.jsxs)(n.p,{children:["If you choose the ",(0,a.jsx)(n.code,{children:"discord"})," channel, you need to configure ",(0,a.jsx)(n.code,{children:"BACKUP_DISCORD_WEBHOOK_URL"})," with the webhook URL where you want to receive notifications. See ",(0,a.jsx)(n.a,{href:"/config/notifications#discord",children:"here"})," to create a webhook."]}),"\n",(0,a.jsx)(n.h3,{id:"disks",children:"Disks"}),"\n",(0,a.jsxs)(n.p,{children:["By default, backups are only made on the local disk corresponding to the ",(0,a.jsx)(n.code,{children:"/storage/app/{yourApplicationName}"})," folder. You can add other disks to send your backups."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_DISKS=local,r2\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To use a remote disk like Amazon S3, CloudFlare R2 or SFTP, you must configure the details in ",(0,a.jsx)(n.code,{children:".env"})," properly. By default phpVMS v7 supports Amazon S3, CloudFlare R2 and SFTP. As an example; To use CloudFlare R2, a bucket should be configured in your account along with an S3 compatible API and below details should be in your ",(0,a.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"CLOUDFLARE_R2_BUCKET=''\nCLOUDFLARE_R2_ENDPOINT=''\nCLOUDFLARE_R2_ACCESS_KEY_ID=''\nCLOUDFLARE_R2_SECRET_ACCESS_KEY=''\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Also it is possible to add more disks to support different file systems, you need to create the disk in ",(0,a.jsx)(n.code,{children:"config/filesystems.php"}),". Examples of configuring disks can be found in ",(0,a.jsx)(n.a,{href:"https://laravel.com/docs/10.x/filesystem#driver-prerequisites",children:"Laravel Documents"})," and other online sources."]}),"\n",(0,a.jsx)(n.h3,{id:"backup-retention-configuration",children:"Backup Retention Configuration"}),"\n",(0,a.jsx)(n.p,{children:"By default, phpVMS keeps backups for the last 7 days and retains a maximum of 5000 MB of backup data. You can adjust these settings to customize the retention period and maximum size."}),"\n",(0,a.jsxs)(n.p,{children:["To change the number of days for which backups are kept, set the ",(0,a.jsx)(n.code,{children:"BACKUP_MAX_DAYS"})," variable in your ",(0,a.jsx)(n.code,{children:".env"})," file. For example, to keep backups for 3 days, add the following line:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_MAX_DAYS=3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To change the maximum size of backups retained, set the ",(0,a.jsx)(n.code,{children:"BACKUP_MAX_SIZE"})," variable in your ",(0,a.jsx)(n.code,{children:".env"})," file. The size is specified in megabytes. For example, to retain backups up to 10000 MB in size, add the following line:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_MAX_SIZE=10000\n"})}),"\n",(0,a.jsx)(n.h3,{id:"encryption",children:"Encryption"}),"\n",(0,a.jsx)(n.p,{children:"You can encrypt your backups with AES256 and a password."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",metastring:'title=".env"',children:"BACKUP_ARCHIVE_PASSWORD=yourPassword\n"})}),"\n",(0,a.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var a=i(6540);const o={},s=a.createContext(o);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);