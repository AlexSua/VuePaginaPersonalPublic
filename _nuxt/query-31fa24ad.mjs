var m=Object.defineProperty,l=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var y=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))d.call(e,t)&&y(r,t,e[t]);if(w)for(var t of w(e))k.call(e,t)&&y(r,t,e[t]);return r},u=(r,e)=>l(r,g(e));import{B as S,C as $,D as j}from"./entry-5679079d.mjs";import{h as T,j as q,u as C}from"./json-7fc8b91b.mjs";import{w as A}from"./utils-b48226b8.mjs";const s=r=>Array.isArray(r)?r:r?[r]:[],x=["sort","where","only","without"],c=(r,e)=>{const t=i({},e);for(const n of x)t[n]&&(t[n]=s(t[n]));const o=(n,h=p=>p)=>(...p)=>(t[n]=h(...p),a),a={params:()=>Object.freeze(t),only:o("only",s),without:o("without",s),where:o("where",n=>[...s(t.where),n]),sort:o("sort",n=>[...s(t.sort),...s(n)]),limit:o("limit",n=>parseInt(String(n),10)),skip:o("skip",n=>parseInt(String(n),10)),findOne:()=>r(u(i({},t),{first:!0})),find:()=>r(t),findSurround:(n,h)=>r(u(i({},t),{surround:i({query:n},h)})),locale:n=>a.where({_locale:n})};return a},f=r=>{const e=A(`/query/${T(r)}`);return $fetch(e,{method:"GET",responseType:"json",params:{_params:q(r),previewToken:C("previewToken").value}})};function O(r,...e){if(typeof r=="string"){let t=S($(j(r,...e)));return t=t.replace(/[-[\]{}()*+.,^$\s]/g,"\\$&"),c(f).where({_path:new RegExp(`^${t}`)})}return c(f,r)}export{O as q};
