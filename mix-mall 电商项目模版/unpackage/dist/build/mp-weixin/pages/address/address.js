(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"1ab2":function(e,t,a){},3412:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{source:0,addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(e){console.log(e.source),this.source=e.source},methods:{checkAddress:function(t){1==this.source&&(this.$api.prePage().addressData=t,e.navigateBack())},addAddress:function(t,a){e.navigateTo({url:"/pages/address/addressManage?type=".concat(t,"&data=").concat(JSON.stringify(a))})},refreshList:function(e,t){this.addressList.unshift(e),console.log(e,t)}}};t.default=a}).call(this,a("543d")["default"])},"47ae":function(e,t,a){"use strict";a.r(t);var n=a("3412"),s=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=s.a},6727:function(e,t,a){"use strict";var n=a("1ab2"),s=a.n(n);s.a},"90e2":function(e,t,a){"use strict";a.r(t);var n=a("d0e9"),s=a("47ae");for(var r in s)"default"!==r&&function(e){a.d(t,e,(function(){return s[e]}))}(r);a("6727");var u,c=a("f0c5"),d=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=d.exports},cf68:function(e,t,a){"use strict";(function(e){a("10c1");n(a("66fd"));var t=n(a("90e2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},d0e9:function(e,t,a){"use strict";var n,s=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}))}},[["cf68","common/runtime","common/vendor"]]]);