import{_ as B,a as T}from"./Navegacion-ba116231.mjs";import{Y as N,Z as y,v as M,d as $,x as n,C as i,u as j,S as O,r as b,f as P,c as R,w as V,F as z,$ as E,G as o,D as c,H as S,J as p,z as m,W as w,B as F,K as L,a0 as A,y as D,a1 as G,a2 as H}from"./entry-726e0fa3.mjs";const h=()=>N("dark-mode",()=>{{let t=y("dark-mode");return!(t&&t=="false")}}),I=$({__name:"DarkModeSwitcher",setup(t,{expose:d}){d();const a=h();function e(){a.value?a.value=!1:a.value=!0}const r={darkmode:a,switchDarkMode:e};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),J={class:"up left"};function K(t,d,a,e,r,_){return n(),i("div",J,[e.darkmode?(n(),i("i",{key:0,onClick:e.switchDarkMode,class:"pi pi-moon text-[2.23rem]"})):(n(),i("i",{key:1,onClick:e.switchDarkMode,class:"pi pi-sun text-[2.23rem]"}))])}var W=M(I,[["render",K],["__scopeId","data-v-0dca08c5"]]);const Y=$({__name:"blog",props:{siteData:Object},setup(t,{expose:d}){d();const a=t,e=j(),r=O(),_=h(),u=b(!1),s=b(!1),{$bus:l}=P(),f=R(function(){return e.path!="/blog"?[]:["home"]});function g(){s.value=!1,u.value=!0,setTimeout(()=>{l.emit("triggerScroll","")},0),setTimeout(()=>{u.value=!1,s.value=!1},600)}function x(){setTimeout(()=>{s.value=!0},0)}function C(){l.emit("triggerScroll",""),setTimeout(()=>{l.emit("triggerScroll","")},0)}V(_,v=>{y("dark-mode",`${v}`)}),z(()=>{const v=h();console.log(v)});const k={route:e,router:r,darkMode:_,resolved:u,pending:s,$bus:l,props:a,nav_blacklist:f,change_to_resolved:g,change_to_pending:x,after_enter:C,DarkModeSwitcher:W};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}}),Z={class:"title"},q={class:"header-title"},Q={class:"header-subtitle"},U={class:"!relative col-start-2 col-end-3"};function X(t,d,a,e,r,_){const u=T,s=F,l=B,f=E("router-view");return n(),i("div",{class:w(["blog-wrapper",{dark:e.darkMode}])},[o("header",null,[c(e.DarkModeSwitcher),c(u),o("div",Z,[t.$route.path=="/blog"?(n(),i(S,{key:0},[o("h1",null,p(t.$t("blog.header.title")),1),o("h2",null,p(t.$t("blog.header.subtitle")),1)],64)):(n(),i(S,{key:1},[o("div",q,[c(s,{to:"/blog"},{default:m(()=>[L(p(t.$t("blog.header.title")),1)]),_:1})]),o("div",Q,p(t.$t("blog.header.subtitle")),1)],64))]),c(l,{"navigation-id":"blog.navigation",blacklist:e.nav_blacklist},null,8,["blacklist"])]),o("main",null,[o("div",U,[o("div",{class:w(["load-bar-animation",{loaded:e.resolved,pending:e.pending}])},null,2)]),c(f,null,{default:m(({Component:g})=>[c(A,{onBeforeEnter:e.after_enter},{default:m(()=>[(n(),D(H,{onPending:e.change_to_pending,onResolve:e.change_to_resolved},{default:m(()=>[(n(),D(G(g),{key:t.$route.path}))]),_:2},1024))]),_:2},1024)]),_:1})])],2)}var oe=M(Y,[["render",X]]);export{oe as default};
