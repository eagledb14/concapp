(function(t){function e(e){for(var r,o,u=e[0],i=e[1],c=e[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},s=[];function o(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d63f1":"dc979fb1","chunk-9b3509b2":"af31823e"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(t);var c=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,n[1](c)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"pt-6 pb-6 bg-green-500 rounded-b-lg flex justify-evenly"},[n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/"}},[t._v(" Home ")]),t.user?n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/Settings"}},[t._v(" Settings ")]):n("router-link",{staticClass:"rounded hover:bg-white text-xl p-2",attrs:{to:"/Dashboard"}},[t._v(" Login ")])],1),n("div",{staticClass:"pt-10"},[n("router-view")],1)])},s=[],o={name:"App",computed:{user:function(){return this.$root.$data.user}}},u=o,i=(n("034f"),n("2877")),c=Object(i["a"])(u,a,s,!1,null,null,null),d=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",[t.user?n("h1",[t._v(" User "+t._s(t.userFirstName)+" is logged in "),n("Stand",{attrs:{standsList:t.getStandsList}})],1):n("h1",[t._v("User not logged in")])])])},p=[],m=n("1da1"),v=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Stand"}},[t.standsList&&t.standsList.length>0?n("div",{staticClass:"flex flex-col justify-center items-center"},[n("h1",{staticClass:"m-2 font-bold"},[t._v("Stand: "+t._s(t.selectedStand))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedStand,expression:"selectedStand"}],staticClass:"m-2 px-5",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedStand=e.target.multiple?n:n[0]}}},t._l(t.standsList,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0),n("Stock",{staticClass:"flex justify-center",attrs:{standName:t.selectedStand,products:t.productList}})],1):n("div",[n("h1",[t._v(" You have not been assigned any stands")])])])}),h=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Stock"}},[n("table",{staticClass:"table-auto border-collapse"},[t._m(0),t._l(t.products,(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.beforeGameCount[t.products.indexOf(e)],expression:"beforeGameCount[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"text"},domProps:{value:t.beforeGameCount[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.beforeGameCount,t.products.indexOf(e),n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferInCount[t.products.indexOf(e)],expression:"transferInCount[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"text"},domProps:{value:t.transferInCount[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.transferInCount,t.products.indexOf(e),n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transferOutCount[t.products.indexOf(e)],expression:"transferOutCount[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"text"},domProps:{value:t.transferOutCount[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.transferOutCount,t.products.indexOf(e),n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.finalCount[t.products.indexOf(e)],expression:"finalCount[products.indexOf(product)]"}],staticClass:"text-center",attrs:{type:"text"},domProps:{value:t.finalCount[t.products.indexOf(e)]},on:{input:function(n){n.target.composing||t.$set(t.finalCount,t.products.indexOf(e),n.target.value)}}})])])}))],2),n("button",{on:{click:function(e){return t.sendItems(t.standName)}}},[t._v("Submit")])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Product")]),n("th",[t._v("Before game")]),n("th",[t._v("Transfer in")]),n("th",[t._v("Transfer out")]),n("th",[t._v("Final Count")])])}],x=n("bc3a"),C=n.n(x),O={name:"Stock",props:{standName:String,products:Array},data:function(){return{oldStand:"",beforeGameCount:[],transferInCount:[],transferOutCount:[],finalCount:[]}},methods:{sendItems:function(t){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.a.put("/api/product",{user:e.getUsersName,stand:t,products:e.products,before:e.beforeGameCount,in:e.transferInCount,out:e.transferOutCount,final:e.finalCount});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n["catch"](0),console.log(n.t0.response.data.message);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},getItems:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/api/product",{user:t.getUsersName,stand:t.standName});case 3:n=e.sent,t.beforeGameCount=[],t.transferInCount=[],t.transferOutCount=[],t.finalCount=[],n.data&&(t.beforeGameCount=n.data.before,t.transferInCount=n.data.in,t.transferOutCount=n.data.out,t.finalCount=n.data.final),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},computed:{getUsersName:function(){return this.$root.$data.user.firstName+" "+this.$root.$data.user.lastName}},created:function(){this.oldStand=this.standName,this.getItems()},watch:{standName:function(){this.sendItems(this.oldStand),this.oldStand=this.standName,this.getItems()}},beforeDestroy:function(){this.sendItems(this.standName)}},_=O,y=(n("79b3"),Object(i["a"])(_,g,b,!1,null,"6c12d682",null)),S=y.exports,w={name:"Stand",components:{Stock:S},props:{standsList:Array},data:function(){return{selectedStand:"",productList:["ham","cheese","onions"]}},created:function(){this.standsList&&(this.selectedStand=this.standsList[0])}},$=w,k=Object(i["a"])($,v,h,!1,null,null,null),j=k.exports,N={name:"Home",components:{Stand:j},methods:{updateUserStands:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$root.$data.user){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,C.a.get("/api/users/stand/"+t.$root.$data.user._id);case 5:n=e.sent,t.$root.$data.user.standsList=n.data.standsList,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},computed:{user:function(){return this.$root.$data.user},userFirstName:function(){return this.$root.$data.user.firstName},getStandsList:function(){return this.$root.$data.user.standsList}},created:function(){this.updateUserStands()}},L=N,I=Object(i["a"])(L,f,p,!1,null,null,null),P=I.exports;r["a"].use(l["a"]);var E=[{path:"/",name:"Home",component:P},{path:"/Dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}},{path:"/Settings",name:"Settings",component:function(){return n.e("chunk-9b3509b2").then(n.bind(null,"26d3"))}}],G=new l["a"]({routes:E}),T=G;n("8a71");r["a"].config.productionTip=!1;var U={user:null};new r["a"]({data:U,router:T,render:function(t){return t(d)}}).$mount("#app")},"79b3":function(t,e,n){"use strict";n("c8f0")},"85ec":function(t,e,n){},"8a71":function(t,e,n){},c8f0:function(t,e,n){}});
//# sourceMappingURL=app.5de5b2cb.js.map