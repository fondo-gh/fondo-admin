(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2050:function(t,e,n){var content=n(2060);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7b65f5d6",content,!0,{sourceMap:!1})},2058:function(t,e,n){"use strict";var r={props:{title:{default:"Title Menu"},iconClass:{default:"la la-ellipsis-v"}}},o=(n(2059),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"context-title d-flex align-items-center border-bottom"},[n("div",{staticClass:"text-theme1"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"ml-auto right-element "},[n("b-dropdown",{attrs:{variant:"muted",size:"sm"}},[n("template",{slot:"button-content"},[n("i",{staticClass:"icon-context",class:t.iconClass})]),t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Action")]),t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("Something else here...")])],2)],1)])}),[],!1,null,"51ccf801",null);e.a=component.exports},2059:function(t,e,n){"use strict";var r=n(2050);n.n(r).a},2060:function(t,e,n){(e=n(15)(!1)).push([t.i,".context-title[data-v-51ccf801]{font-size:13px;font-weight:500;padding-left:15px}.right-element i[data-v-51ccf801]{font-size:20px}",""]),t.exports=e},2082:function(t,e,n){var content=n(2153);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7f12bd90",content,!0,{sourceMap:!1})},2152:function(t,e,n){"use strict";var r=n(2082);n.n(r).a},2153:function(t,e,n){(e=n(15)(!1)).push([t.i,"img[data-v-b2eced82]{max-width:34px}.profile-status[data-v-b2eced82]{border:2px solid #fff;border-radius:50%;display:inline-block;height:10px;left:21px;position:absolute;top:27px;width:10px;background:currentColor}.inbox_people[data-v-b2eced82]{position:relative;height:100%;width:100%}.inbox_msg[data-v-b2eced82]{border:1px solid #c4c4c4;clear:both;overflow:hidden}.inbox_chat[data-v-b2eced82]{height:calc(100% - 40px)}.top_spac[data-v-b2eced82]{margin:20px 0 0}.recent_heading[data-v-b2eced82]{float:left;width:40%}.recent_heading h4[data-v-b2eced82]{font-size:18px;margin:auto}.chat_ib h5[data-v-b2eced82]{font-size:12px;color:#464646;margin:0 0 8px}.chat_ib h5 span[data-v-b2eced82]{font-size:11px;float:right}.chat_ib p[data-v-b2eced82]{font-size:12px;color:#989898;margin:auto}.chat_img[data-v-b2eced82]{margin-right:4px;position:relative}.chat_people[data-v-b2eced82]{display:flex}.chat_list[data-v-b2eced82]{border-bottom:1px solid var(--theme3inv);margin:0;padding:18px 12px 10px 2px}",""]),t.exports=e},2176:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(4),n(3),n(6),n(64);var r=n(19),o=n(0),c=n(46);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{TitleContext:n(2058).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("rooms",{findRoomsInStore:"find"}),{rooms:function(){return this.findRoomsInStore({query:{$sort:{status:-1},$limit:15}}).data}}),methods:{formatDate:function(t){var e=new Date(t);return e.toLocaleString("en-us",{month:"short"})+" "+e.getDate()},getClass:function(t){return"text-"+{chatting:"primary",online:"success",busy:"warning",disconnected:"secondary",dnd:"danger"}[t]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:{$sort:{date:-1,status:-1},$limit:50}},e.next=3,t.$store.dispatch("rooms/find",n);case 3:case"end":return e.stop()}}),e)})))()}},f=(n(2152),n(11)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inbox_people"},[n("title-context",{attrs:{title:"Latest Chats",iconClass:"la la-ellipsis-v"}}),t._v(" "),n("div",{staticClass:"inbox_chat small-scroll p-1"},t._l(t.rooms,(function(e,i){return n("div",{key:i,staticClass:"chat_list "},[n("nuxt-link",{attrs:{to:"/admin/chat/"+e._id}},[n("div",{staticClass:"chat_people"},[n("div",{staticClass:"chat_img"},[n("img",{staticClass:"avatar",attrs:{src:"/img/user/"+e.avatar,alt:"sunil"}}),t._v(" "),n("span",{staticClass:"profile-status online-status pull-right",class:t.getClass(e.status)})]),t._v(" "),n("div",{staticClass:"chat_ib w-100"},[n("div",{staticClass:"d-flex w-100 "},[n("div",{staticClass:"flex-grow-1 font-weight-bold"},[t._v(t._s(e.fromName))]),t._v(" "),n("span",{staticClass:"text-11  chat_date"},[t._v(t._s(t.formatDate(e.date)))])]),t._v(" "),n("p",{staticClass:"text-theme3"},[t._v("\n                            "+t._s(t._f("truncate")(e.lastMessage,20,"..."))+"\n                        ")])])])])],1)})),0)],1)}),[],!1,null,"b2eced82",null);e.default=component.exports}}]);