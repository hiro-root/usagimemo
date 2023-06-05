(function(){"use strict";var e={9231:function(e,t,n){var o=n(9242),r=n(3396),i=n(7139),l=n(7718),u=n(6281),a=n(9156),s=n(9159),c=n(3481),m=n(2127),d=n(3140),f=n(2078),p=n(5030);function g(e,t,n,g,w,h){const v=(0,r.up)("v-list-item-group"),k=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(l.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d.O,null,{default:(0,r.w5)((()=>[(0,r._)("header",null,[(0,r.Wm)(u.L,{color:"pink-lighten-4",app:""},{default:(0,r.w5)((()=>[(0,r.Wm)(a.g,{onClick:t[0]||(t[0]=(0,o.iM)((e=>w.drawer=!w.drawer),["stop"]))}),(0,r.Wm)(p.q,{class:"title"},{default:(0,r.w5)((()=>[(0,r.Uk)("うさぎめも")])),_:1})])),_:1}),(0,r.Wm)(f.V,{modelValue:w.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>w.drawer=e),fixed:"",temporary:""},{default:(0,r.w5)((()=>[(0,r.Wm)(s.i,{nav:"",color:"pink-lighten-3","onClick:select":h.clickItem},{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c.l,{value:"/"},{default:(0,r.w5)((()=>[(0,r.Wm)(m.V,null,{default:(0,r.w5)((()=>[(0,r.Uk)("メモ一覧")])),_:1})])),_:1}),(0,r.Wm)(c.l,{value:"/new"},{default:(0,r.w5)((()=>[(0,r.Wm)(m.V,null,{default:(0,r.w5)((()=>[(0,r.Uk)("メモを作成")])),_:1})])),_:1}),(0,r.Wm)(c.l,{value:"/setting"},{default:(0,r.w5)((()=>[(0,r.Wm)(m.V,null,{default:(0,r.w5)((()=>[(0,r.Uk)("設定")])),_:1})])),_:1})])),_:1}),(0,r._)("h1",null,(0,i.zw)(e.message),1)])),_:1},8,["onClick:select"])])),_:1},8,["modelValue"])]),(0,r.Wm)(k)])),_:1})])),_:1})}n(7658);var w={data(){return{drawer:null}},methods:{clickItem(e){this.$router.push(e.id)}}},h=n(89);const v=(0,h.Z)(w,[["render",g]]);var k=v,_=n(5431);(0,_.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var y=n(2483),b=n(3830),j=n(3369),W=n(6824),O=n(8521);const C={key:1,class:"mt-12"};function M(e,t,n,o,l,u){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(j.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(W.o,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(O.D,{cols:"12",class:"mb-4"},{default:(0,r.w5)((()=>[u.hasMemos?((0,r.wg)(),(0,r.j4)(s.i,{key:0,nav:"","onClick:select":e.clickItem},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.memos,(e=>((0,r.wg)(),(0,r.j4)(c.l,{key:e.id},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{to:{name:"edit",params:{id:e.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1},8,["onClick:select"])):((0,r.wg)(),(0,r.iD)("p",C,[(0,r.Uk)("メモはないよ！"),(0,r.Wm)(a,{to:"/new"},{default:(0,r.w5)((()=>[(0,r.Uk)("メモを作成")])),_:1}),(0,r.Uk)("からメモを作ってね♪")])),(0,r.Wm)(b.T,{class:"mt-12",justify:"center",color:"pink-accent-2",onClick:u.newtext},{default:(0,r.w5)((()=>[(0,r.Uk)("メモを作成")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}var T={name:"HomeView",methods:{newtext(){this.$router.push("/new")}},computed:{hasMemos(){return this.$store.getters.getCount},memos(){return this.$store.getters.getAll}}};const U=(0,h.Z)(T,[["render",M]]);var V=U;function x(e,t,n,o,i,l){const u=(0,r.up)("MemoForm");return(0,r.wg)(),(0,r.j4)(u,{memo:""})}var E=n(165),A=n(4842);const N={class:"mt-4"},P={style:{gap:"1rem",display:"flex","justify-content":"center"}};function S(e,t,n,o,i,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",N,[(0,r.Wm)(E.h,{label:"タイトルを入力してね",variant:"outlined",modelValue:i.title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e)},null,8,["modelValue"])]),(0,r._)("div",null,[(0,r.Wm)(A.z,{label:"内容を入力してね",variant:"outlined",modelValue:i.content,"onUpdate:modelValue":t[1]||(t[1]=e=>i.content=e)},null,8,["modelValue"])]),(0,r._)("div",P,[(0,r.Wm)(b.T,{color:"pink-accent-2",onClick:l.save},{default:(0,r.w5)((()=>[(0,r.Uk)("保存")])),_:1},8,["onClick"]),n.memo.id?((0,r.wg)(),(0,r.j4)(b.T,{key:0,color:"grey-lighten-1",onClick:l.remove},{default:(0,r.w5)((()=>[(0,r.Uk)("削除")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])],64)}var $={name:"MemoForm",props:["memo"],data(){return{title:this.memo.title,content:this.memo.content}},methods:{save(){let e={title:this.title,content:this.content};this.memo.id&&(e.id=this.memo.id),this.$store.commit("save",e),this.$router.push("/")},remove(){const e=confirm("削除して本当にいい？");e&&(this.$store.commit("delete",this.memo.id),this.$router.push("/"))}}};const F=(0,h.Z)($,[["render",S],["__scopeId","data-v-48a08140"]]);var I=F,D={name:"NewView",components:{MemoForm:I}};const R=(0,h.Z)(D,[["render",x]]);var Z=R;const q={key:1,class:"mt-12"};function z(e,t,n,o,i,l){const u=(0,r.up)("MemoForm");return(0,r.wg)(),(0,r.j4)(j.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(W.o,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(O.D,{cols:"12",class:"mb-4"},{default:(0,r.w5)((()=>[l.memo?((0,r.wg)(),(0,r.j4)(u,{key:0,memo:l.memo},null,8,["memo"])):((0,r.wg)(),(0,r.iD)("p",q,"指定されたメモはないよ！"))])),_:1})])),_:1})])),_:1})}var B={name:"EditView",components:{MemoForm:I},computed:{memo(){const e=parseInt(this.$route.params.id);return this.$store.getters.getMemoById(e)}}};const H=(0,h.Z)(B,[["render",z]]);var K=H,L=n(8694);const Y=(0,r._)("p",null,"coming soon",-1);function J(e,t){return(0,r.wg)(),(0,r.j4)(j.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(W.o,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(O.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(L.f,{src:n(6341),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,r.Wm)(O.D,{cols:"12"},{default:(0,r.w5)((()=>[Y])),_:1})])),_:1})])),_:1})}const G={},Q=(0,h.Z)(G,[["render",J]]);var X=Q;const ee=[{path:"/",name:"home",component:V},{path:"/new",name:"new",component:Z},{path:"/edit/:id",name:"edit",component:K},{path:"/setting",name:"setting",component:X}],te=(0,y.p7)({history:(0,y.r5)(),routes:ee});var ne=te,oe=n(65),re=n(5103);const ie=new re.Ew({storage:localStorage});var le=(0,oe.MT)({state:{count:0,memos:[]},getters:{getCount:e=>e.memos.length,getAll:e=>e.memos,getMemoById:e=>t=>e.memos.find((e=>e.id===t))},mutations:{RESTORE_MUTATION:ie.RESTORE_MUTATION,save(e,t){if(t.id){let n=e.memos.find((e=>e.id===t.id));n.title=t.title,n.content=t.content}else t.id=++e.count,e.memos.unshift(t)},delete(e,t){e.memos=e.memos.filter((e=>e.id!==t))}},actions:{},modules:{},plugins:[ie.plugin]}),ue=(n(9773),n(8727)),ae=(0,ue.Rd)();async function se(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap","Noto+Sans+JP:100,200,300,400,500,600,700,800,900&display=swap","Hachi+Maru+Pop:400&display=swap"]}})}se(),(0,o.ri)(k).use(ne).use(le).use(ae).mount("#app")},6341:function(e,t,n){e.exports=n.p+"img/usagi.44cc337a.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<l&&(l=i));if(u){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){l[e]=function(){return o[e]}}));return l["default"]=function(){return o},n.d(i,l),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.28d2189e.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="usagimemo:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var u,a;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var m=s[c];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+i){u=m;break}}u||(a=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),u=new Error,a=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",u.name="ChunkLoadError",u.type=i,u.request=l,r[1](u)}};n.l(l,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],u=o[1],a=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(a)var c=a(n)}for(t&&t(o);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkusagimemo"]=self["webpackChunkusagimemo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9231)}));o=n.O(o)})();
//# sourceMappingURL=app.3919513f.js.map