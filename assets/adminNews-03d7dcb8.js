import{_ as k,b as g}from"./PaginationView-53fb9001.js";import{bs as y,aG as x,at as a,p as i,q as t,F as b,aE as f,y as M,bm as r,bb as c,b7 as U,x as v,aU as m,w as N,ax as C,au as V}from"./index-4f2fb7a1.js";import"./_commonjsHelpers-87174ba5.js";const{VITE_APP_URL:h,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={data(){return{article:[],tempProduct:{imagesUrl:[]},create_at:0,isNew:!1,page:{},bsModal:"",deleteModal:""}},components:{Pagination:k},watch:{create_at(){this.tempProduct.create_at=Math.floor(new Date(this.create_at)/1e3),console.log(this.tempProduct.create_at)}},methods:{getNews(l=1){this.$http.get(`${h}/v2/api/${_}/admin/articles/?page=${l}`).then(e=>{console.log(e.data),this.article=e.data.articles,this.page=e.data.pagination}).catch(e=>{alert(e.response.data)})},openModal(l,e){l==="create"?(this.bsModal.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):l==="edit"?(this.bsModal.show(),this.isNew=!1,this.tempProduct={...e},console.log("1111",this.tempProduct)):l==="delete"&&(this.deleteModal.show(),this.tempProduct={...e})},addNews(){let l=`${h}/v2/api/${_}/admin/article`,e="post";console.log("1111"),this.isNew||(l=`${h}/v2/api/${_}/admin/article/${this.tempProduct.id}`,e="put"),this.$http[e](l,{data:this.tempProduct}).then(u=>{console.log("11123",u.data),this.getNews(),this.bsModal.hide()}).catch(u=>{console.dir(u)})},deleteNews(){this.$http.delete(`${h}/v2/api/${_}/admin/article/${this.tempProduct.id}`).then(l=>{console.log(l.data),this.article=l.data.articles,this.getNews(),this.deleteModal.hide()}).catch(l=>{alert(l.response.data)})}},mounted(){this.getNews(),this.bsModal=new g.Modal(this.$refs.productModal),this.deleteModal=new g.Modal(this.$refs.delProductModal)}},d=l=>(C("data-v-d11df0e9"),l=l(),V(),l),I={class:"container food"},S={class:"title d-flex justify-content-between align-items-center"},A=d(()=>t("h4",null,"最新消息管理",-1)),L=N('<div class="allNews d-flex justify-content-between align-items-center mt-3 mb-3" data-v-d11df0e9><span data-v-d11df0e9>全部(9) | <span data-v-d11df0e9>已發表(9)</span></span><div class="input-container" data-v-d11df0e9><input type="text" name="text" class="input" placeholder="search..." data-v-d11df0e9><span class="icon" data-v-d11df0e9><svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d11df0e9><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-d11df0e9></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-d11df0e9></g><g id="SVGRepo_iconCarrier" data-v-d11df0e9><path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d11df0e9></path><path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-d11df0e9></path><path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-d11df0e9></path><path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" data-v-d11df0e9></path></g></svg></span></div></div>',1),j={class:"table mt-4"},R=d(()=>t("thead",null,[t("tr",null,[t("th",{width:"120"},"全選"),t("th",{width:"120"},"圖片"),t("th",null,"文章標題"),t("th",{width:"100"},"店家名稱"),t("th",{width:"100"},"建立日期"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1)),T=d(()=>t("td",null,"1111",-1)),D=["src"],B={class:"text-left"},G={class:"text-left"},H={class:"text-left"},F={key:0,class:"text-success"},O={key:1},q={class:"btn-group"},z=["onClick"],J=["onClick"],K={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Q={class:"modal-dialog modal-xl"},W={class:"modal-content border-0"},X=d(()=>t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增文章")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Y={class:"modal-body"},Z={class:"row"},$={class:"col-sm-4"},tt={class:"mb-2"},et={class:"mb-3"},st=d(()=>t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1)),ot=["src"],lt=d(()=>t("h4",null,"多圖設置",-1)),dt={key:0},at={class:"mb-3"},it=d(()=>t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1)),nt=["onUpdate:modelValue"],rt=["src"],ct={key:0},pt={key:1},ut={key:1},mt={class:"col-sm-8"},ht={class:"mb-3"},_t=d(()=>t("label",{for:"shop",class:"form-label"},"店家名稱",-1)),bt={class:"mb-3"},gt=d(()=>t("label",{for:"title",class:"form-label"},"文章標題",-1)),ft={class:"mb-3"},vt=d(()=>t("label",{for:"date",class:"form-label"},"日期",-1)),Pt=d(()=>t("hr",null,null,-1)),wt={class:"mb-3"},kt=d(()=>t("label",{for:"content",class:"form-label"},"文章內容",-1)),yt={class:"mb-3"},xt=d(()=>t("label",{for:"description",class:"form-label"},"文章描述",-1)),Mt={class:"mb-3"},Ut={class:"form-check"},Nt=d(()=>t("label",{class:"form-check-label",for:"isPublic"},"是否啟用",-1)),Ct={class:"modal-footer"},Vt=d(()=>t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),Et={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},It={class:"modal-dialog"},St={class:"modal-content border-0"},At=d(()=>t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Lt={class:"modal-body"},jt={class:"text-danger"},Rt={class:"modal-footer"},Tt=d(()=>t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1));function Dt(l,e,u,Bt,o,n){const P=x("Pagination");return a(),i(b,null,[t("div",I,[t("div",S,[A,t("button",{class:"btn btn-primary btn-lg",type:"button",onClick:e[0]||(e[0]=s=>n.openModal("create"))}," 新增文章 ")]),L,t("table",j,[R,t("tbody",null,[(a(!0),i(b,null,f(o.article,s=>(a(),i("tr",{key:s.id},[T,t("td",null,[t("img",{src:s.imageUrl,class:"img-fluid",alt:"newsImg"},null,8,D)]),t("td",B,m(s.title),1),t("td",G,m(s.author),1),t("td",H,m(s.create_at),1),t("td",null,[s.isPublic?(a(),i("span",F,"啟用")):(a(),i("span",O,"未啟用"))]),t("td",null,[t("div",q,[t("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:p=>n.openModal("edit",s)}," 編輯 ",8,z),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>n.openModal("delete",s)}," 刪除 ",8,J)])])]))),128))])]),M(P,{pages:o.page,onEmitChange:n.getNews},null,8,["pages","onEmitChange"])]),t("div",K,[t("div",Q,[t("div",W,[X,t("div",Y,[t("div",Z,[t("div",$,[t("div",tt,[t("div",et,[st,r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>o.tempProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[c,o.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,ot)]),t("div",null,[lt,Array.isArray(o.tempProduct.imagesUrl)?(a(),i("div",dt,[(a(!0),i(b,null,f(o.tempProduct.imagesUrl,(s,p)=>(a(),i("div",{class:"mb-1",key:p},[t("div",at,[it,r(t("input",{"onUpdate:modelValue":w=>o.tempProduct.imagesUrl[p]=w,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,nt),[[c,o.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o.tempProduct.imagesUrl[p]},null,8,rt)]))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(a(),i("div",ct,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=s=>o.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(a(),i("div",pt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=s=>o.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(a(),i("div",ut,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>l.createImages&&l.createImages(...s))}," 新增圖片 ")]))])]),t("div",mt,[t("div",ht,[_t,r(t("input",{id:"shop",type:"text",class:"form-control",placeholder:"請輸入店家名稱","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.author=s)},null,512),[[c,o.tempProduct.author]])]),t("div",bt,[gt,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.title=s)},null,512),[[c,o.tempProduct.title]])]),t("div",ft,[vt,r(t("input",{id:"date",type:"date",class:"form-control",name:"date",placeholder:"請輸入日期","onUpdate:modelValue":e[7]||(e[7]=s=>o.create_at=s)},null,512),[[c,o.create_at]])]),Pt,t("div",wt,[kt,r(t("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入文章內容","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.content=s)},`
                `,512),[[c,o.tempProduct.content]])]),t("div",yt,[xt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入文章描述","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.description=s)},`
                `,512),[[c,o.tempProduct.description]])]),t("div",Mt,[t("div",Ut,[r(t("input",{id:"isPublic",class:"form-check-input",type:"checkbox","true-value":!0,"false-value":!1,"onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.isPublic=s)},null,512),[[U,o.tempProduct.isPublic]]),Nt])])])])]),t("div",Ct,[Vt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...s)=>n.addNews&&n.addNews(...s))}," 確認 ")])])])],512),t("div",Et,[t("div",It,[t("div",St,[At,t("div",Lt,[v(" 是否刪除 "),t("strong",jt,m(o.tempProduct.title),1),v(" 商品(刪除後將無法恢復)。 ")]),t("div",Rt,[Tt,t("button",{type:"button",class:"btn btn-danger",onClick:e[12]||(e[12]=(...s)=>n.deleteNews&&n.deleteNews(...s))}," 確認刪除 ")])])])],512)],64)}const Ot=y(E,[["render",Dt],["__scopeId","data-v-d11df0e9"]]);export{Ot as default};
