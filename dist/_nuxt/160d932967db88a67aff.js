(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{2044:function(t,e,r){var content=r(2049);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20437176",content,!0,{sourceMap:!1})},2045:function(t,e,r){var content=r(2052);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("d4b4abde",content,!0,{sourceMap:!1})},2046:function(t,e,r){var content=r(2056);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("4952c709",content,!0,{sourceMap:!1})},2047:function(t,e,r){"use strict";var n={props:{title:{default:"Title"},subTitle:{default:"Subtitle"}}},o=(r(2048),r(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex w-100"},[r("div",{staticClass:"mr-auto"},[r("h4",{staticClass:"card-title text-theme1 "},[t._v(t._s(t.title))]),t._v(" "),r("h6",{staticClass:"card-subtitle text-theme1 mixed-1 mb-0 op-5"},[t._v(t._s(t.subTitle))])]),t._v(" "),r("div",{staticClass:"right-bar my-auto text-theme1"},[t._t("default",[r("b-dropdown",{attrs:{id:"dropdown-1","no-caret":"","toggle-class":"my-auto inverse ig-ghost btn-center btn-square",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("i",{staticClass:"fas fa-ellipsis-h"})]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",[t._v("First Action")]),t._v(" "),r("b-dropdown-item",[t._v("Second Action")]),t._v(" "),r("b-dropdown-item",[t._v("Third Action")])],1)])],2)])}),[],!1,null,"6b8b71cc",null);e.a=component.exports},2048:function(t,e,r){"use strict";var n=r(2044);r.n(n).a},2049:function(t,e,r){(e=r(15)(!1)).push([t.i,".right-bar i[data-v-6b8b71cc]{font-size:14px}.right-bar[data-v-6b8b71cc]{display:flex}.right-bar>.btn-group[data-v-6b8b71cc],.right-bar>.dropdown[data-v-6b8b71cc],.right-bar>button[data-v-6b8b71cc]{margin:0 .2rem}.right-bar>.btn-group[data-v-6b8b71cc]:last-child,.right-bar>.dropdown[data-v-6b8b71cc]:last-child,.right-bar>button[data-v-6b8b71cc]:last-child{margin:0 0 0 .2rem}",""]),t.exports=e},2051:function(t,e,r){"use strict";var n=r(2045);r.n(n).a},2052:function(t,e,r){(e=r(15)(!1)).push([t.i,".img-footer[data-v-616d0a66]{height:30px;width:30px;margin-right:5px}",""]),t.exports=e},2054:function(t,e,r){"use strict";var n={components:{SvgIcon:r(63).a}},o=(r(2051),r(11)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-theme1inv py-4 ig-p-1 ig-rounded shadow-1 mb-2 text-secondary"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"ml-2"},[e("strong",[this._v("Version")]),this._v(" 1.0")])])])}],!1,null,"616d0a66",null);e.a=component.exports},2055:function(t,e,r){"use strict";var n=r(2046);r.n(n).a},2056:function(t,e,r){(e=r(15)(!1)).push([t.i,".card[data-v-423d57c9]{margin-bottom:2rem}.card-body[data-v-423d57c9]{padding-bottom:2rem}",""]),t.exports=e},2057:function(t,e,r){"use strict";var n={components:{CardTitle:r(2047).a},props:["title","subTitle"],data:function(){return{currentIdx:0}}},o=(r(2055),r(11)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[this._t("default")],2)],1)}),[],!1,null,"423d57c9",null);e.a=component.exports},2168:function(t,e,r){"use strict";r.r(e);var n=r(46),o=(r(215),r(2054)),c=r(288),l=r(2057),d=(r(8),r(5),r(4),r(3),r(6),r(0));function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={layout:"admin",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.d)({detail:function(t){return t.startups.startupdetail},contact:function(t){return t.startups.contactdetail},model:function(t){return t.startups.businessmodel},product:function(t){return t.startups.productdetail},cofounder:function(t){return t.startups.cofounderdetail},startupteam:function(t){return t.startups.startupteam},loader:function(t){return t.startups.loader},approveloader:function(t){return t.startups.approveloader},basic:function(t){return t.startups.startupbasic},startups:function(t){return t.startups.startups}})),created:function(){this.getBasicDetails()},methods:{getBasicDetails:function(){this.startups||this.$store.dispatch("startups/getAllStartups"),this.$store.commit("startups/getBasic",this.$route.params.id)},getDetails:function(){this.$store.dispatch("startups/getDetails",this.$route.params.id)},contactDetails:function(){this.$store.dispatch("startups/getContacts",this.$route.params.id)},businessModel:function(){this.$store.dispatch("startups/businessModel",this.$route.params.id)},productDetails:function(){this.$store.dispatch("startups/productDetails",this.$route.params.id)},cofounderDetails:function(){this.$store.dispatch("startups/cofounderDetails",this.$route.params.id)},startupTeam:function(){this.$store.dispatch("startups/startupTeam",this.$route.params.id)},approveStartup:function(){this.$store.dispatch("startups/approveStartup",this.$route.params.id)}}},m=r(11),h=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t.basic?r("div",{staticClass:"col-md-12"},[!1===t.basic.approved?r("button",{staticClass:"btn btn-danger",attrs:{disabled:t.approveloader},on:{click:t.approveStartup}},[t._v("\n        Approve Startup\n        "),t.approveloader?r("span",[r("img",{attrs:{src:"/img/loader.svg",alt:"loader"}})]):t._e()]):t._e()]):t._e(),t._v(" "),r("b-tabs",{attrs:{pills:"",card:"",vertical:""}},[r("b-tab",{attrs:{title:"Basic Detail",active:""},on:{click:t.getBasicDetails}},[r("h4",[t._v("Basic Details")]),t._v(" "),t.loader&&!t.basic?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.basic?r("div",[r("p",[t._v("\n            Completed Registation\n            "),r("strong",[t._v(t._s(t.basic.registration_is_complete))])]),t._v(" "),r("p",[t._v("\n            Approved\n            "),r("strong",[t._v(t._s(t.basic.approved))])]),t._v(" "),r("p",[t._v("\n            Caption : "),r("strong",[t._v(t._s(t.basic.caption))])]),t._v(" "),r("p",[t._v("\n            Company Name: "),r("strong",[t._v(t._s(t.basic.company_name))])]),t._v(" "),r("p",[t._v("\n            Duration for fund raise\n            "),r("strong",[t._v(t._s(t.basic.duration_for_raise))])]),t._v(" "),r("p",[t._v("\n            Amount to raise "),r("strong",[t._v(t._s(t.basic.funds_to_raise))])]),t._v(" "),r("p",[t._v("\n            Product image\n            "),r("strong",[r("a",{attrs:{href:t.basic.product_image,target:"_blank"}},[t._v("Open product image")])])])]):t._e()]),t._v(" "),r("b-tab",{staticClass:"custom-pill",attrs:{title:"Startup Detail"},on:{click:t.getDetails}},[r("h4",[t._v("Startup Details")]),t._v(" "),t.loader&&!t.detail?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.detail?r("div",[r("p",[t._v("\n            Business Registration Number:\n            "),r("strong",[t._v(t._s(t.detail.business_registration_number))])]),t._v(" "),r("p",[t._v("\n            Has Patend : "),r("strong",[t._v(t._s(t.detail.has_patent))])]),t._v(" "),r("p",[t._v("\n            Location: "),r("strong",[t._v(t._s(t.detail.location))])]),t._v(" "),r("p",[t._v("\n            Industry: "),r("strong",[t._v(t._s(t.detail.startup_industry))])]),t._v(" "),r("p",[t._v("\n            Type: "),r("strong",[t._v(t._s(t.detail.startup_type))])])]):t._e()]),t._v(" "),r("b-tab",{staticClass:"custom-pill",attrs:{title:"Contact Details"},on:{click:t.contactDetails}},[r("h4",[t._v("Contact Details")]),t._v(" "),t.loader&&!t.contact?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),r("b-card-text",[t.contact?r("div",[r("p",[t._v("\n              Email: "),r("strong",[t._v(t._s(t.contact.email))])]),t._v(" "),r("p",[t._v("\n              Phone: "),r("strong",[t._v(t._s(t.contact.phone))])]),t._v(" "),r("p",[t._v("\n              Facebook Handle: "),r("strong",[t._v(t._s(t.contact.facebook_handle))])]),t._v(" "),r("p",[t._v("\n              Instagram Handle:\n              "),r("strong",[t._v(t._s(t.contact.instagram_handle))])]),t._v(" "),r("p",[t._v("\n              Linkedin Handle: "),r("strong",[t._v(t._s(t.contact.linkedin_handle))])]),t._v(" "),r("p",[t._v("\n              Skype Handle: "),r("strong",[t._v(t._s(t.contact.skype_handle))])])]):t._e()])],1),t._v(" "),r("b-tab",{attrs:{title:"Business Model"},on:{click:t.businessModel}},[r("h4",[t._v("Business Model")]),t._v(" "),t.loader&&!t.model?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.model?r("div",[r("p",[t._v("\n            Key Resources: "),r("strong",[t._v(t._s(t.model.key_resources))])]),t._v(" "),r("p",[t._v("\n            Custormer Target: "),r("strong",[t._v(t._s(t.model.cutomer_target))])]),t._v(" "),r("p",[t._v("\n            Value Proposition: "),r("strong",[t._v(t._s(t.model.value_proposition))])]),t._v(" "),r("p",[t._v("\n            Sales Channel: "),r("strong",[t._v(t._s(t.model.sales_channels))])]),t._v(" "),r("p",[t._v("\n            Revenue Streams: "),r("strong",[t._v(t._s(t.model.revenue_streams))])]),t._v(" "),r("p",[t._v("\n            Key Metrics: "),r("strong",[t._v(t._s(t.model.key_metrics))])]),t._v(" "),r("p",[t._v("\n            Cost Structure: "),r("strong",[t._v(t._s(t.model.cost_structure))])]),t._v(" "),r("p",[t._v("\n            Financial File:\n            "),r("strong",[r("a",{attrs:{href:t.model.financial_file}},[t._v("Open Financial File")])])]),t._v(" "),r("p",[t._v("\n            Optional File:\n            "),r("strong",[r("a",{attrs:{href:t.model.optional_file}},[t._v("Open optional file")])])])]):t._e()]),t._v(" "),r("b-tab",{attrs:{title:"Product Detail"},on:{click:t.productDetails}},[r("h4",[t._v("Startup Team")]),t._v(" "),t.loader&&!t.product?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.product?r("div",[r("p",[t._v("\n            Product Progress: "),r("strong",[t._v(t._s(t.product.product_progress))])]),t._v(" "),r("p",[t._v("\n            Product Url:\n            "),r("strong",[r("a",{attrs:{href:t.product.product_url,target:"_blank"}},[t._v(t._s(t.product.product_url))])])])]):t._e()]),t._v(" "),r("b-tab",{attrs:{title:"Cofounder Detail"},on:{click:t.cofounderDetails}},[r("b-card-text",[r("h4",[t._v("Cofounder Detail")]),t._v(" "),t.loader&&!t.cofounder?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.cofounder?r("div",[r("p",[t._v("\n              Funding Amount: "),r("strong",[t._v(t._s(t.cofounder.funding_amount))])]),t._v(" "),r("p",[t._v("\n              Rate of devotion:\n              "),r("strong",[t._v(t._s(t.cofounder.rate_of_devotion))])]),t._v(" "),r("hr"),t._v(" "),r("h4",[t._v("Cofounders")]),t._v(" "),r("table",{staticClass:"table table-striped"},[r("thead",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Email")]),t._v(" "),r("th",[t._v("Role")])]),t._v(" "),r("thead",t._l(t.cofounder.cofounders.data,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.email))]),t._v(" "),r("td",[t._v(t._s(e.cofounder_role))])])})),0)])]):t._e()])],1),t._v(" "),r("b-tab",{attrs:{title:"Strtup Team"},on:{click:t.startupTeam}},[r("h4",[t._v("Startup Team")]),t._v(" "),t.loader&&!t.startupteam?r("div",{staticStyle:{"text-align":"center"}},[r("img",{staticClass:"loader-big",attrs:{width:"100",src:"/img/loader.svg",alt:"loader"}})]):t._e(),t._v(" "),t.startupteam?r("div",[r("table",{staticClass:"table"},[r("thead",[r("th",[t._v("Team Name")]),t._v(" "),r("th",[t._v("Team Description")]),t._v(" "),r("th",[t._v("Name")])]),t._v(" "),r("thead",t._l(t.startupteam,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.business_team_name))]),t._v(" "),r("td",[t._v(t._s(e.business_team_description))]),t._v(" "),r("td",[t._v(t._s(e.name))])])})),0)])]):t._e()])],1)],1)])}),[],!1,null,null,null).exports,f={layout:"admin",components:{PageFooter:o.a,TitlePage:c.a,CardComponent:l.a,StartupDetails:h},meta:{page:{showBreadcrumb:!0,titleBreadcrumb:"Details of startup"}}},y=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dashboard"},[e("card-component",[e("div",{staticClass:"container-fluid"}),this._v(" "),e("br"),this._v(" "),e("b-container",{attrs:{fluid:""}},[e("startup-details")],1)],1)],1)}),[],!1,null,null,null);e.default=y.exports}}]);