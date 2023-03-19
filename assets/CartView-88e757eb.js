import{H as y,F as w}from"./FooterView-10e9b00f.js";import{_ as $,e as p,f as d,g as o,i as _,j as t,F as i,l as u,m as h,v as x,t as l,q as C,s as P}from"./index-9721e996.js";const{VITE_APP_URL:r,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{carts:[]}},components:{HeaderNav:y,FooterView:w},methods:{getCarts(){this.$http.get(`${r}/v2/api/${b}/cart`).then(a=>{console.log("取得購物車列表",a.data.data),this.carts=a.data.data,console.log("有被存入",this.carts)}).catch(a=>{alert(a.response.data)})},deleteCartItem(a){this.$http.delete(`${r}/v2/api/${b}/cart/${a}`).then(s=>{console.log("刪除購物車品項",s.data),this.getCarts()}).catch(s=>{console.dir(s.data)})},deleteCarts(){this.$http.delete(`${r}/v2/api/${b}/carts`).then(a=>{console.log(a.data.message),this.getCarts()}).catch(a=>{console.log(a.data.message),alert(a.data.message)})}},mounted(){this.getCarts()}},v=a=>(C("data-v-29db805c"),a=a(),P(),a),k=v(()=>t("div",{class:"newBanner d-flex justify-content-center align-items-center"},[t("div",{class:"newsTitle"},"購物車")],-1)),I={class:"bg-secondary"},T={class:"container"},N={class:"cartClear d-flex justify-content-between align-items-center"},S=h('<nav aria-label="breadcrumb" class="pt-5 pb-5" data-v-29db805c><ol class="breadcrumb" data-v-29db805c><li class="breadcrumb-item" data-v-29db805c><a href="#" data-v-29db805c>首頁</a></li><li class="breadcrumb-item active" aria-current="page" data-v-29db805c>購物車</li></ol></nav>',1),E={class:"text-end mb-3"},j={class:"row"},A={class:"col-8"},F={class:"table"},H=v(()=>t("thead",null,[t("tr",null,[t("th",{class:"col"}),t("th",{class:"col"},"圖片"),t("th",{class:"col"},"商品名稱"),t("th",{class:"col"},"價格"),t("th",{class:"col"},"數量"),t("th",{class:"col"},"總價")])],-1)),B=["onClick"],D=v(()=>t("span",{class:"material-symbols-outlined"},"clear",-1)),L=[D],R={style:{width:"150px"}},U={class:"fs-6 fw-bold"},M={class:"input-group input-group-sm"},O={name:"",id:"",class:"form-control"},z=["value"],q=h('<div class="col-4" data-v-29db805c><div class="discount" data-v-29db805c><div class="mb-3" data-v-29db805c><label for="discount" class="form-label fw-bold h5" data-v-29db805c>優惠券折扣</label><input type="text" class="form-control p-3" id="discount" placeholder="輸入優惠代碼" data-v-29db805c></div><div class="text-end mb-3" data-v-29db805c><button type="button" class="btn btn-primary" data-v-29db805c>使用折扣</button></div></div><div class="cartList p-3 mb-4" data-v-29db805c><h5 class="mb-5" data-v-29db805c>購物清單總計</h5><div class="cartTotal" data-v-29db805c><div class="cartOrigin d-flex justify-content-between align-items-center" data-v-29db805c><p data-v-29db805c>原始價格</p><p data-v-29db805c>NT$100</p></div><div class="cartDiscount d-flex justify-content-between align-items-center" data-v-29db805c><p data-v-29db805c>折扣</p><p data-v-29db805c>-NT$30</p></div><hr data-v-29db805c><div class="totalPrice mb-3 d-flex justify-content-between align-items-center" data-v-29db805c><p class="fw-bold fs-6" data-v-29db805c>總付款金額</p><p class="fw-bold" data-v-29db805c>NT$450</p></div></div><div class="text-end mb-3" data-v-29db805c><button type="button" class="btn btn-primary" data-v-29db805c>前往付款</button></div></div></div>',1);function G(a,s,J,K,m,n){const g=p("HeaderNav"),f=p("FooterView");return d(),o(i,null,[_(g,{class:"bg-black position-static"}),k,t("div",I,[t("div",T,[t("div",N,[S,t("div",E,[t("button",{type:"button",class:"btn btn-lg btn-outline-primary",onClick:s[0]||(s[0]=(...e)=>n.deleteCarts&&n.deleteCarts(...e))}," 清空購物車 ")])]),t("div",j,[t("div",A,[t("table",F,[H,t("tbody",null,[(d(!0),o(i,null,u(m.carts.carts,e=>(d(),o("tr",{style:{"vertical-align":"middle"},key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-danger btn-sm",onClick:c=>n.deleteCartItem(e.id)},L,8,B)]),t("td",R,[t("div",{style:x([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.product.imageUrl})`}])},null,4)]),t("td",U,l(e.product.title),1),t("td",null,"$"+l(e.product.price),1),t("td",null,[t("div",M,[t("select",O,[(d(),o(i,null,u(20,c=>t("option",{value:c,key:c+"12345"},l(c),9,z)),64))])])]),t("td",null,"$"+l(e.total),1)]))),128))])])]),q])])]),_(f)],64)}const X=$(V,[["render",G],["__scopeId","data-v-29db805c"]]);export{X as default};
