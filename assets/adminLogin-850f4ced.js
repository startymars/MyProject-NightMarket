import{_ as r,o as p,d as _,f as e,q as d,H as i,p as m,e as u}from"./index-5f84bd89.js";const{VITE_APP_URL:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},f={data(){return{temp:{username:"",password:""}}},methods:{login(){console.log("ssss"),this.$http.post(`${h}/v2/admin/signin`,this.temp).then(s=>{const{token:o,expired:l}=s.data;document.cookie=`week2Token=${o};expires=${new Date(l)};`,this.$router.push("/admin"),alert(s.data.message)}).catch(s=>{alert(s.response.data.message)})},mounted(){console.log("成功進來")}}},a=s=>(m("data-v-0cb09122"),s=s(),u(),s),b={class:"background"},g={class:"container bgColor"},v={class:"d-flex flex-column justify-content-center align-items-center"},x=a(()=>e("h4",{class:"text-center mt-4"},"後台登入",-1)),w={class:"box"},k={class:"row"},P={class:"col-12 mb-4"},y=a(()=>e("label",{for:"email",class:"form-label"},"帳號",-1)),E={class:"col-12 mb-5"},I=a(()=>e("label",{for:"password",class:"form-label"},"密碼",-1)),V={class:"col-12 d-grid text-center"};function S(s,o,l,T,n,c){return p(),_("div",b,[e("div",g,[e("div",v,[x,e("div",w,[e("form",k,[e("div",P,[y,d(e("input",{type:"email",class:"form-control",id:"email",placeholder:"請輸入帳號","onUpdate:modelValue":o[0]||(o[0]=t=>n.temp.username=t)},null,512),[[i,n.temp.username]])]),e("div",E,[I,d(e("input",{type:"password",class:"form-control",id:"password",placeholder:"請輸入密碼","onUpdate:modelValue":o[1]||(o[1]=t=>n.temp.password=t)},null,512),[[i,n.temp.password]])]),e("div",V,[e("button",{type:"button",class:"btn btn-primary",onClick:o[2]||(o[2]=(...t)=>c.login&&c.login(...t))},"登入")])])])])])])}const D=r(f,[["render",S],["__scopeId","data-v-0cb09122"]]);export{D as default};
