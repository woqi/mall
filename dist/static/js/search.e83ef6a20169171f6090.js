webpackJsonp([8],{"035s":function(e,t){},"0mhr":function(e,t){},Lip9:function(e,t){},TFhR:function(e,t,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",search:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrRemove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var r in a)a.hasOwnProperty(r)&&(a[r]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+a[r]);t.a=a},"U/rD":function(e,t,n){"use strict";var a={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var n=t.split(".");return n[0]+"."+(n[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:n("nq5D").a}};t.a=a},nq5D:function(e,t,n){"use strict";var a=n("mw3O"),r=n.n(a).a.parse(location.search.substr(1)).index,s=[{name:"首页",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user ",href:"member.html"}],o={name:"foot",data:function(){return{navConfig:s,curIndex:parseInt(r)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.navConfig,function(t,a){return n("li",{key:t.id,class:{active:a==e.curIndex},on:{click:function(n){e.changeNav(t,a)}}},[n("a",[n("i",{class:t.icon}),e._v(" "),n("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]};var i=n("VU/8")(o,c,!1,function(e){n("Lip9")},null,null);t.a=i.exports},sSMw:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("0mhr"),r=(n.n(a),n("035s")),s=(n.n(r),n("7+uW")),o=n("mtWM"),c=n.n(o),i=n("TFhR"),d=n("mw3O"),u=n.n(d),l=n("U/rD"),m=n("9qgI"),h=n.n(m),f=u.a.parse(location.search.substr(1)),v=f.keyword,p=f.id;document.querySelector(".container").clientHeight,document.documentElement.clientHeight,document.documentElement.scrollTop;new s.default({el:".container",data:{searchList:null,keyword:v,isShow:!1,onLoading:!1,allLoaded:!1,pageNum:1,pageSize:6},created:function(){this.getSearchList()},methods:{getSearchList:function(){var e=this;c.a.get(i.a.search,{keyword:v,id:p}).then(function(t){e.searchList=t.data.lists})},move:function(){document.documentElement.scrollTop>60?this.isShow=!0:this.isShow=!1},toTop:function(){h()(document.body,"scroll",{duration:500})}},mixins:[l.a]})}},["sSMw"]);
//# sourceMappingURL=search.e83ef6a20169171f6090.js.map