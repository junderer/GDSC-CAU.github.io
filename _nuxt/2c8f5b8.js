(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5],{273:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("17ec4d76",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n(273)},275:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.altfive[data-v-efecb3ac]{\n  height:1.35rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(274);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block altfive",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,"efecb3ac",null);e.default=component.exports},278:function(t,e,n){var map={"./bobby.jpg":281,"./hongkyung.jpg":282,"./kate.JPG":283,"./lauren.jpg":284,"./peniel.jpg":285,"./taylor.png":286,"./wendy.jpg":287};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=278},281:function(t,e,n){t.exports=n.p+"img/bobby.1a88203.jpg"},282:function(t,e,n){t.exports=n.p+"img/hongkyung.b434b23.jpg"},283:function(t,e,n){t.exports=n.p+"img/kate.1e217f3.JPG"},284:function(t,e,n){t.exports=n.p+"img/lauren.c768a2e.jpg"},285:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},286:function(t,e,n){t.exports=n.p+"img/taylor.0ea95b8.png"},287:function(t,e,n){t.exports=n.p+"img/wendy.a89b3bc.jpg"},312:function(t,e,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("00ea5ca2",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n(312)},347:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text{\n  word-break:keep-all\n}\n.lead-box{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},380:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(42),n(24),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("members",r.id).fetch();case 3:return o=e.sent,l=o.name,e.next=7,n("blog",r.slug).where({author:l}).only(["title","description","img","datetime","category","author","slug"]).sortBy("createdAt","desc").fetch();case 7:return c=e.sent,e.abrupt("return",{member:o,memberArticles:c,authorName:l});case 9:case"end":return e.stop()}}),e)})))()}}),l=(n(346),n(9)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-gray-50"},[r("div",{staticClass:"max-w-6xl mx-auto px-5 flex justify-center pt-28 md:pt-40"},[r("div",[r("div",{staticClass:"lead-box w-40 h-40 md:w-52 md:h-52 mb-4 md:mb-6 mx-auto"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+t.member.img),alt:""}})]),t._v(" "),r("div",{staticClass:"text-gray-800 text-2xl md:text-3xl font-medium flex justify-center poppins pb-0 md:pb-1.5"},[t._v(t._s(t.member.name))]),t._v(" "),r("div",{staticClass:"flex justify-center poppins text-lg md:text-xl text-gray-800 pb-1.5 md:pb-3"},[t._v(t._s(t.member.role))]),t._v(" "),r("div",{staticClass:"text-gray-500 pb-4 flex justify-center"},[t._v(t._s(t.member.description))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-7 pb-16 max-w-6xl mx-auto px-5"},t._l(t.memberArticles,(function(e){return r("div",{key:e,staticClass:"group"},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:e.slug}}}},[r("div",{staticClass:"article-inner flex justify-between items-center border-t py-8 border-gray-600"},[r("div",{staticClass:"pr-4"},[r("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400"},[t._v(t._s(e.category)+" · "+t._s(e.author))]),t._v(" "),r("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-gray-800"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:" text-sm md:text-base text-gray-600 custom-text"},[t._v(t._s(e.description))])]),t._v(" "),r("div",{staticClass:"pl-4 pr-6"},[r("ExternalLinkLogo")],1)])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-8 md:pt-16 flex justify-between items-center max-w-6xl mx-auto px-5"},[n("div",{staticClass:"text-2xl md:text-3xl text-gray-800 font-medium poppins"},[t._v("Articles")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLinkLogo:n(276).default})}}]);