var k=Object.defineProperty,z=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&y(e,n,t[n]);if(u)for(var n of u(t))P.call(t,n)&&y(e,n,t[n]);return e},d=(e,t)=>z(e,O(t));import{P as M,b as U}from"./entry-726e0fa3.mjs";const $={title:"Alejandro Su\xE1rez",siteUrl:"https://alejandrosuarez.eu",description:"The webpage of Alejandro Su\xE1rez",keywords:[],author:{name:"Alejandro Su\xE1rez",description:"I'm <strong>Alejandro Su\xE1rez</strong>",social:{facebook:"",twitter:"",linkedin:"https://www.linkedin.com/in/alejandro-su\xE1rez",instagram:"",youtube:"",github:"https://github.com/AlexSua",twitch:""}}};var x={siteMetadata:$};function J({title:e,description:t,lang:n,location:h,publishedAt:r,updatedAt:a,isArticle:S=!1,tags:i=[],type:f="Article",image:w},p={}){p=c(c({},x.siteMetadata),p);const o=p,m=e?`${e} - ${o.title}`:o.title,s=t||o.description,l=w?`${o.siteUrl}${w}`:null,g=M.resolve(o.siteUrl,h);r&&(r=new Date(r).toISOString()),a&&(a=new Date(a).toISOString());const j=d(c(c(c(d(c({"@context":"https://schema.org/","@type":f,author:{"@type":"Person",name:o.author.name}},i.length>0?{keywords:i.join(", ")}:{}),{headline:m,url:g}),r?{datePublished:r}:{}),a?{dateModified:a}:{}),l?{image:{"@type":"ImageObject",url:l,width:"1000",height:"520"}}:{}),{publisher:{"@type":"Organization",name:o.title},description:s,mainEntityOfPage:{"@type":"WebPage","@id":o.siteUrl}});return U({htmlAttrs:{lang:n},title:m,meta:[{name:"description",content:s},{property:"og:title",content:m},{property:"og:type",content:S?"article":"website"},{property:"og:description",content:s},{property:"og:url",content:g},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:o.author.name},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author.name},{name:"twitter:title",content:m},{name:"twitter:description",content:s},{name:"keywords",content:o.keywords.concat(i).join(", ")},...r?[{name:"article:published_time",content:r}]:[],...a?[{name:"article:modified_time",content:a}]:[],...i.length>0?[...i.map(b=>({name:"article:tag",content:b}))]:[],...i.length>0?[{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:i[0]}]:[],...l?[{property:"og:image",content:l},{name:"twitter:image",content:l}]:[]],script:[{type:"application/ld+json",children:JSON.stringify(j)}]})}export{J as u};
