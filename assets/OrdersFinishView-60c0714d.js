import{H as l,F as _}from"./FooterView-7986cdbf.js";import{bs as h,aG as r,at as m,p,y as a,q as e,aU as s,bk as b,F as u,w as g}from"./index-1754f54d.js";import"./_commonjsHelpers-87174ba5.js";const{VITE_APP_URL:v,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{order:{}}},components:{HeaderNav:l,FooterView:_},watch:{"$route.params":{immediate:!0,handler(){this.getOrder()}}},methods:{getOrder(){const{id:c}=this.$route.params;this.$http.get(`${v}/v2/api/${f}/order/${c}`).then(o=>{console.log(o.data),this.order=o.data,console.log(this.order)}).catch(o=>{console.log(o.data)})}},mounted(){console.log(this.order)}},V={class:"bg-secondary"},w={class:"container"},y=g('<nav aria-label="breadcrumb" class="pt-5 pb-5"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">首頁</a></li><li class="breadcrumb-item active" aria-current="page">訂單確認</li></ol></nav>',1),k={class:"row justify-content-center align-items-center text-center"},x=e("div",{class:"col-12 mb-5"},[e("div",{class:"h3 fw-bold"},"訂單完成")],-1),E={class:"col-12 border border-dark mb-5",style:{width:"50%",height:"80%"}},A={class:"text-start p-4"},F={class:"mb-3"},N={class:"mb-3"},H={class:"mb-3"},T={class:"mb-3"},O={class:"mb-3"},R={class:"mb-3"},S={class:"col-12 mb-5"},$=e("button",{type:"button",class:"btn btn-primary px-5 py-3"}," 回首頁 ",-1);function B(c,o,D,I,t,U){const i=r("HeaderNav"),n=r("router-link"),d=r("FooterView");return m(),p(u,null,[a(i,{class:"bg-black position-static"}),e("div",V,[e("div",w,[y,e("div",k,[x,e("div",E,[e("ul",A,[e("li",F,"訂單編號："+s(t.order.order.id),1),e("li",N,"收件人："+s(t.order.order.user.name),1),e("li",H,"收件地址："+s(t.order.order.user.address),1),e("li",T,"聯絡電話："+s(t.order.order.user.tel),1),e("li",O,"總金額：$"+s(t.order.order.total),1),e("li",R,"備註："+s(t.order.order.message),1)])]),e("div",S,[a(n,{to:"/"},{default:b(()=>[$]),_:1})])])])]),a(d)],64)}const C=h(P,[["render",B]]);export{C as default};