webpackJsonp([1],{Fdvk:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("IvJb"),n=e("aozt"),i=e.n(n),l=e("L7Pj"),r=e.n(l),o={name:"App",data:function(){return{title:"",titles:[]}},mounted:function(){var t=this;i.a.get("http://47.107.36.143/api/demo/test").then(function(a){var e="",s="",n={str:""};a.data.success.forEach(function(a){var i=a.name,l=a.code,r=a.parent,o=a.url;null==r?(t.title+='<a class="navbar-brand" href="#">'+i+"</a>",console.log("parent:"+i),e=l,n.str=null):null==o?(s=l,console.log("parent:"+e+",s_title:"+s),s=l):(console.log("parent:"+e+",s_title:"+s+",this:"+o),n.str="parent:"+e+",s_title:"+s+",this:"+o),null!=n.str&&""!=n.str&&t.titles.push(n.str)}),console.log(t.titles)}).catch(function(t){})},methods:{}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"panel panel-default"},[e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("JeffreyTech")]),t._v(" "),e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("div",{staticClass:"title_div",domProps:{innerHTML:t._s(t.title)}})])])])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"col-xs-10"},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"}),this._v(" "),a("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-xs-2"},[e("div",{staticClass:"panel panel-primary",attrs:{id:"left-panel"}},[e("div",[e("nav",[e("div",{staticClass:"logo",attrs:{id:"logo-div"}}),t._v(" "),e("div",{},[e("ul",{staticClass:"nav nav-pills nav-stacked"},[e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right inactive",attrs:{href:""}},[t._v(" 计算机")]),t._v(" "),e("ul",{staticClass:"nav nav-pills nav-stacked",staticStyle:{display:"none"}},[e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right",attrs:{href:""}},[t._v(" -- 台式机")])]),t._v(" "),e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right",attrs:{href:""}},[t._v(" -- 笔记本")])]),t._v(" "),e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right",attrs:{href:""}},[t._v(" -- 掌上电脑")])])])]),t._v(" "),e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right inactive",attrs:{href:""}},[t._v(" 数码产品")]),t._v(" "),e("ul",{staticClass:"nav nav-pills nav-stacked",staticStyle:{display:"none"}},[e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right",attrs:{href:""}},[t._v(" -- 数码照相机")])]),t._v(" "),e("li",[e("a",{staticClass:"glyphicon glyphicon-menu-right",attrs:{href:""}},[t._v(" -- 数码摄像机")])])])])])])])])])])}]};var v=e("vSla")(o,c,!1,function(t){e("Fdvk")},null,null).exports,h=e("zO6J"),u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),e("br"),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var p=e("vSla")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){e("tR3L")},"data-v-882a5e0a",null).exports,_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"home"},[a("p",[this._v("Hello World! "+this._s(this.msg))]),this._v(" "),a("button",{on:{click:this.greet}},[this._v("点击")])])},staticRenderFns:[]},d=e("vSla")({data:function(){return{msg:"Welcome To My HomePage!"}},methods:{greet:function(){this.$router.push({path:"/second"})}}},_,!1,null,null,null).exports,f={mounted:function(){r()("#jj").click(function(){alert("111")})},methods:{}},g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"second"},[a("p",{staticClass:"dd"},[this._v("Second Page!")]),this._v(" "),a("button",{attrs:{id:"jj"}},[this._v("点击")])])}]},m=e("vSla")(f,g,!1,null,null,null).exports;s.a.use(h.a);var b=new h.a({routes:[{path:"/",name:"HelloWorld",component:p},{path:"/home",name:"Home",component:d},{path:"/second",name:"Second",component:m}]});e("a0pE");s.a.config.productionTip=!1,s.a.prototype.$ajax=i.a,s.a.prototype.HOST="/api",new s.a({el:"#app",router:b,components:{App:v},template:"<App/>"})},a0pE:function(t,a){},tR3L:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.c5634a8a8014aa80c113.js.map