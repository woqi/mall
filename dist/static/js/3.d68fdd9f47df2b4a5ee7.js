webpackJsonp([3],{KrO5:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("TFhR"),e("mtWM");var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container ",staticStyle:{"min-height":"597px"}},[t.lists&&t.lists.length?e("div",{staticClass:"block-list address-list section section-first js-no-webview-block"},t._l(t.lists,function(s){return e("a",{key:s.id,staticClass:"block-item js-address-item address-item",class:{"address-item-default":s.isDefault},on:{click:function(e){t.toEdit(s)}}},[e("div",{staticClass:"address-title"},[t._v(t._s(s.name)+" "+t._s(s.tel))]),t._v(" "),e("p",[t._v(t._s(s.provinceName)+t._s(s.cityName)+t._s(s.districtName)+t._s(s.address))]),t._v(" "),e("a",{staticClass:"address-edit"},[t._v("修改")])])})):t._e(),t._v(" "),t.lists&&!t.lists.length?e("div",[t._v("没有地址，请添加")]):t._e(),t._v(" "),e("div",{staticClass:"block stick-bottom-row center"},[e("router-link",{staticClass:"btn btn-blue js-no-webview-block js-add-address-btn",attrs:{to:{name:"form",query:{type:"add"}}}},[t._v("\n          新增地址\n      ")])],1)])},staticRenderFns:[]},a=e("VU/8")({computed:{lists:function(){return this.$store.state.lists}},created:function(){this.lists||this.$store.dispatch("getLists")},methods:{toEdit:function(t){this.$router.push({name:"form",query:{type:"edit",instance:t}})}}},i,!1,null,null,null);s.default=a.exports}});
//# sourceMappingURL=3.d68fdd9f47df2b4a5ee7.js.map