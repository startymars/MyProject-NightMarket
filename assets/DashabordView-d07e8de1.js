import{_ as d,a as c,o as r,d as l,f as e,i as o,w as i,n as x,p as h,e as p,R as w,F as V}from"./index-5f84bd89.js";const b={methods:{logout(){document.cookie=`week2Token=;expires=${new Date};`,this.$router.push("/")}}},m=s=>(h("data-v-2c91e309"),s=s(),p(),s),g={class:"navbar navbar-light bg-secondary"},A={class:"container-fluid"},I=m(()=>e("span",{class:"fw-bold text-black p-2"},"熊好呷-夜市美食一把罩後台管理",-1)),N={class:"d-flex"},P=m(()=>e("div",{class:"user px-3"},"Cream",-1)),R={class:"logout"};function E(s,a,n,f,v,u){const _=c("router-link");return r(),l("nav",g,[e("div",A,[I,e("div",N,[P,e("div",R,[o(_,{to:"/",onClick:u.logout,class:"text-decoration-none"},{default:i(()=>[x("登出")]),_:1},8,["onClick"])])])])])}const L=d(b,[["render",E],["__scopeId","data-v-2c91e309"]]);const S={},t=s=>(h("data-v-345fb531"),s=s(),p(),s),T={class:"main-menu"},y=t(()=>e("i",{class:"fa fa-utensils"},null,-1)),C=t(()=>e("span",{class:"nav-text"}," 美食管理",-1)),D={class:"has-subnav"},H=t(()=>e("i",{class:"fa fa-truck-fast"},null,-1)),B=t(()=>e("span",{class:"nav-text"}," 訂單管理 ",-1)),F={class:"has-subnav"},M=t(()=>e("i",{class:"fa fa-comments"},null,-1)),O=t(()=>e("span",{class:"nav-text"}," 最新消息管理 ",-1)),U=t(()=>e("li",{class:"has-subnav"},[e("a",{href:"#"},[e("i",{class:"fa fa-ticket"}),e("span",{class:"nav-text"}," 優惠券管理 ")])],-1)),j=t(()=>e("ul",{class:"logout"},[e("li",null,[e("a",{href:"/"},[e("i",{class:"fa fa-house"}),e("span",{class:"nav-text"}," 回前台 ")])])],-1));function z(s,a){const n=c("router-link");return r(),l("nav",T,[e("ul",null,[e("li",null,[o(n,{to:"/admin/adminFood"},{default:i(()=>[y,C]),_:1})]),e("li",D,[o(n,{to:"/admin/adminOrder"},{default:i(()=>[H,B]),_:1})]),e("li",F,[o(n,{to:"/admin/adminNews"},{default:i(()=>[M,O]),_:1})]),U]),j])}const q=d(S,[["render",z],["__scopeId","data-v-345fb531"]]),{VITE_APP_URL:G}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},J={methods:{checkLogin(){console.log("檢查");const s=document.cookie.replace(/(?:(?:^|.*;\s*)week2Token\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.$http.post(`${G}/v2/api/user/check`).then(a=>{a.data.success||this.$router.push("/Login")}).catch(a=>{alert(a.response.data.message),this.$router.push("/Login")})}},mounted(){this.checkLogin()},components:{RouterView:w,AdminHeaderView:L,AdminNavbarView:q}};function K(s,a,n,f,v,u){const _=c("AdminHeaderView"),$=c("AdminNavbarView"),k=c("RouterView");return r(),l(V,null,[o(_),o($),o(k)],64)}const W=d(J,[["render",K]]);export{W as default};