if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const t=e=>s(e,r),u={module:{uri:r},exports:l,require:t};n[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"usagimemo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.d1d539f6.css",revision:null},{url:"css/chunk-vendors.f3c2095e.css",revision:null},{url:"fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"img/bear.94a2af04.jpg",revision:null},{url:"img/usagi.a428e608.jpg",revision:null},{url:"index.html",revision:"1b149d439f8ebfc5669391b4c1455757"},{url:"js/app.99a5ee07.js",revision:null},{url:"js/chunk-vendors.69ca000e.js",revision:null},{url:"js/webfontloader.28d2189e.js",revision:null},{url:"manifest.json",revision:"17a9366f2caaa45cecf31c4dc00b0412"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
