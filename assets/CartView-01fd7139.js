import{H as S,F as I,S as h,c as p}from"./FooterView-f0d4aed6.js";import{_ as T,m as g,h as P,a as m,o as l,d as i,i as u,f as t,w as b,F as f,j as w,n as k,q as x,H as B,t as r,I as N,J as j,v as A,p as E,e as D}from"./index-5f84bd89.js";const{VITE_APP_URL:v,VITE_APP_PATH:C}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},H={data(){return{coupon:""}},components:{HeaderNav:S,FooterView:I},computed:{...g(p,["carts"]),...g(p,["cartStatus"])},methods:{...P(p,["getCarts"]),updateCartItem(e){const o={product_id:e.product.id,qty:e.qty};this.$http.put(`${v}/v2/api/${C}/cart/${e.id}`,{data:o}).then(d=>{d.data&&h.fire({title:"產品已更新",icon:"success",showConfirmButton:!0,showCancelButton:!0}).then(y=>{y.isConfirmed&&this.getCarts()})}).catch(d=>{alert(d.data)})},deleteCartItem(e){this.$http.delete(`${v}/v2/api/${C}/cart/${e}`).then(o=>{o.data&&h.fire({title:"Delete!",text:"產品已刪除",icon:"success",showConfirmButton:!0,showCancelButton:!0}).then(d=>{d.isConfirmed&&this.getCarts()})}).catch(o=>{console.dir(o.data)})},deleteCarts(){this.$http.delete(`${v}/v2/api/${C}/carts`).then(e=>{e.data&&h.fire({title:"購物車品項已刪除",icon:"success",showConfirmButton:!0,showCancelButton:!0}).then(o=>{o.isConfirmed&&this.getCarts()})}).catch(e=>{alert(e.data.message)})},useCoupon(){console.log("取得優惠券",this.coupon)}},mounted(){this.getCarts(),window.scrollTo(0,0)}},a=e=>(E("data-v-5500f0ed"),e=e(),D(),e),U=a(()=>t("div",{class:"newBanner d-flex justify-content-center align-items-center"},[t("div",{class:"newsTitle"},"購物車")],-1)),F={class:"bg-secondary"},q={class:"container"},L={class:"cartClear d-flex justify-content-between align-items-center"},M={"aria-label":"breadcrumb",class:"pt-5 pb-5"},R={class:"breadcrumb"},O={class:"breadcrumb-item"},z=a(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1)),J={class:"text-end mb-3"},G={class:"row"},K={key:0,class:"col-lg-8 mb-3"},Q={class:"table"},W=a(()=>t("thead",null,[t("tr",null,[t("th",{class:"col"}),t("th",{class:"col"},"圖片"),t("th",{class:"col"},"商品名稱"),t("th",{class:"col"},"價格"),t("th",{class:"col"},"數量"),t("th",{class:"col"},"總價")])],-1)),X=["onClick"],Y=["onClick"],Z={style:{width:"150px"}},tt={class:"fs-6 fw-bold"},et={class:"input-group input-group-sm"},st=["onUpdate:modelValue","onChange"],ot=["value"],at={key:1,class:"col-12 d-flex p-5 mb-5 justify-content-center align-items-center text-center border border-dark rounded"},nt={class:"fs-3 align-middle"},ct={class:"mt-5"},lt=a(()=>t("button",{type:"button",class:"btn btn-primary px-5"}," 前往購物 ",-1)),it={key:2,class:"col-lg-4"},dt={class:"discount"},rt={class:"mb-3"},ut=a(()=>t("label",{for:"discount",class:"form-label fw-bold h5"},"優惠券折扣",-1)),_t={class:"text-end mb-3"},ht={class:"cartList p-3 mb-4"},pt=a(()=>t("h5",{class:"mb-5"},"購物清單總計",-1)),mt={class:"cartTotal"},bt={class:"cartOrigin d-flex justify-content-between align-items-center"},ft=a(()=>t("p",null,"原始價格",-1)),vt=a(()=>t("div",{class:"cartDiscount d-flex justify-content-between align-items-center"},[t("p",null,"折扣"),t("p",null,"-NT$0")],-1)),Ct=a(()=>t("hr",null,null,-1)),yt={class:"totalPrice mb-3 d-flex justify-content-between align-items-center"},gt=a(()=>t("p",{class:"fw-bold fs-6"},"總付款金額",-1)),wt={class:"fw-bold"},kt={class:"text-end mb-3"},xt=a(()=>t("button",{type:"button",class:"btn btn-primary"}," 前往付款 ",-1));function Vt(e,o,d,y,$t,c){const V=m("HeaderNav"),_=m("router-link"),$=m("FooterView");return l(),i(f,null,[u(V,{class:"bg-black position-static"}),U,t("div",F,[t("div",q,[t("div",L,[t("nav",M,[t("ol",R,[t("li",O,[u(_,{to:"/"},{default:b(()=>[k("首頁")]),_:1})]),z])]),t("div",J,[t("button",{type:"button",class:"btn btn-outline-primary fs-5",onClick:o[0]||(o[0]=(...s)=>c.deleteCarts&&c.deleteCarts(...s))}," 清空購物車 ")])]),t("div",G,[e.cartStatus?(l(),i("div",K,[t("table",Q,[W,t("tbody",null,[(l(!0),i(f,null,w(e.carts.carts,s=>(l(),i("tr",{style:{"vertical-align":"middle"},key:s.id},[t("td",null,[t("button",{type:"button",class:"btn",onClick:n=>c.deleteCartItem(s.id)},[t("span",{class:"material-symbols-outlined",onClick:n=>c.deleteCartItem(s.id)}," delete ",8,Y)],8,X)]),t("td",Z,[t("div",{style:j([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${s.product.imageUrl})`}])},null,4)]),t("td",tt,r(s.product.title),1),t("td",null,"$"+r(s.product.price),1),t("td",null,[t("div",et,[x(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":n=>s.qty=n,onChange:n=>c.updateCartItem(s)},[(l(),i(f,null,w(30,n=>t("option",{value:n,key:n+"12345"},r(n),9,ot)),64))],40,st),[[A,s.qty]])])]),t("td",null,"$"+r(s.total),1)]))),128))])])])):(l(),i("div",at,[t("div",nt,[k(" 目前購物車無任何商品唷！ "),t("div",ct,[u(_,{to:"/"},{default:b(()=>[lt]),_:1})])])])),e.cartStatus?(l(),i("div",it,[t("div",dt,[t("div",rt,[ut,x(t("input",{type:"text",class:"form-control p-3",id:"discount",placeholder:"輸入優惠代碼","onUpdate:modelValue":o[1]||(o[1]=s=>this.coupon=s)},null,512),[[B,this.coupon]])]),t("div",_t,[t("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=(...s)=>c.useCoupon&&c.useCoupon(...s))}," 使用折扣 ")])]),t("div",ht,[pt,t("div",mt,[t("div",bt,[ft,t("p",null,"NT$"+r(e.carts.total),1)]),vt,Ct,t("div",yt,[gt,t("p",wt,"NT$"+r(e.carts.final_total),1)])]),t("div",kt,[u(_,{to:"/Orders"},{default:b(()=>[xt]),_:1})])])])):N("",!0)])])]),u($)],64)}const Tt=T(H,[["render",Vt],["__scopeId","data-v-5500f0ed"]]);export{Tt as default};
