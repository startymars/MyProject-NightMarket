import{H as m,F as h}from"./FooterView-4cbaacd4.js";import{p as b}from"./productStore-99762fb0.js";import{bs as x,br as g,aG as r,at as o,p as a,y as c,q as t,bk as d,F as l,aE as y,x as p,aU as _,ax as k,au as w}from"./index-8e97f02a.js";import"./_commonjsHelpers-87174ba5.js";const F={data(){return{favoriteStatus:!1,products:[]}},components:{HeaderNav:m,FooterView:h},computed:{...g(b,["favorites"])},mounted(){this.products=this.favorites,this.products.length?this.favoriteStatus=!0:this.favoriteStatus=!1,window.scrollTo(0,0)}},i=e=>(k("data-v-f32a3973"),e=e(),w(),e),S=i(()=>t("div",{class:"likeBanner d-flex justify-content-center align-items-center"},[t("div",{class:"likeTitle"},"我的收藏")],-1)),V={class:"bg-secondary"},N={class:"container"},B={"aria-label":"breadcrumb",class:"pt-5 pb-5"},$={class:"breadcrumb"},H={class:"breadcrumb-item"},I=i(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"我的收藏",-1)),T={class:"row mx-auto justify-content-between align-items-center"},j=i(()=>t("div",{class:"col-12"},[t("div",{class:"h4 mb-4"},"我的收藏")],-1)),C={class:"row g-0"},D={class:"col-md-5 favorite position-relative"},E=["src"],q={class:"col-md-7 ps-3"},G={class:"favoriteBody"},L={class:"title"},U={class:"favoriteContent"},z={class:"text"},A={class:"text-muted"},J={key:1,class:"row mx-auto mb-4"},K={class:"col d-flex justify-content-center align-items-center text-center border border-dark rounded notFavorite"},M={class:"fs-3 align-middle"},O={class:"mt-5"},P=i(()=>t("button",{type:"button",class:"btn btn-primary px-5"}," 前往購物 ",-1));function Q(e,R,W,X,u,Y){const f=r("HeaderNav"),n=r("router-link"),v=r("FooterView");return o(),a(l,null,[c(f,{class:"bg-black position-static"}),S,t("div",V,[t("div",N,[t("nav",B,[t("ol",$,[t("li",H,[c(n,{to:"/"},{default:d(()=>[p("首頁")]),_:1})]),I])]),t("div",T,[u.favoriteStatus?(o(),a(l,{key:0},[j,(o(!0),a(l,null,y(e.favorites,s=>(o(),a("div",{class:"col-md-5 d-flex mb-5 p-2",style:{background:"#ffffff"},key:s.id},[t("div",C,[t("div",D,[c(n,{to:`/FoodDetail/${s.id}`},{default:d(()=>[t("img",{src:s.image,alt:"favoriteFood"},null,8,E)]),_:2},1032,["to"])]),t("div",q,[t("div",G,[t("h5",L,_(s.title),1),t("p",U,_(s.content),1),t("p",z,[t("small",A,"NT$"+_(s.price),1)])])])])]))),128))],64)):(o(),a("div",J,[t("div",K,[t("div",M,[p(" 目前沒有收藏任何商品唷！ "),t("div",O,[c(n,{to:"/"},{default:d(()=>[P]),_:1})])])])]))])])]),c(v)],64)}const ot=x(F,[["render",Q],["__scopeId","data-v-f32a3973"]]);export{ot as default};
