(function(t){function e(e){for(var r,s,u=e[0],i=e[1],c=e[2],d=0,l=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a={app:0},o=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1db91632":"40d9fdd0","chunk-2d0d63f1":"41424ca6"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1db91632":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1db91632":"d7145aa7","chunk-2d0d63f1":"31d6cfe0"}[t]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===r||d===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var l=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,n[1](l)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"pt-6 pb-6 bg-green-500 rounded-b-lg flex justify-evenly"},[n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/"}},[t._v(" Home ")]),t.user?n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/Settings"}},[t._v(" Settings ")]):n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/Dashboard"}},[t._v(" Login ")])],1),n("div",{staticClass:"pt-10"},[n("router-view")],1),n("div",{staticClass:"m-10"})])},a=[],o=(n("b0c0"),{name:"App",computed:{user:function(){return this.$root.$data.user}},created:function(){null==this.$root.$data.user&&"Home"!==this.$route.name&&this.$router.push("/")}}),u=o,i=(n("034f"),n("2877")),c=Object(i["a"])(u,s,a,!1,null,null,null),d=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",[t.user?n("h1",[t._v(" User "+t._s(t.userFirstName)+" is logged in "),n("Stand",{attrs:{standsList:t.getStandsList}})],1):n("h1",[t._v("User not logged in")])])])},f=[],h=n("c7eb"),m=n("1da1"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Stand"}},[t.standsList&&t.standsList.length>0?n("div",{staticClass:"flex flex-col justify-center items-center"},[n("h1",{staticClass:"m-2 font-bold"},[t._v("Stand: "+t._s(t.selectedStand))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStand,expression:"selectedStand"}],staticClass:"m-2 px-5",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStand=e.target.multiple?n:n[0]}}},t._l(t.standsList,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0),n("Stock",{staticClass:"flex justify-center",attrs:{standName:t.selectedStand,products:t.productList,units:t.unitList}})],1):n("div",[n("h1",[t._v(" You have not been assigned any stands")])])])},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Stock"}},[n("div",[n("table",{staticClass:"table-auto border-collapse"},[t._m(0),t._l(t.products,(function(e){return n("tr",{key:e},[n("td",{staticClass:"text-center m-5"},[t._v(t._s(e))]),n("td",{staticClass:"text-center"},[t._v(" "+t._s(t.units[t.products.indexOf(e)]))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.current[t.products.indexOf(e)],expression:"current[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"number"},domProps:{value:t.current[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.current,t.products.indexOf(e),n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.requested[t.products.indexOf(e)],expression:"requested[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"number"},domProps:{value:t.requested[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.requested,t.products.indexOf(e),n.target.value)}}})])])}))],2),n("div",{staticClass:"flex justify-center"},[n("button",{staticClass:"mt-2 p-2 bg-green-500 rounded",on:{click:function(e){return t.sendItems(t.standName)}}},[t._v("Submit")])])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"m-5"},[n("th",[t._v("Product")]),n("th",[t._v("Unit")]),n("th",[t._v("Current Stock")]),n("th",[t._v("Amount Requested")])])}],S=n("bc3a"),_=n.n(S),y={name:"Stock",props:{standName:String,products:Array,units:Array},data:function(){return{oldStand:"",current:[],requested:[]}},methods:{sendItems:function(t){var e=this;return Object(m["a"])(Object(h["a"])().mark((function n(){return Object(h["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t&&""!==t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,_.a.put("/api/product",{user:e.getUsersName,stand:t,units:e.units,products:e.products,current:e.current,requested:e.requested});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](2),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[2,7]])})))()},getItems:function(){var t=this;return Object(m["a"])(Object(h["a"])().mark((function e(){var n;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("/api/product",{user:t.getUsersName,stand:t.standName});case 3:n=e.sent,t.current=[],t.requested=[],"OK"!==n.data&&"Created"!==n.data&&(t.current=n.data.current,t.requested=n.data.requested),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},computed:{getUsersName:function(){return this.$root.$data.user.firstName+" "+this.$root.$data.user.lastName}},created:function(){this.oldStand=this.standName,this.getItems()},watch:{standName:function(){this.sendItems(this.oldStand),this.oldStand=this.standName,this.getItems()}},beforeDestroy:function(){this.sendItems(this.standName)}},w=y,O=(n("e2b4"),Object(i["a"])(w,b,x,!1,null,"4c436e46",null)),k=O.exports,j={name:"Stand",components:{Stock:k},props:{standsList:Array},data:function(){return{selectedStand:"",productList:[],unitList:[]}},methods:{getStandInfo:function(){var t=this;return Object(m["a"])(Object(h["a"])().mark((function e(){var n;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("api/product/info",{list:t.selectedStand});case 3:n=e.sent,t.productList=n.data.items,t.unitList=n.data.units,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},watch:{selectedStand:function(){this.standsList.length>0&&this.getStandInfo()}},created:function(){this.getStandInfo(),this.standsList&&(this.selectedStand=this.standsList[0])}},$=j,C=Object(i["a"])($,v,g,!1,null,null,null),L=C.exports,N={name:"Home",components:{Stand:L},methods:{updateUserStands:function(){var t=this;return Object(m["a"])(Object(h["a"])().mark((function e(){var n;return Object(h["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$root.$data.user){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,_.a.get("/api/users/stand/"+t.$root.$data.user._id);case 5:n=e.sent,t.$root.$data.user.standsList=n.data.standsList,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},computed:{user:function(){return this.$root.$data.user},userFirstName:function(){return this.$root.$data.user.firstName},getStandsList:function(){return this.$root.$data.user.standsList}},created:function(){this.updateUserStands()}},E=N,q=Object(i["a"])(E,p,f,!1,null,null,null),P=q.exports;r["a"].use(l["a"]);var A=[{path:"/",name:"Home",component:P},{path:"/Dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}},{path:"/Settings",name:"Settings",component:function(){return n.e("chunk-1db91632").then(n.bind(null,"26d3"))}}],I=new l["a"]({routes:A}),U=I;n("8a71");r["a"].config.productionTip=!1;var T={user:null};new r["a"]({data:T,router:U,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){},"8a71":function(t,e,n){},e2b4:function(t,e,n){"use strict";n("f531")},f531:function(t,e,n){}});
//# sourceMappingURL=app.b3d24284.js.map