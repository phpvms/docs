"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[8458],{6722:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"acars/flight","title":"Flight Planning","description":"Setting up your flight","source":"@site/docs/acars/flight.md","sourceDirName":"acars","slug":"/acars/flight","permalink":"/acars/flight","draft":false,"unlisted":false,"editUrl":"https://github.com/phpvms/docs/tree/master/docs/acars/flight.md","tags":[],"version":"current","frontMatter":{"id":"flight","title":"Flight Planning"}}');var r=i(4848),l=i(8453);const s={id:"flight",title:"Flight Planning"},a=void 0,o={},h=[{value:"Setting up your flight",id:"setting-up-your-flight",level:2},{value:"Entering everything manually",id:"entering-everything-manually",level:3},{value:"Flight Search or Bids",id:"flight-search-or-bids",level:3},{value:"Flight Plans",id:"flight-plans",level:3},{value:"Lights and Aircraft Features",id:"lights-and-aircraft-features",level:2}];function c(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"setting-up-your-flight",children:"Setting up your flight"}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to configure flight:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Enter everything manually"}),"\n",(0,r.jsx)(t.li,{children:"Load a flight from the flight search"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"entering-everything-manually",children:"Entering everything manually"}),"\n",(0,r.jsx)(t.p,{children:"This is simple, just type in everything for your flight, referring to your VA site."}),"\n",(0,r.jsx)(t.h3,{id:"flight-search-or-bids",children:"Flight Search or Bids"}),"\n",(0,r.jsx)(t.p,{children:'To load a flight from the search or bids, in the menu, select flight search. If your VA has search enabled, you can click search. If you click on "Bids", it will show your available bids.'}),"\n",(0,r.jsx)(t.p,{children:'If there is a SimBrief flight plan also loaded with the bid from the site, it will show up as "Yes" in that column.'}),"\n",(0,r.jsx)(t.h3,{id:"flight-plans",children:"Flight Plans"}),"\n",(0,r.jsx)(t.p,{children:"In order for the route map to show all of your waypoints, you need to load a flight plan. vmsACARS does not have/contain any navigation information on its own, it's all loaded from a loaded flight plan. The follow flight plan types are supported:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["FSX/P3D (",(0,r.jsx)(t.code,{children:".pln"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["X-Plane (",(0,r.jsx)(t.code,{children:".fms"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["MSFS (",(0,r.jsx)(t.code,{children:".pln"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["Simbrief (",(0,r.jsx)(t.code,{children:".xml"}),', exported from the SimBrief site or the SimBrief Downloader. There is a "phpVMS" flight plan type that\'s available)']}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The routes/navpoints are then loaded from the flight plan, along with the TOD (from MSFS/Simbrief), and filed along with your PIREP."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"lights-and-aircraft-features",children:"Lights and Aircraft Features"}),"\n",(0,r.jsxs)(t.p,{children:["Lights and other features for aircraft may not work on all aircraft, due to the way developers differently implement the on/off switches/flags for these (for example, PMDG implements their lights differently for each aircraft). There is a ",(0,r.jsx)(t.code,{children:"ConfigMap.xml"})," file that can be edited (make sure to create backups before updated - enhancements to this coming soon) which uses the aircraft name/title to determine which offsets (for FSUIPC) or data refs (X-Plane) are used to detect those features."]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);