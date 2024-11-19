webpackJsonp([1],{"+lR9":function(t,s){},MNF5:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},a,!1,function(t){e("g/TJ"),e("cRY2"),e("OoWv"),e("TA3T"),e("dvuH"),e("+lR9")},null,null).exports,r=e("/ocq"),l={data:function(){return{isVisible:!1,isHover:!1}},computed:{styleTop:function(){return{backgroundColor:this.isHover?"#ffffff":this.isVisible?"#00000060":"#1d1d1d",cursor:this.isVisible?"pointer":"not-allowed",opacity:this.isVisible?"1":"0.5"}}},methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll:function(){var t=window.pageYOffset;this.isVisible=t>0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll)}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("button",{staticClass:"scroll-to-top",style:t.styleTop,attrs:{disabled:!t.isVisible},on:{click:t.toTop,mouseenter:function(s){t.isHover=!0},mouseleave:function(s){t.isHover=!1}}},[e("i",{staticClass:"fas fa-caret-up tx-c c-black"})])])},staticRenderFns:[]},o=e("VU/8")(l,c,!1,null,null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"w-30 h-30",attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735896/sun_g7ttgc.svg",alt:""}})])}]},u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"w-30 h-30",attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735890/moon_oysvki.svg",alt:""}})])}]},f={components:{DarkButton:e("VU/8")(null,h,!1,null,null,null).exports,LightButton:e("VU/8")(null,u,!1,null,null,null).exports},data:function(){return{theme:localStorage.getItem("theme")||"light"}},watch:{theme:function(t){document.body.className=t,localStorage.setItem("theme",t)}},methods:{toggleTheme:function(){this.theme="light"===this.theme?"dark":"light"}},mounted:function(){document.body.className=this.theme}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"cursor"},[s("button",{on:{click:this.toggleTheme}},[s("light"===this.theme?"DarkButton":"LightButton",{tag:"component"})],1)])},staticRenderFns:[]},m=e("VU/8")(f,d,!1,null,null,null).exports,v=e("Dd8w"),p=e.n(v),_=e("9xAE"),g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"w-30 h-30 m-t-5",attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1724059045/e_qxvkan.png",alt:""}})])}]},C=e("VU/8")(null,g,!1,null,null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("img",{staticClass:"w-30 h-30 m-t-5",attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1724059046/v_sr1h12.png",alt:""}})])}]},x={components:{VietnamButton:e("VU/8")(null,b,!1,null,null,null).exports,EnglishButton:C},computed:p()({},Object(_.mapGetters)(["currentLanguage"]),{language:function(){return this.currentLanguage}}),methods:p()({},Object(_.mapMutations)(["setLanguage"]),{toggleLanguage:function(){this.setLanguage("en"===this.language?"vi":"en")}})},y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"cursor"},[s("button",{on:{click:this.toggleLanguage}},["en"===this.language?s("VietnamButton"):s("EnglishButton")],1)])])},staticRenderFns:[]},k={components:{Function_GoToTop:o,Function_ThemeSwitcher:m,Function_Translator:e("VU/8")(x,y,!1,null,null,null).exports}},w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"position-fixed fu-con fu-con-box p-1"},[s("div",{staticClass:"flex flex-column items-center gap-10"},[s("Function_GoToTop"),this._v(" "),s("Function_ThemeSwitcher"),this._v(" "),s("Function_Translator")],1)])])},staticRenderFns:[]},E=e("VU/8")(k,w,!1,null,null,null).exports,T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"bg-img m-b"})},staticRenderFns:[]},M=e("VU/8")(null,T,!1,null,null,null).exports,$=e("NYxO"),S={name:"AnimatedContent",mounted:function(){this.observer=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting&&t.target.classList.add("show")})}),this.$refs.contentRef&&this.observer.observe(this.$refs.contentRef)},beforeDestroy:function(){this.$refs.contentRef&&this.observer.unobserve(this.$refs.contentRef),this.observer&&this.observer.disconnect()}},R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"contentRef",staticClass:"a-c"},[this._t("default")],2)},staticRenderFns:[]},F=e("VU/8")(S,R,!1,null,null,null).exports,V={components:{AnimatedContent:F},computed:p()({},Object($.b)(["translations"]))},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"m-b",attrs:{id:"aboutMe"}},[s("AnimatedContent",[s("div",{staticClass:"flex flex-reverse gap-41 flex-column-2"},[s("p",{staticClass:"f-30 tx-center"},[this._v("\n                "+this._s(this.translations.aboutMe)+"\n            ")]),this._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737294/catYes_vafisx.gif",alt:""}})])])],1)},staticRenderFns:[]},N=e("VU/8")(V,A,!1,null,null,null).exports,B={components:{AnimatedContent:F},computed:p()({},Object(_.mapGetters)(["translations"]))},O={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"m-b",attrs:{id:"desire"}},[s("AnimatedContent",[s("div",{staticClass:"flex flex-reverse gap-41 flex-column-2"},[s("p",{staticClass:"f-30 tx-center"},[this._v("\n                "+this._s(this.translations.desire)+"\n            ")]),this._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735919/catYawn_tbpywt.gif",alt:""}})])])],1)},staticRenderFns:[]},z=e("VU/8")(B,O,!1,null,null,null).exports,U={computed:p()({},Object(_.mapGetters)(["translations"]))},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"f-30 tx-center m-as"},[e("ul",{staticClass:"flex flex-column"},[t._v(" \n        "+t._s(t.translations.mySkills)+"\n        "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("HTML/CSS:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("JS:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("VueJS:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("ReactJS:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("C#:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("PHP:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"flex gap flex-end"},[this._v("WordPress:\n            "),s("div",{staticClass:"flex"},[s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star checked"}),this._v(" "),s("span",{staticClass:"fa fa-star"}),this._v(" "),s("span",{staticClass:"fa fa-star"})])])}]},I={components:{Assessment:e("VU/8")(U,H,!1,null,null,null).exports,AnimatedContent:F}},q={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"m-b",attrs:{id:"mySkills"}},[s("AnimatedContent",[s("div",{staticClass:"flex space-between flex-column-2"},[s("Assessment"),this._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735953/catLearn_cyklvf.gif",alt:""}})],1)])],1)},staticRenderFns:[]},L=e("VU/8")(I,q,!1,null,null,null).exports,G={components:{AnimatedContent:F},computed:p()({},Object(_.mapGetters)(["translations"]))},W={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"m-b",attrs:{id:"otherThings"}},[e("AnimatedContent",[e("div",{staticClass:"flex flex-column items-center gap"},[e("p",{staticClass:"f-30 tx-center"},[t._v("\n                "+t._s(t.translations.otherThings)+"\n            ")]),t._v(" "),e("div",{staticClass:"flex gap"},[e("a",{attrs:{href:"https://github.com/DingoPham"}},[e("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737427/github-icon_cw4l1f.png",alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://www.facebook.com/dingopham.3"}},[e("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735889/facebook-icon_d1adza.webp",alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/DingoPham"}},[e("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735900/x-icon_r2t7p0.png",alt:""}})]),t._v(" "),e("a",{attrs:{href:"https://discord.gg/JKqGQPTN4f"}},[e("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735887/discord-icon_afyadp.png",alt:""}})])]),t._v(" "),e("p",{staticClass:"f-30 tx-center"},[t._v("\n                    "+t._s(t.translations.artworkSite)+"\n                ")]),t._v(" "),e("a",{attrs:{href:"/"}},[e("button",{staticClass:"bg-btn-color btn-color f-17"},[t._v("\n                    Artwork Site\n                ")])])])])],1)},staticRenderFns:[]},D=e("VU/8")(G,W,!1,null,null,null).exports,j={components:{AnimatedContent:F},computed:p()({},Object(_.mapGetters)(["translations"]))},J={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"m-b",attrs:{id:"thisWebsite"}},[s("AnimatedContent",[s("div",{staticClass:"flex gap-41 flex-column-2"},[s("p",{staticClass:"f-30 tx-center"},[this._v("\n                "+this._s(this.translations.thisWebsite)+"\n            ")]),this._v(" "),s("img",{attrs:{src:"https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735928/catNo_hdsqiy.gif",alt:""}})])])],1)},staticRenderFns:[]},P={components:{AboutMe:N,ThisWebsite:e("VU/8")(j,J,!1,null,null,null).exports,Desire:z,MySkills:L,OtherThings:D}},Y={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex flex-column p-6 m-3"},[s("AboutMe"),this._v(" "),s("ThisWebsite"),this._v(" "),s("Desire"),this._v(" "),s("MySkills"),this._v(" "),s("OtherThings")],1)},staticRenderFns:[]},K=e("VU/8")(P,Y,!1,null,null,null).exports,Q={components:{AnimatedContent:F},computed:p()({},Object(_.mapGetters)(["translations"]))},X={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex foot tx-c flex-column"},[s("AnimatedContent",[s("div",{staticClass:"p-2 flex flex-column"},[s("p",[this._v(this._s(this.translations.footer))]),this._v(" "),s("p",{staticClass:"f-30 flex space-between"},[this._v("pencibambo@gmail.com")])])])],1)},staticRenderFns:[]},Z=e("VU/8")(Q,X,!1,null,null,null).exports,tt={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container",on:{click:this.toggleChange}},[s("div",{staticClass:"bar1",class:{changeBar1:this.isChanged}}),this._v(" "),s("div",{staticClass:"bar2",class:{changeBar2:this.isChanged}}),this._v(" "),s("div",{staticClass:"bar3",class:{changeBar3:this.isChanged}})])},staticRenderFns:[]};var st={components:{NavbarIcon:e("VU/8")({data:function(){return{isChanged:!1}},methods:{toggleChange:function(){this.isChanged=!this.isChanged}}},tt,!1,function(t){e("MNF5")},"data-v-7d137684",null).exports},data:function(){return{isMenuOpen:!0}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen,document.body.classList.toggle("no-scroll",this.isMenuOpen)},closeMenu:function(){this.isMenuOpen=!1,document.body.classList.remove("no-scroll")}},mounted:function(){var t=function(t){t.preventDefault();var s=t.target.getAttribute("href");if("/"!==s){var e=s.substring(1),n=document.getElementById(e);if(n){var a=n.offsetTop-(window.innerHeight-n.offsetHeight)/2;window.scrollTo({top:a,behavior:"smooth"})}}else window.location.href=s},s=document.querySelectorAll("#navBar a");s.forEach(function(s){s.addEventListener("click",t)}),this.$once("hook:beforeDestroy",function(){s.forEach(function(s){s.removeEventListener("click",t)})})},computed:p()({},Object(_.mapGetters)(["translations"]))},et={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"navbar p-1 w-p-100",attrs:{id:"navBar"}},[e("div",{staticClass:"flex space-around navbar-container tx-c f-30"},[e("a",{attrs:{href:"/"}},[t._v("DINGOPHAM")]),t._v(" "),e("NavbarIcon",{on:{click:t.toggleMenu}}),t._v(" "),t.isMenuOpen?e("div",{staticClass:"overlay",on:{click:t.closeMenu}},[e("div",{staticClass:"flex gap navbar-links",on:{click:function(t){t.stopPropagation()}}},[e("a",{attrs:{href:"#aboutMe"},on:{click:t.closeMenu}},[t._v(t._s(t.translations.abtMe))]),t._v(" "),e("a",{attrs:{href:"#thisWebsite"},on:{click:t.closeMenu}},[t._v(t._s(t.translations.thisWeb))]),t._v(" "),e("a",{attrs:{href:"#desire"},on:{click:t.closeMenu}},[t._v(t._s(t.translations.des))]),t._v(" "),e("a",{attrs:{href:"#mySkills"},on:{click:t.closeMenu}},[t._v(t._s(t.translations.mySki))]),t._v(" "),e("a",{attrs:{href:"#otherThings"},on:{click:t.closeMenu}},[t._v(t._s(t.translations.otherThi))])])]):t._e()],1)])},staticRenderFns:[]},nt={name:"Home",components:{Navbar:e("VU/8")(st,et,!1,null,null,null).exports,Banner:M,BlogBody:K,Foot:Z,FuntionContainer:E}},at={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("header",[s("Navbar")],1),this._v(" "),s("Banner"),this._v(" "),s("BlogBody"),this._v(" "),s("FuntionContainer"),this._v(" "),s("footer",[s("Foot")],1)],1)},staticRenderFns:[]},it=e("VU/8")(nt,at,!1,null,null,null).exports;n.a.use(r.a);var rt=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:it}]});n.a.use($.a);var lt=new $.a.Store({state:{language:"en",translations:{en:{aboutMe:"My name is Dingo, I'm so glad you came here and discovered the wonders of my website.",thisWebsite:"This is my Blog made with VueJS, you can find more by joining me on my Artwork site below.",desire:"In the future, I will have more projects for myself or maybe with a group. But no matter what, I really want to make the most of what I have to achieve it.",mySkills:"My own assessment",otherThings:"- If you are interested, please join me via social networks below -",artworkSite:"- My artwork site -",abtMe:"ABOUT ME",thisWeb:"THIS WEBSITE",des:"DESIRE",mySki:"MY SKILLS",otherThi:"OTHER THINGS",footer:"If you have any questions, write to me via my gmail:"},vi:{aboutMe:"Tôi tên là Dingo, tôi rất vui vì bạn đã đến đây và khám phá những điều tuyệt vời trên trang web của tôi.",thisWebsite:"Đây là Blog của tôi được làm bằng VueJS, bạn có thể tìm hiểu thêm bằng cách tham gia trang Artwork của tôi bên dưới.",desire:"Trong tương lai, tôi sẽ có nhiều dự án hơn cho riêng mình hoặc có thể với một nhóm. Nhưng dù gì đi nữa, tôi thực sự muốn tận dụng tối đa những gì tôi có để đạt được điều đó.",mySkills:"Đánh giá của riêng tôi",otherThings:"- Nếu bạn quan tâm, hãy tham gia với tôi qua các mạng xã hội bên dưới -",artworkSite:"- Trang Artwork của tôi -",abtMe:"THÔNG TIN CÁ NHÂN",thisWeb:"TRANG WEB NÀY",des:"MÔ TẢ",mySki:"CÁC KỸ NĂNG",otherThi:"NHỮNG ĐIỀU KHÁC",footer:"Nếu bạn có bất cứ câu hỏi gì, hãy nhắn lại qua gmail của tôi:"}}},mutations:{setLanguage:function(t,s){t.language=s}},getters:{currentLanguage:function(t){return t.language},translations:function(t){return t.translations[t.language]}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:rt,components:{App:i},template:"<App/>",store:lt,render:function(t){return t(i)}}).$mount("#app")},OoWv:function(t,s){},TA3T:function(t,s){},cRY2:function(t,s){},dvuH:function(t,s){},"g/TJ":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.680f77d9b45bcf419b05.js.map