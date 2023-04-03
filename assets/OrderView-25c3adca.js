import{H as m,F as p}from"./FooterView-fcc41efd.js";import{bs as _,aG as o,at as b,p as h,y as c,q as a,bk as u,F as f,w as l,ax as y,au as g}from"./index-4f2fb7a1.js";import"./_commonjsHelpers-87174ba5.js";const{VITE_APP_URL:d,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},w={data(){return{foodProducts:[],qty:1,carts:[],form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{HeaderNav:m,FooterView:p},methods:{onSubmit(){console.log(this.form)},isPhone(t){return/^(09)[0-9]{8}$/.test(t)?!0:"需為正確的手機號碼格式"},getCarts(){this.$http.get(`${d}/v2/api/${i}/cart`).then(t=>{console.log("取得購物車列表",t.data.data),this.carts=t.data.data,console.log("有被存入",this.carts)}).catch(t=>{alert(t.response.data)})},createOrder(){const t=this.form;this.$http.post(`${d}/v2/api/${i}/order`,{data:t}).then(e=>{alert(e.data.message),this.$refs.form.resetForm(),this.form.message="",this.getCarts()}).catch(e=>{console.log(e.data)})}},mounted(){}},s=t=>(y("data-v-422776ca"),t=t(),g(),t),x=s(()=>a("div",{class:"newBanner d-flex justify-content-center align-items-center"},[a("div",{class:"newsTitle"},"訂單資訊")],-1)),P={class:"bg-secondary"},$={class:"container"},V=l('<nav aria-label="breadcrumb" class="pt-5 pb-5" data-v-422776ca><ol class="breadcrumb" data-v-422776ca><li class="breadcrumb-item" data-v-422776ca><a href="#" data-v-422776ca>首頁</a></li><li class="breadcrumb-item active" aria-current="page" data-v-422776ca>訂單資訊</li></ol></nav>',1),T={class:"row"},N={class:"col-8"},I=s(()=>a("h4",null,"訂單資訊",-1)),A=s(()=>a("hr",null,null,-1)),E={class:"row"},F=l('<div class="mb-3 col-6" data-v-422776ca><label for="name" class="form-label" data-v-422776ca>收件人姓名</label><input id="email" name="email" type="email" class="form-control" placeholder="請輸入您的姓名" data-v-422776ca></div><div class="mb-3 col-6" data-v-422776ca><label for="tel" class="form-label" data-v-422776ca>收件人電話</label><input id="tel" name="phone" type="text" class="form-control" placeholder="請輸入您的電話" data-v-422776ca></div><div class="mb-3" data-v-422776ca><label for="email" class="form-label" data-v-422776ca>信箱</label><input id="email" name="email" type="email" class="form-control" placeholder="請輸入您的信箱" data-v-422776ca></div><div class="mb-3" data-v-422776ca><label for="emaaddressil" class="form-label" data-v-422776ca>地址</label><input id="address" name="address" type="text" class="form-control" placeholder="請輸入您的地址" data-v-422776ca></div><div class="mb-3" data-v-422776ca><label for="pay" class="form-label" data-v-422776ca>付款方式</label><select class="form-select" aria-label="pay" data-v-422776ca><option disabled selected data-v-422776ca>請選擇付款方式</option><option value="1" data-v-422776ca>貨到付款</option><option value="2" data-v-422776ca>信用卡付款</option><option value="3" data-v-422776ca>ATM轉帳</option></select></div><div class="mb-3" data-v-422776ca><label for="message" class="form-label" data-v-422776ca>備註</label><textarea id="message" class="form-control" cols="30" rows="10" data-v-422776ca></textarea></div>',6),S={class:"row"},k={class:"col-6 mb-3"},H=s(()=>a("button",{type:"button",class:"btn btn-outline-primary"}," 回上一頁 ",-1)),j=s(()=>a("div",{class:"col-6 mb-3"},[a("button",{type:"button",class:"btn btn-primary"},"結帳")],-1)),B=l('<div class="col-4" data-v-422776ca><div class="bg-primary p-4" data-v-422776ca><h4 data-v-422776ca>你的訂單</h4><hr data-v-422776ca><ul class="payDetai p-0" data-v-422776ca><li class="d-flex justify-content-between mb-4" data-v-422776ca><h6 class="payTitle" data-v-422776ca>商品</h6><h6 class="payTotal" data-v-422776ca>總計</h6></li><li class="d-flex justify-content-between mb-4" data-v-422776ca><div class="payNumber" data-v-422776ca> 1. <span class="payItem" data-v-422776ca>壕大大炭烤雞排</span></div><div class="payPrice" data-v-422776ca>NT$150</div></li></ul><hr data-v-422776ca><div class="payFinalTotal d-flex justify-content-between mb-4" data-v-422776ca><h5 data-v-422776ca>總計</h5><div class="fw-bold" data-v-422776ca>$900</div></div></div></div>',1);function C(t,e,O,R,D,M){const r=o("HeaderNav"),n=o("router-link"),v=o("FooterView");return b(),h(f,null,[c(r,{class:"bg-black position-static"}),x,a("div",P,[a("div",$,[V,a("div",T,[a("div",N,[I,A,a("form",null,[a("div",E,[F,a("div",S,[a("div",k,[c(n,{to:"/Cart"},{default:u(()=>[H]),_:1})]),j])])])]),B])])]),c(v)],64)}const G=_(w,[["render",C],["__scopeId","data-v-422776ca"]]);export{G as default};
