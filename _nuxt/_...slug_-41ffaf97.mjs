import{v as E,d as N,u as R,r as T,E as D,F as V,g as q,x as s,C as n,G as o,H as u,I as y,J as m,D as w,z as h,_ as M,K as O,L as j,M as F,N as H,B as U,O as z}from"./entry-726e0fa3.mjs";import{u as G}from"./asyncData-84c087a4.mjs";import{q as J}from"./query-47eedb59.mjs";import{u as A}from"./useSeo-803aba4a.mjs";import"./json-fa66e949.mjs";import"./utils-93b846e0.mjs";const K=N({__name:"[...slug]",async setup(d,{expose:b}){b();let c,a;const i=R(),x=T(null),{data:t}=([c,a]=D(()=>G(i.path,()=>J(i.path).findOne())),c=await c,a(),c);t&&t.value?A({title:t.value.title,description:t.value.description,image:"",type:t.value.section,location:i.path,lang:t.value.language,publishedAt:t.value.date,tags:t.value.tags}):A({title:"Not found",description:"This blog couldn't be found",image:"",type:"Article",location:i.path});function r(){if(t.value){let e=Array.from(x.value.querySelectorAll("li"));for(const[_,l]of e.entries()){let v=l.getAttribute("name").split("/")[1],L=document.getElementById(v);if(L){let g=L.getBoundingClientRect(),S=e[_+1],f=null;if(S){let I=S.getAttribute("name").split("/")[1],k=document.getElementById(I),C=null;k?(C=k.getBoundingClientRect(),f=C.top):f=null}g.top>=0&&innerHeight-g.bottom>0||g.top<=0&&f&&f>0?l.classList.add("active"):l.classList.remove("active")}}}}V(()=>{window.addEventListener("scroll",r),r()}),q(()=>{window.removeEventListener("scroll",r)});const p={route:i,toc:x,data:t,handleScroll:r};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),B=d=>(F("data-v-35e40f45"),d=d(),H(),d),P={class:"markdown-body col-start-2 col-end-3 row-start-2 row-end-3 relative"},$={class:"flex flex-row py-4 lg:pt-7 <msd:pt-0 justify-between"},Q={class:"flex flex-row"},W={class:"mr-4"},X={key:0},Y=["datetime"],Z=B(()=>o("div",{class:"flex"},[o("h1",null,"This post doesn't exist")],-1)),ee=B(()=>o("div",{class:"flex"},[o("h1",null,"This post doesn't exist")],-1)),te={ref:"toc",class:"col-start-3 col-end-4 row-start-2 row-end-3"},oe={class:"m-12 top-12 sticky mx-2rem min-w-44 <sxl:hidden"},se=["name"],ne=["href"],ae={key:0},le=["name"],ie=["href"],re={key:1,class:"empty-array-message"};function de(d,b,c,a,i,x){const t=U,r=z,p=M;return a.data?(s(),n(u,{key:0},[o("article",P,[o("div",$,[o("div",Q,[(s(!0),n(u,null,y(a.data.tags,(e,_)=>(s(),n("div",W,[w(t,{to:`/blog?tags=${e}`},{default:h(()=>[_==0?(s(),n("strong",X,m(e),1)):(s(),n(u,{key:1},[O(m(e),1)],64))]),_:2},1032,["to"])]))),256))]),o("time",{datetime:a.data.date},m(new Date(a.data.date).toDateString()),9,Y)]),w(p,{value:a.data},{default:h(()=>[w(r,{value:a.data},null,8,["value"])]),"not-found":h(()=>[Z]),empty:h(()=>[ee]),_:1},8,["value"])]),o("aside",te,[o("ul",oe,[(s(!0),n(u,null,y(a.data.body.toc.links,(e,_)=>(s(),n("li",{name:"toc/"+e.id,key:_+e.text},[o("a",{href:`#${e.id}`},m(e.text),9,ne),e.children?(s(),n("ul",ae,[(s(!0),n(u,null,y(e.children,(l,v)=>(s(),n("li",{name:"toc/"+l.id,key:v+l.text,class:"ml-4"},[o("a",{href:`#${l.id}`},m(l.text),9,ie)],8,le))),128))])):j("",!0)],8,se))),128))])],512)],64)):(s(),n("div",re," This post doesn't exist "))}var he=E(K,[["render",de],["__scopeId","data-v-35e40f45"]]);export{he as default};
