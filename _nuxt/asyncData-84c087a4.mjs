var C=Object.defineProperty;var p=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(a,n,e)=>n in a?C(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,D=(a,n)=>{for(var e in n||(n={}))P.call(n,e)&&g(a,e,n[e]);if(p)for(var e of p(n))x.call(n,e)&&g(a,e,n[e]);return a};import{i as O,r as c,f as w,o as A,g as _,w as R,j as z,k as B}from"./entry-726e0fa3.mjs";const M=a=>O(a)?a:c(a),j=()=>null;function N(a,n,e={}){var d,h,y,m,v;if(typeof a!="string")throw new TypeError("asyncData key must be a string");if(typeof n!="function")throw new TypeError("asyncData handler must be a function");e=D({server:!0,default:j},e),e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(h=(d=e.lazy)!=null?d:e.defer)!=null?h:!1,e.initialCache=(y=e.initialCache)!=null?y:!0;const r=w(),i=z();if(i&&!i._nuxtOnBeforeMountCbs){const f=i._nuxtOnBeforeMountCbs=[];i&&(A(()=>{f.forEach(s=>{s()}),f.splice(0,f.length)}),_(()=>f.splice(0,f.length)))}const l=()=>e.initialCache&&r.payload.data[a]!==void 0,t={data:M((m=r.payload.data[a])!=null?m:e.default()),pending:c(!l()),error:c((v=r.payload._errors[a])!=null?v:null)};t.refresh=(f={})=>r._asyncDataPromises[a]?r._asyncDataPromises[a]:f._initial&&l()?r.payload.data[a]:(t.pending.value=!0,r._asyncDataPromises[a]=Promise.resolve(n(r)).then(s=>{e.transform&&(s=e.transform(s)),e.pick&&(s=E(s,e.pick)),t.data.value=s,t.error.value=null}).catch(s=>{t.error.value=s,t.data.value=B(e.default())}).finally(()=>{t.pending.value=!1,r.payload.data[a]=t.data.value,t.error.value&&(r.payload._errors[a]=!0),delete r._asyncDataPromises[a]}),r._asyncDataPromises[a]);const u=()=>t.refresh({_initial:!0}),b=e.server!==!1&&r.payload.serverRendered;{b&&r.isHydrating&&a in r.payload.data?t.pending.value=!1:i&&r.payload.serverRendered&&(r.isHydrating||e.lazy)?i._nuxtOnBeforeMountCbs.push(u):u(),e.watch&&R(e.watch,()=>t.refresh());const f=r.hook("app:data:refresh",s=>{if(!s||s.includes(a))return t.refresh()});i&&_(f)}const o=Promise.resolve(r._asyncDataPromises[a]).then(()=>t);return Object.assign(o,t),o}function S(a){const n=a?Array.isArray(a)?a:[a]:void 0;return w().callHook("app:data:refresh",n)}function E(a,n){const e={};for(const r of n)e[r]=a[r];return e}export{S as r,N as u,M as w};
