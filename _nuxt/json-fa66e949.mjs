var S=Object.defineProperty,x=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(r,i,n)=>i in r?S(r,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[i]=n,p=(r,i)=>{for(var n in i||(i={}))A.call(i,n)&&y(r,n,i[n]);if(h)for(var n of h(i))E.call(i,n)&&y(r,n,i[n]);return r},g=(r,i)=>x(r,b(i));import{w as C,e as T}from"./entry-726e0fa3.mjs";import{w as U}from"./asyncData-84c087a4.mjs";function k(r,i=0){typeof r=="string"&&(r=R(r));let n=0,e=i,t,a;const o=r.length&3,c=r.length-o,s=3432918353,u=461845907;for(;n<c;)t=r[n]&255|(r[++n]&255)<<8|(r[++n]&255)<<16|(r[++n]&255)<<24,++n,t=(t&65535)*s+(((t>>>16)*s&65535)<<16)&4294967295,t=t<<15|t>>>17,t=(t&65535)*u+(((t>>>16)*u&65535)<<16)&4294967295,e^=t,e=e<<13|e>>>19,a=(e&65535)*5+(((e>>>16)*5&65535)<<16)&4294967295,e=(a&65535)+27492+(((a>>>16)+58964&65535)<<16);switch(t=0,o){case 3:t^=(r[n+2]&255)<<16;break;case 2:t^=(r[n+1]&255)<<8;break;case 1:t^=r[n]&255,t=(t&65535)*s+(((t>>>16)*s&65535)<<16)&4294967295,t=t<<15|t>>>17,t=(t&65535)*u+(((t>>>16)*u&65535)<<16)&4294967295,e^=t}return e^=r.length,e^=e>>>16,e=(e&65535)*2246822507+(((e>>>16)*2246822507&65535)<<16)&4294967295,e^=e>>>13,e=(e&65535)*3266489909+(((e>>>16)*3266489909&65535)<<16)&4294967295,e^=e>>>16,e>>>0}function R(r){return new TextEncoder().encode(r)}const N={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function O(r,i={}){i=p(p({},N),i);const n=w(i);return n.dispatch(r),n.toString()}function w(r){const i=[];let n=[];const e=t=>{i.push(t)};return{toString(){return i.join("")},getContext(){return n},dispatch(t){return r.replacer&&(t=r.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){const a=/\[object (.*)\]/i,o=Object.prototype.toString.call(t),c=a.exec(o),s=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let u=null;if((u=n.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(n.push(t),typeof Buffer!="undefined"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")if(this["_"+s])this["_"+s](t);else{if(r.ignoreUnknown)return e("["+s+"]");throw new Error('Unknown object type "'+s+'"')}else{let l=Object.keys(t);return r.unorderedObjects&&(l=l.sort()),r.respectType!==!1&&!m(t)&&l.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(l=l.filter(function(f){return!r.excludeKeys(f)})),e("object:"+l.length+":"),l.forEach(f=>{this.dispatch(f),e(":"),r.excludeValues||this.dispatch(t[f]),e(",")})}},_array(t,a){if(a=typeof a!="undefined"?a:r.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1)return t.forEach(s=>this.dispatch(s));const o=[],c=t.map(s=>{const u=w(r);return u.dispatch(s),o.push(u.getContext()),u.toString()});return n=n.concat(o),c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),m(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=Array.from(t);return this._array(a,r.unorderedSets!==!1)},_set(t){e("set:");const a=Array.from(t);return this._array(a,r.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function m(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}function K(r,i={}){const n=typeof r=="string"?r:O(r,i);return String(k(n))}const j=decodeURIComponent,v=encodeURIComponent,B=/; */,d=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function F(r,i){if(typeof r!="string")throw new TypeError("argument str must be a string");let n={},e=i||{},t=r.split(B),a=e.decode||j;for(let o=0;o<t.length;o++){let c=t[o],s=c.indexOf("=");if(s<0)continue;let u=c.substr(0,s).trim(),l=c.substr(++s,c.length).trim();l[0]=='"'&&(l=l.slice(1,-1)),n[u]==null&&(n[u]=I(l,a))}return n}function _(r,i,n){let e=n||{},t=e.encode||v;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!d.test(r))throw new TypeError("argument name is invalid");let a=t(i);if(a&&!d.test(a))throw new TypeError("argument val is invalid");let o=r+"="+a;if(e.maxAge!=null){let c=e.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(c)}if(e.domain){if(!d.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!d.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(typeof e.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function I(r,i){try{return i(r)}catch{return r}}const z={path:"/",decode:r=>T(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function V(r,i){var a,o;const n=p(p({},z),i),e=H(n),t=U((o=e[r])!=null?o:(a=n.default)==null?void 0:a.call(n));return C(t,()=>{D(r,t.value,n)}),t}function H(r={}){return F(document.cookie,r)}function L(r,i,n={}){return i==null?_(r,i,g(p({},n),{maxAge:-1})):_(r,i,n)}function D(r,i,n={}){document.cookie=L(r,i,n)}function q(r){return JSON.stringify(r,J)}function J(r,i){return i instanceof RegExp?`--REGEX ${i.toString()}`:i}export{K as h,q as j,V as u};
