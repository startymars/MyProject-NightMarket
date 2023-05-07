import{H as k,F as x,c as V}from"./FooterView-51e6d304.js";import{p as h}from"./productStore-477ce63f.js";import{_ as S,m as T,h as v,a as d,o as c,d as _,i,f as t,w as n,t as o,F as p,j as m,q as C,v as I,n as g,b as D,p as N,e as B}from"./index-64ba6e17.js";import{N as E,S as F,d as A}from"./pagination.min-a54575bc.js";const{VITE_APP_URL:U,VITE_APP_PATH:H}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{detailProduct:[],productQty:1,modules:[E]}},components:{HeaderNav:k,FooterView:x,Swiper:F,SwiperSlide:A},watch:{"$route.params":{immediate:!0,handler(){this.DetailProduct(),window.scrollTo(0,0)}}},computed:{...T(h,["products"])},methods:{...v(h,["getProducts"]),...v(V,["addToCart"]),DetailProduct(){const{id:a}=this.$route.params;this.$http.get(`${U}/v2/api/${H}/product/${a}`).then(l=>{this.detailProduct=l.data.product}).catch(l=>{alert(l.response.data)})},changeBigImg(a){this.detailProduct.imageUrl=a}},mounted(){this.DetailProduct(),this.getProducts(),window.scrollTo(0,0)}},r=a=>(N("data-v-b58ff5a4"),a=a(),B(),a),j={class:"bg-secondary"},L={class:"container"},M={"aria-label":"breadcrumb",class:"pt-5 pb-5"},Q={class:"breadcrumb"},O={class:"breadcrumb-item"},q={class:"breadcrumb-item"},z={class:"breadcrumb-item active","aria-current":"page"},G={class:"row mx-auto mb-5"},J={class:"col-lg-5"},K={class:"mb-4"},W=["src","alt"],X={class:"mb-3"},Y=["src","alt","onClick"],Z={class:"col-lg-6 offset-lg-1"},$={class:"p-0"},tt={class:"h4 fw-bold mb-3"},et={class:"bg-light p-3"},st={class:"h5 fw-bold text-primary"},ot={class:"mx-2"},at=r(()=>t("hr",null,null,-1)),lt={class:"detailContext"},it={class:"mb-5"},ct={class:"row"},nt=r(()=>t("span",{class:"col-sm-2 col-form-label"},"數量：",-1)),rt={class:"col-sm-10"},dt=["value"],_t={class:"d-lg-flex justify-content-start"},ut=r(()=>t("nav",{class:"mt-5"},[t("div",{class:"nav nav-tabs d-flex justify-content-center align-items-center",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link active fs-5",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"}," 商家描述 "),t("button",{class:"nav-link fs-5",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}," 店家資訊 ")])],-1)),pt={class:"tab-content",id:"nav-tabContent"},mt={class:"tab-pane fade show active p-4",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},bt={class:"tab-pane fade p-4",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},ht={class:"recommend"},vt=r(()=>t("div",{class:"text-center h4 m-5"},"推薦美食",-1)),gt=r(()=>t("div",{class:"my-button-next"},[t("span",{class:"material-icons"}," arrow_circle_left ")],-1)),ft=r(()=>t("div",{class:"my-button-prev"},[t("span",{class:"material-icons"}," arrow_circle_right ")],-1)),Pt={class:"otherImg mb-4"},wt=["src"],yt={class:"otherTag p bg-black text-white px-3 py-1"},kt={class:"mt-2"},xt={class:"p-0 mb-5"};function Vt(a,l,St,Tt,e,b){const f=d("HeaderNav"),u=d("router-link"),P=d("swiper-slide"),w=d("swiper"),y=d("FooterView");return c(),_(p,null,[i(f,{class:"bg-black position-static"}),t("div",j,[t("div",L,[t("nav",M,[t("ol",Q,[t("li",O,[i(u,{to:"/"},{default:n(()=>[g("首頁")]),_:1})]),t("li",q,[i(u,{to:"/Food"},{default:n(()=>[g("美食報報")]),_:1})]),t("li",z,o(e.detailProduct.title),1)])]),t("div",G,[t("div",J,[t("div",K,[t("img",{class:"detailImg",src:e.detailProduct.imageUrl,alt:e.detailProduct.title},null,8,W)]),t("div",X,[(c(!0),_(p,null,m(e.detailProduct.imagesUrl,s=>(c(),_("img",{key:s+"1234",class:"detailSubImg me-1",src:s,alt:e.detailProduct.title,onClick:Ct=>b.changeBigImg(s)},null,8,Y))),128))])]),t("div",Z,[t("ul",$,[t("li",tt,o(e.detailProduct.title),1),t("li",et,[t("span",st,"NT$"+o(e.detailProduct.price),1),t("span",ot,[t("del",null,"原價$NT"+o(e.detailProduct.origin_price),1)])]),at,t("li",lt,[t("p",null,o(e.detailProduct.description),1),t("p",null,"分類："+o(e.detailProduct.category),1),t("p",null,"單位："+o(e.detailProduct.unit),1)])]),t("div",it,[t("div",ct,[nt,t("div",rt,[t("span",null,[C(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=s=>e.productQty=s)},[(c(),_(p,null,m(10,s=>t("option",{value:s,key:s+"12345"},o(s),9,dt)),64))],512),[[I,e.productQty]])])])])]),t("div",_t,[t("button",{class:"btn btn-outline-primary px-5 py-3 me-3 fw-bold",type:"button",onClick:l[1]||(l[1]=s=>a.addToCart(e.detailProduct.id,e.productQty))}," 加入購物車 "),i(u,{to:"/Cart"},{default:n(()=>[t("button",{class:"btn btn-primary px-5 py-3 fw-bold",type:"button",onClick:l[2]||(l[2]=s=>a.addToCart(e.detailProduct.id,1))}," 直接購買 ")]),_:1})])])]),ut,t("div",pt,[t("div",mt,o(e.detailProduct.description),1),t("div",bt,o(e.detailProduct.content),1)]),t("div",ht,[vt,i(w,{slidesPerView:1,breakpoints:{580:{spaceBetween:20,slidesPerView:2},992:{spaceBetween:20,slidesPerView:3},1205:{slidesPerView:4}},spaceBetween:-20,loop:!0,navigation:{nextEl:".my-button-next",prevEl:".my-button-prev",click:!0},modules:e.modules,class:"mySwiper"},{default:n(()=>[gt,ft,(c(!0),_(p,null,m(a.products,s=>(c(),D(P,{key:s.id},{default:n(()=>[t("div",null,[t("div",Pt,[i(u,{to:`/FoodDetail/${s.id}`,onClick:b.DetailProduct},{default:n(()=>[t("img",{src:s.imageUrl,alt:"推薦美食"},null,8,wt)]),_:2},1032,["to","onClick"]),t("div",yt,o(s.category),1)]),t("div",null,[t("h5",kt,o(s.title),1),t("p",xt," NT$ "+o(s.price),1)])])]),_:2},1024))),128))]),_:1},8,["navigation","modules"])])])]),i(y)],64)}const Et=S(R,[["render",Vt],["__scopeId","data-v-b58ff5a4"]]);export{Et as default};