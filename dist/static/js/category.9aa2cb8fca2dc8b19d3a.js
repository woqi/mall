webpackJsonp([9],{"035s":function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("035s"),s=(e.n(n),e("igmb")),r=(e.n(s),e("7+uW")),i=e("mtWM"),o=e.n(i),c=e("TFhR"),d=e("U/rD");new r.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;o.a.get(c.a.topLists).then(function(a){t.topLists=a.data.lists}).catch(function(t){console.log("无法连接")})},getSubList:function(t,a){var e=this;console.log(t,a),this.topIndex=t,0===t?this.getRank():o.a.get(c.a.subLists,{id:a}).then(function(t){e.subData=t.data.data})},getRank:function(){var t=this;o.a.get(c.a.rank).then(function(a){t.rankData=a.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[d.a]})},TFhR:function(t,a,e){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",search:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrRemove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);a.a=n},"U/rD":function(t,a,e){"use strict";var n={filters:{currency:function(t){var a=""+t;if(a.indexOf(".")>-1){var e=a.split(".");return e[0]+"."+(e[1]+"0").substr(0,2)}return a+".00"}},components:{Foot:e("nq5D").a}};a.a=n},cDI2:function(t,a){},igmb:function(t,a){},nq5D:function(t,a,e){"use strict";var n=e("mw3O"),s=e.n(n).a.parse(location.search.substr(1)).index,r=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user ",href:"member.html"}],i={name:"foot",data:function(){return{navConfig:r,curIndex:parseInt(s)||0}},methods:{changeNav:function(t,a){location.href=t.href+"?index="+a}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{key:a.id,class:{active:n==t.curIndex},on:{click:function(e){t.changeNav(a,n)}}},[e("a",[e("i",{class:a.icon}),t._v(" "),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var c=e("VU/8")(i,o,!1,function(t){e("cDI2")},null,null);a.a=c.exports}},["Hwmd"]);
//# sourceMappingURL=category.9aa2cb8fca2dc8b19d3a.js.map