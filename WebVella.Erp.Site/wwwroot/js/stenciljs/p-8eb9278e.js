const e=window,t=document,n={t:0,s:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},s=(()=>{let e=!1;try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),r={},o=new WeakMap,l=e=>o.get(e),c=(e,t)=>o.set(t.o=e,t),i=(e,t)=>t in e,a=e=>console.error(e),f=new Map,u=e.__stencil_cssshim;let p=0,$=!1;const m=[],d=[],h=[],w=(e,t)=>s=>{e.push(s),$||($=!0,t&&4&n.t?g(y):n.raf(y))},b=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){a(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},y=()=>{p++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){a(e)}e.length=0})(m);const e=2==(6&n.t)?performance.now()+10*Math.ceil(p*(1/22)):1/0;b(d,e),b(h,e),d.length>0&&(h.push(...d),d.length=0),($=m.length+d.length+h.length>0)?n.raf(y):p=0},g=e=>Promise.resolve().then(e),v=w(m,!1),_=w(d,!0),j={},O=e=>null!=e,k=e=>e.toLowerCase(),L=e=>["object","function"].includes(typeof e),U=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_wv_pb_manager("./p-3ea8955c.js"),P=async()=>{{const n=Array.from(t.querySelectorAll("script")).find(e=>e.src.includes("/wv-pb-manager.esm.js")||"wv-pb-manager"===e.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,e.location.href));return S(s.href),window.customElements||await __sc_import_wv_pb_manager("./p-860d8016.js"),s.href}},S=n=>{const s=`__sc_import_${"wv-pb-manager".replace(/\s|-/g,"_")}`;try{e[s]=new Function("w","return import(w);")}catch(r){const o=new Map;e[s]=r=>{const l=new URL(r,n).href;let c=o.get(l);if(!c){const n=t.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${l}'; window.${s}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{n.onload=()=>{t(e[s].m),n.remove()}}),o.set(l,c),t.head.appendChild(n)}return c}}},M=(e,t,...n)=>{let s,r=null,o=!1,l=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?i(r):null!=r&&"boolean"!=typeof r&&((o="function"!=typeof e&&!L(r))&&(r=String(r)),o&&l?c[c.length-1].l+=r:c.push(o?{t:0,l:r}:r),l=o)};if(i(n),t){s=t.key||void 0;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,x);const a={t:0,i:e,u:c.length>0?c:null,p:void 0,$:t};return a.h=s,a},R={},x={forEach:(e,t)=>e.map(T).forEach(t),map:(e,t)=>e.map(T).map(t).map(A)},T=e=>({vattrs:e.$,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.l}),A=e=>({t:0,$:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,l:e.vtext}),C=(e,t,s,r,o,l)=>{if(s!==r)if("class"!==t||o)if("style"===t){for(const t in s)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)s&&r[t]===s[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e);else if(t.startsWith("on")&&!i(e,t))t=i(e,k(t))?k(t.substring(2)):k(t[2])+t.substring(3),s&&n.rel(e,t,s,!1),r&&n.ael(e,t,r,!1);else{const n=i(e,t),s=L(r);if((n||s&&null!==r)&&!o)try{e[t]=null==r&&-1===e.tagName.indexOf("-")?"":r}catch(e){}null==r||!1===r?e.removeAttribute(t):(!n||4&l||o)&&!s&&(r=!0===r?"":r.toString(),e.setAttribute(t,r))}else{const t=E(s),n=E(e.className).filter(e=>!t.includes(e));e.className=n.concat(E(r).filter(e=>!n.includes(e))).join(" ")}},E=e=>e?e.split(" "):[],F=(e,t,n,s)=>{const r=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.$||j,l=t.$||j;for(s in o)null==l[s]&&null!=o[s]&&C(r,s,o[s],void 0,n,t.t);for(s in l)C(r,s,o[s],l[s],n,t.t)};let q;const D=(e,n,s)=>{let r,o,l=n.u[s],c=0;if(O(l.l))l.p=t.createTextNode(l.l);else if(r=l.p=t.createElement(l.i),F(null,l,!1),l.u)for(c=0;c<l.u.length;++c)(o=D(e,l,c))&&r.appendChild(o);return l.p},W=(e,t,n,s,r,o)=>{let l,c=e;for(;r<=o;++r)s[r]&&(l=D(null,n,r))&&(s[r].p=l,c.insertBefore(l,t))},B=(e,t,n,s)=>{for(;t<=n;++t)O(e[t])&&(s=e[t].p,V(e[t],!0),s.remove())},H=(e,t)=>e.i===t.i&&e.h===t.h,N=(e,t)=>{const n=t.p=e.p,s=e.u,r=t.u;O(t.l)?e.l!==t.l&&(n.textContent=t.l):(F(e,t,!1),O(s)&&O(r)?((e,t,n,s)=>{let r,o,l=0,c=0,i=0,a=0,f=t.length-1,u=t[0],p=t[f],$=s.length-1,m=s[0],d=s[$];for(;l<=f&&c<=$;)if(null==u)u=t[++l];else if(null==p)p=t[--f];else if(null==m)m=s[++c];else if(null==d)d=s[--$];else if(H(u,m))N(u,m),u=t[++l],m=s[++c];else if(H(p,d))N(p,d),p=t[--f],d=s[--$];else if(H(u,d))N(u,d),e.insertBefore(u.p,p.p.nextSibling),u=t[++l],d=s[--$];else if(H(p,m))N(p,m),e.insertBefore(p.p,u.p),p=t[--f],m=s[++c];else{for(i=-1,a=l;a<=f;++a)if(t[a]&&O(t[a].h)&&t[a].h===m.h){i=a;break}i>=0?((o=t[i]).i!==m.i?r=D(t&&t[c],n,i):(N(o,m),t[i]=void 0,r=o.p),m=s[++c]):(r=D(t&&t[c],n,c),m=s[++c]),r&&u.p.parentNode.insertBefore(r,u.p)}l>f?W(e,null==s[$+1]?null:s[$+1].p,n,s,c,$):c>$&&B(t,l,f)})(n,s,t,r):O(r)?(O(e.l)&&(n.textContent=""),W(n,null,t,r,0,r.length-1)):O(s)&&B(s,0,s.length-1))},V=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.p),e.u&&e.u.forEach(e=>{V(e,t)}))},z=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){a(e)}},G=(e,t,n,s)=>{t.t|=16;const r=t.o;let o;s&&(t.t|=256,t.v&&(t.v.forEach(([e,t])=>z(r,e,t)),t.v=null),o=z(r,"componentWillLoad"));const l=()=>I(e,t,n,r);return((e,t)=>e&&e.then?e.then(t):t())(o,()=>_(l))},I=(e,t,n,s)=>{t.t&=-17,e["s-lr"]=!1,t.t|=4;try{((e,t,n,s)=>{q=k(e.tagName);const r=t._||{t:0},o=(e=>e&&e.i===R)(s)?s:M(null,null,s);o.i=null,o.t|=4,t._=o,o.p=r.p=e,N(r,o)})(e,t,0,s.render())}catch(e){a(e)}t.t&=-5,u&&u.updateHost(e),e["s-lr"]=!0,t.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),J(e,t)},J=(e,s,r)=>{if(!e["s-al"]){const o=s.o,l=s.j;64&s.t||(s.t|=64,e.classList.add("hydrated"),z(o,"componentDidLoad"),s.O(e),l||(t.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),l&&((r=l["s-al"])&&(r.delete(e),0===r.size&&(l["s-al"]=void 0,l["s-init"]())),s.j=void 0)}},K=(e,t,s)=>{if(t.k){e.watchers&&(t.L=e.watchers);const r=Object.entries(t.k),o=e.prototype;if(r.forEach(([e,[n]])=>{(31&n||2&s&&32&n)&&Object.defineProperty(o,e,{get(){return((e,t)=>l(e).U.get(t))(this,e)},set(n){((e,t,n,s)=>{const r=l(this),o=r.P,c=r.U.get(t),i=r.t;if(!((n=((e,t)=>null==e||L(e)?e:2&t?parseFloat(e):1&t?String(e):e)(n,s.k[t][0]))===c||8&i&&void 0!==c)&&(r.U.set(t,n),r.o)){if(s.L&&128&i){const e=s.L[t];e&&e.forEach(e=>{try{r.o[e].call(r.o,n,c,t)}catch(e){a(e)}})}2==(22&i)&&G(o,r,s,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&s){const t=new Map;o.attributeChangedCallback=function(e,s,r){n.jmp(()=>{const n=t.get(e);this[n]=(null!==r||"boolean"!=typeof this[n])&&r})},e.observedAttributes=r.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},Q=(r,c={})=>{const i=[],p=c.exclude||[],$=t.head,m=e.customElements,d=$.querySelector("meta[charset]"),h=t.createElement("style");Object.assign(n,c),n.s=new URL(c.resourcesUrl||"./",t.baseURI).href,c.syncQueue&&(n.t|=4),r.forEach(e=>e[1].forEach(t=>{const r={t:t[0],S:t[1],k:t[2],M:t[3],L:{}},c=r.S;r.R=e[0],p.includes(c)||m.get(c)||(i.push(c),m.define(c,K(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,P:e,U:new Map};t.T=new Promise(e=>t.O=e),o.set(e,t)}})(e)}connectedCallback(){n.jmp(()=>((e,t)=>{if(0==(1&n.t)){const r=l(e);if(t.M&&(r.A=((e,t,r)=>{t.v=t.v||[];const o=r.map(([r,o,l])=>{const c=e,i=((e,t)=>n=>{256&e.t?e.o[t](n):e.v.push([t,n])})(t,l),a=(e=>s?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e))(r);return n.ael(c,o,i,a),()=>n.rel(c,o,i,a)});return()=>o.forEach(e=>e())})(e,r,t.M)),!(1&r.t)){r.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){r.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.k&&Object.entries(t.k).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,s,r)=>{if(0==(32&t.t)){t.t|=32,(r=(e=>{const t=e.S.replace(/-/g,"_"),n=e.R,s=f.get(n);return s?s[t]:__sc_import_wv_pb_manager(`./${n}.entry.js`).then(e=>(f.set(n,e),e[t]),a)})(n)).then&&(r=await r),r.isProxied||(n.L=r.watchers,K(r,n,2),r.isProxied=!0),t.t|=8;try{new r(t)}catch(e){a(e)}t.t&=-9,t.t|=128}const o=t.j,l=()=>G(e,t,n,!0);o&&!1===o["s-lr"]&&o["s-rc"]?o["s-rc"].push(l):l()})(e,r,t)}}})(this,r))}disconnectedCallback(){n.jmp(()=>(e=>{if(0==(1&n.t)){const t=l(e);t.A&&(t.A(),t.A=void 0),u&&u.removeHost(e)}})(this))}"s-init"(){const e=l(this);e.o&&J(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=l(e);2&n.t&&G(e,n,t,!1)}})(this,r)}componentOnReady(){return l(this).T}},r,1)))})),h.innerHTML=i+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),$.insertBefore(h,d?d.nextSibling:$.firstChild)},X=(s,o)=>o in r?r[o]:"window"===o?e:"document"===o?t:"isServer"!==o&&"isPrerender"!==o&&("isClient"===o||("resourcesUrl"===o||"publicPath"===o?(()=>{const t=new URL(".",n.s);return t.origin!==e.location.origin?t.href:t.pathname})():"queue"===o?{write:_,read:v,tick:{then:e=>g(e)}}:void 0)),Y=e=>l(e).P;r.store=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,n)=>{Object.keys(n).forEach(s=>{const r=n[s];Object.defineProperty(t,s,{get:()=>(...t)=>e.dispatch(r(...t)),configurable:!0,enumerable:!0})})},mapStateToProps:(t,n)=>{const s=()=>{const s=n(e.getState());Object.keys(s).forEach(e=>{t[e]=s[e]})},r=e.subscribe(()=>s());return s(),r}}})();export{U as a,Q as b,Y as c,X as g,M as h,P as p,c as r};