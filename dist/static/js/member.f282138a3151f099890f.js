webpackJsonp([10],{"5xbo":function(t,e,n){"use strict";var a=n("Zrlr"),s=n.n(a),r=n("wxAW"),i=n.n(r),o=n("wI4f"),u=n("TFhR"),d=n("mtWM"),c=(n.n(d),function(){function t(){s()(this,t)}return i()(t,null,[{key:"list",value:function(){return Object(o.a)(u.a.addressLists)}},{key:"add",value:function(t){return Object(o.a)(u.a.addressAdd,t)}},{key:"remove",value:function(t){return Object(o.a)(u.a.addressRemove,t)}},{key:"update",value:function(t){return Object(o.a)(u.a.addressUpdate,t)}},{key:"setDefault",value:function(t){return Object(o.a)(u.a.addressSetDefault,t)}}]),t}());e.a=c},"Q+HK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("iEHk");var a=n("7+uW"),s=n("/ocq");a.default.use(s.a);var r=[{path:"/",component:function(){return n.e(2).then(n.bind(null,"9ksb"))}},{path:"/address",component:function(){return n.e(1).then(n.bind(null,"/q06"))},children:[{path:"",redirect:"all"},{path:"all",name:"all",component:function(){return n.e(3).then(n.bind(null,"KrO5"))}},{path:"form",name:"form",component:function(){return n.e(0).then(n.bind(null,"xYTl"))}}]}],i=new s.a({routes:r}),o=n("mvHQ"),u=n.n(o),d=n("NYxO"),c=n("5xbo");a.default.use(d.a);var l=new d.a.Store({state:{lists:null},mutations:{init:function(t,e){t.lists=e},add:function(t,e){t.lists.push(e)},remove:function(t,e){var n=t.lists,a=n.findIndex(function(t){return t.id==e});n.splice(a,1)},update:function(t,e){var n=JSON.parse(u()(t.lists));n[n.findIndex(function(t){return t.id==e.id})]=e,t.lists=n},setDefault:function(t,e){var n=JSON.parse(u()(t.lists));n.forEach(function(t){t.id===e&&(t.isDefault=!0)}),t.lists=n}},actions:{getLists:function(t){var e=t.commit;c.a.list().then(function(t){e("init",t.data.lists)})},addAction:function(t,e){var n=t.commit;c.a.add(e).then(function(t){e.id=parseInt(1e4*Math.random()),n("add",e)})},removeAction:function(t,e){var n=t.commit;c.a.remove(e).then(function(t){n("remove",e)})},updateAction:function(t,e){var n=t.commit;c.a.update(e).then(function(t){n("update",e)})},setDefaultAction:function(t,e){var n=t.commit;c.a.setDefault(e).then(function(t){n("setDefault",e)})}}});new a.default({el:"#app",router:i,store:l})},TFhR:function(t,e,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subLists:"/category/subList",rank:"/category/rank",search:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartList:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrRemove:"/cart/mrremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in a)a.hasOwnProperty(s)&&(a[s]="https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+a[s]);e.a=a},iEHk:function(t,e){},wI4f:function(t,e,n){"use strict";var a=n("//Fk"),s=n.n(a),r=n("mtWM"),i=n.n(r);e.a=function(t,e){return new s.a(function(n,a){i.a.post(t,e).then(function(t){n(t)}).catch(function(t){a(t)})})}}},["Q+HK"]);
//# sourceMappingURL=member.f282138a3151f099890f.js.map