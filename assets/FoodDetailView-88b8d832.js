import{H as V,F as T,c as C}from"./FooterView-7986cdbf.js";import{p as m}from"./productStore-50c4baa7.js";import{bs as S,br as x,bt as h,aG as c,at as n,p as d,y as i,q as t,bk as r,aU as a,bm as D,ba as N,F as _,aE as v,x as f,n as F,ad as I,ax as E,au as L}from"./index-1754f54d.js";import{N as A,S as B,d as U}from"./pagination.min-b4313fa9.js";import"./_commonjsHelpers-87174ba5.js";const{VITE_APP_URL:H,VITE_APP_PATH:M}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{detailProduct:[],productQty:1,modules:[A],showLabel:!0}},components:{HeaderNav:V,FooterView:T,Swiper:B,SwiperSlide:U},watch:{"$route.params":{immediate:!0,handler(){this.DetailProduct(),window.scrollTo(0,0)}}},computed:{...x(m,["products"])},methods:{...h(m,["getProducts"]),...h(C,["addToCart"]),DetailProduct(){console.log("22222",this.$route.params);const{id:l}=this.$route.params;this.$http.get(`${H}/v2/api/${M}/product/${l}`).then(o=>{console.log("取得該產品id",o.data.product),this.detailProduct=o.data.product}).catch(o=>{alert(o.response.data)})}},mounted(){this.DetailProduct(),this.getProducts(),window.scrollTo(0,0)}},u=l=>(E("data-v-66972039"),l=l(),L(),l),Q={class:"bg-secondary"},j={class:"container"},O={"aria-label":"breadcrumb",class:"pt-5 pb-5"},q={class:"breadcrumb"},z={class:"breadcrumb-item"},G={class:"breadcrumb-item"},J={class:"breadcrumb-item active","aria-current":"page"},K={class:"row mx-auto mb-5"},W={class:"col-lg-5"},X=["src","alt"],Y={class:"col-lg-6 offset-lg-1"},Z={class:"p-0"},$={class:"h4 mb-3"},tt={class:"bg-light p-3"},et={class:"h5 fw-bold text-primary"},ot={class:"mx-2"},st=u(()=>t("hr",null,null,-1)),at={class:"detailContext"},lt={class:"mb-5"},it={class:"row"},nt=u(()=>t("span",{class:"col-sm-2 col-form-label"},"數量：",-1)),rt={class:"col-sm-10"},ct=["value"],dt={class:"d-lg-flex justify-content-start"},pt=u(()=>t("nav",{class:"mt-5"},[t("div",{class:"nav nav-tabs d-flex justify-content-center align-items-center",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active fs-5",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"}," 商家描述 "),t("button",{class:"nav-link fs-5",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}," 店家資訊 ")])],-1)),ut={class:"tab-content",id:"nav-tabContent"},_t={class:"tab-pane fade show active p-4",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},bt={class:"tab-pane fade p-4",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},mt={class:"recommend"},ht=u(()=>t("div",{class:"text-center h4 m-5"},"推薦美食",-1)),vt={class:"otherImg mb-4"},ft=["src"],gt={class:"otherTag p bg-black text-white px-3 py-1"},wt={class:"mt-2"},Pt=["onClick"];function yt(l,o,kt,Vt,e,g){const w=c("HeaderNav"),p=c("router-link"),P=c("swiper-slide"),y=c("swiper"),k=c("FooterView");return n(),d(_,null,[i(w,{class:"bg-black position-static"}),t("div",Q,[t("div",j,[t("nav",O,[t("ol",q,[t("li",z,[i(p,{to:"/"},{default:r(()=>[f("首頁")]),_:1})]),t("li",G,[i(p,{to:"/Food"},{default:r(()=>[f("美食報報")]),_:1})]),t("li",J,a(e.detailProduct.title),1)])]),t("div",K,[t("div",W,[t("img",{class:"detailImg",src:e.detailProduct.imageUrl,alt:e.detailProduct.title},null,8,X)]),t("div",Y,[t("ul",Z,[t("li",$,a(e.detailProduct.title),1),t("li",tt,[t("span",et,"NT$"+a(e.detailProduct.price),1),t("span",ot,[t("del",null,"原價$NT"+a(e.detailProduct.origin_price),1)])]),st,t("li",at,[t("p",null,a(e.detailProduct.description),1),t("p",null,"分類："+a(e.detailProduct.category),1),t("p",null,"單位："+a(e.detailProduct.unit),1)])]),t("div",lt,[t("div",it,[nt,t("div",rt,[t("span",null,[D(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=s=>e.productQty=s)},[(n(),d(_,null,v(10,s=>t("option",{value:s,key:s+"12345"},a(s),9,ct)),64))],512),[[N,e.productQty]])])])])]),t("div",dt,[t("button",{class:"btn btn-outline-primary px-5 py-3 me-3 fw-bold",type:"button",onClick:o[1]||(o[1]=s=>l.addToCart(e.detailProduct.id,e.productQty))}," 加入購物車 "),i(p,{to:"/Cart"},{default:r(()=>[t("button",{class:"btn btn-primary px-5 py-3 fw-bold",type:"button",onClick:o[2]||(o[2]=s=>l.addToCart(e.detailProduct.id,1))}," 直接購買 ")]),_:1})])])]),pt,t("div",ut,[t("div",_t,a(e.detailProduct.description),1),t("div",bt,a(e.detailProduct.content),1)]),t("div",mt,[ht,i(y,{slidesPerView:1,breakpoints:{567:{spaceBetween:40,slidesPerView:2},992:{spaceBetween:40,slidesPerView:3},1205:{slidesPerView:4}},spaceBetween:20,loop:!0,navigation:{clickable:l.ture},modules:e.modules,class:"mySwiper"},{default:r(()=>[(n(!0),d(_,null,v(l.products,s=>(n(),F(P,{key:s.id},{default:r(()=>[t("div",null,[t("div",vt,[i(p,{to:`/FoodDetail/${s.id}`,onClick:g.DetailProduct},{default:r(()=>[t("img",{src:s.imageUrl,alt:"推薦美食"},null,8,ft)]),_:2},1032,["to","onClick"]),t("div",gt,a(s.category),1)]),t("div",null,[t("h5",wt,a(s.title),1),e.showLabel?(n(),d("p",{key:0,class:I(["p-0 mb-5",{hovered:e.showLabel}]),onMouseover:o[3]||(o[3]=b=>e.showLabel=!1)}," NT$ "+a(s.price),35)):(n(),d("button",{key:1,type:"button",class:"btn btn-primary",onClick:b=>l.addToCart(s.id,1),onMouseleave:o[4]||(o[4]=b=>e.showLabel=!0)}," 加入購物車 ",40,Pt))])])]),_:2},1024))),128))]),_:1},8,["navigation","modules"])])])]),i(k)],64)}const Nt=S(R,[["render",yt],["__scopeId","data-v-66972039"]]);export{Nt as default};