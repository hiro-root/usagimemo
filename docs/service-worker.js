if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const t=e=>n(e,r),u={module:{uri:r},exports:l,require:t};s[r]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"usagimemo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.f2035620.css",revision:null},{url:"css/chunk-vendors.55d02288.css",revision:null},{url:"fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"img/usagi.44cc337a.jpg",revision:null},{url:"index.html",revision:"5b47edb0f40c98d6d65021451cb2384c"},{url:"js/app.03b3f3d8.js",revision:null},{url:"js/chunk-vendors.a00a43ac.js",revision:null},{url:"js/webfontloader.28d2189e.js",revision:null},{url:"manifest.json",revision:"c5f25b0177c1117e4527d350c796f510"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
