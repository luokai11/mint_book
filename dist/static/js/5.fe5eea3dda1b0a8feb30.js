webpackJsonp([5],{WNeu:function(s,t){},deAr:function(s,t,a){s.exports=a.p+"static/img/douluo.8413075.jpg"},sXpa:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Au9i"),n=a("mtWM"),c=a.n(n),e={data:function(){return{classifyList:{}}},created:function(){this.getList()},methods:{getList:function(){var s=this;i.Indicator.open("加载中"),c.a.get("/vueBook/classify").then(function(t){200===t.data.state&&(s.classifyList=t.data.data,i.Indicator.close())}).catch(function(s){})}}},v={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"classify"},[i("div",{staticClass:"channels"},[i("h3",[s._v("男生频道")]),s._v(" "),i("div",{staticClass:"channel"},s._l(s.classifyList.maleObj,function(t,n){return i("div",[i("div",{staticClass:"ch"},[i("img",{attrs:{src:a("deAr")}}),s._v(" "),i("p",[s._v(s._s(t.name))]),s._v(" "),i("p",[s._v(s._s(t.num)+"本")])]),s._v(" "),n%2==0?i("div",{staticClass:"sl"}):s._e()])}))]),s._v(" "),i("div",{staticClass:"channels"},[i("h3",[s._v("女生频道")]),s._v(" "),i("div",{staticClass:"channel"},s._l(s.classifyList.femaleObj,function(t,n){return i("div",[i("div",{staticClass:"ch"},[i("img",{attrs:{src:a("deAr")}}),s._v(" "),i("p",[s._v(s._s(t.name))]),s._v(" "),i("p",[s._v(s._s(t.num)+"本")])]),s._v(" "),n%2==0?i("div",{staticClass:"sl"}):s._e()])}))]),s._v(" "),i("div",{staticClass:"channels"},[i("h3",[s._v("出版频道")]),s._v(" "),i("div",{staticClass:"channel"},s._l(s.classifyList.publishObj,function(t,n){return i("div",[i("div",{staticClass:"ch"},[i("img",{attrs:{src:a("deAr")}}),s._v(" "),i("p",[s._v(s._s(t.name))]),s._v(" "),i("p",[s._v(s._s(t.num)+"本")])]),s._v(" "),n%2==0?i("div",{staticClass:"sl"}):s._e()])})),s._v(" "),i("div",{staticClass:"total"},[s._v("\n      一共"),i("span",[s._v(s._s(s.classifyList.total))]),s._v("部作品,本周新增"),i("span",[s._v(s._s(s.classifyList.newlyAdded))]),s._v("部作品\n    ")])])])},staticRenderFns:[]};var l=a("VU/8")(e,v,!1,function(s){a("WNeu")},"data-v-05454a09",null);t.default=l.exports}});
//# sourceMappingURL=5.fe5eea3dda1b0a8feb30.js.map