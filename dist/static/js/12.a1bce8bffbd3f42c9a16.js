webpackJsonp([12],{"/mz+":function(t,i){},ZZlj:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("BO1k"),a=s.n(n),e=s("d7EF"),o=s.n(e),c=s("Au9i"),r={name:"ranking",data:function(){return{bookList:[],typeList:["风云榜","畅销榜","点击榜","推荐榜","打赏榜","更新榜","签约榜","新书榜","新人榜","红包榜","书单榜"],isActive:"风云榜",load:!1}},mounted:function(){this.getBook()},methods:{loadMore:function(){var t=this;this.loading=!0,setTimeout(function(){t.getBook(),t.loading=!1},1500)},getBook:function(){var t=this;c.Indicator.open("加载中"),this.axios.post("/vueBook/bookList",{}).then(function(i){if(200===i.data.state){c.Indicator.close();var s=!0,n=!1,e=void 0;try{for(var r,l=a()(i.data.data.entries());!(s=(r=l.next()).done);s=!0){var v=r.value,d=o()(v,2),u=(d[0],d[1]);t.bookList.push(u)}}catch(t){n=!0,e=t}finally{try{!s&&l.return&&l.return()}finally{if(n)throw e}}}}).catch(function(t){console.log(t)})}}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"ranking"},[s("div",{staticClass:"ranking_left"},[s("ul",t._l(t.typeList,function(i){return s("li",{class:{actived:t.isActive===i},on:{click:function(s){t.isActive=i}}},[t._v(t._s(i))])}))]),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"ranking_right",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},t._l(t.bookList,function(i,n){return s("div",{staticClass:"books"},[s("div",{staticClass:"bLeft"},[s("img",{staticClass:"xImg",attrs:{src:i.path}})]),t._v(" "),s("div",{staticClass:"sug ef"},[s("div",[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"word lc"},[t._v(t._s(i.synopsis))]),t._v(" "),s("div",{staticClass:"wsp lc"},[s("span",[s("i",{staticClass:"mintui mintui-zuozhe"}),t._v(t._s(i.author)+"\n          ")]),t._v(" "),s("span",{staticClass:"sca",staticStyle:{"margin-right":"-6px"}},[s("span",[t._v(t._s(i.type))]),t._v(" "),s("span",[t._v("25万字")])])])])])}))])},staticRenderFns:[]};var v=s("VU/8")(r,l,!1,function(t){s("/mz+")},"data-v-23c0414e",null);i.default=v.exports}});
//# sourceMappingURL=12.a1bce8bffbd3f42c9a16.js.map