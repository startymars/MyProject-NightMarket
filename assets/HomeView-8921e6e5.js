import{H as w,F as ee,c as te}from"./FooterView-fd88ece3.js";import{e as ae,a as Q,c as se,b as le,g as J,N as ne,S as ie,d as oe}from"./pagination.min-dfaa7aa9.js";import{p as R}from"./productStore-4028cffa.js";import{_ as re,m as ce,a as W,r as G,o as V,c as Y,b as D,d as l,w as P,F as Z,e as X,f as K,g as de,t as N,p as fe,h as ue}from"./index-4c8d2d43.js";function q(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function me({swiper:e,extendParams:H,on:m,emit:u}){const c="swiper-pagination";H({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),e.pagination={el:null,bullets:[]};let x,_=0;const y=t=>(Array.isArray(t)||(t=[t].filter(a=>!!a)),t);function T(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function d(t,a){const{bulletActiveClass:s}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${s}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${s}-${a}-${a}`)))}function S(t){const a=t.target.closest(q(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const s=Q(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;(s<e.loopedSlides||s>e.slides.length-e.loopedSlides)&&e.loopFix({direction:s<e.loopedSlides?"prev":"next",activeSlideIndex:s,slideTo:!1}),e.slideToLoop(s)}else e.slideTo(s)}function i(){const t=e.rtl,a=e.params.pagination;if(T())return;let s=e.pagination.el;s=y(s);let n;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,A=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?n=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex:typeof e.snapIndex<"u"?n=e.snapIndex:n=e.activeIndex||0,a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const o=e.pagination.bullets;let v,g,k;if(a.dynamicBullets&&(x=ae(o[0],e.isHorizontal()?"width":"height",!0),s.forEach(f=>{f.style[e.isHorizontal()?"width":"height"]=`${x*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&e.previousIndex!==void 0&&(_+=n-(e.previousIndex||0),_>a.dynamicMainBullets-1?_=a.dynamicMainBullets-1:_<0&&(_=0)),v=Math.max(n-_,0),g=v+(Math.min(o.length,a.dynamicMainBullets)-1),k=(g+v)/2),o.forEach(f=>{const p=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(b=>`${a.bulletActiveClass}${b}`)].map(b=>typeof b=="string"&&b.includes(" ")?b.split(" "):b).flat();f.classList.remove(...p)}),s.length>1)o.forEach(f=>{const p=Q(f);p===n&&f.classList.add(...a.bulletActiveClass.split(" ")),a.dynamicBullets&&(p>=v&&p<=g&&f.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),p===v&&d(f,"prev"),p===g&&d(f,"next"))});else{const f=o[n];if(f&&f.classList.add(...a.bulletActiveClass.split(" ")),a.dynamicBullets){const p=o[v],b=o[g];for(let E=v;E<=g;E+=1)o[E]&&o[E].classList.add(...`${a.bulletActiveClass}-main`.split(" "));d(p,"prev"),d(b,"next")}}if(a.dynamicBullets){const f=Math.min(o.length,a.dynamicMainBullets+4),p=(x*f-x)/2-k*x,b=t?"right":"left";o.forEach(E=>{E.style[e.isHorizontal()?b:"top"]=`${p}px`})}}s.forEach((o,v)=>{if(a.type==="fraction"&&(o.querySelectorAll(q(a.currentClass)).forEach(g=>{g.textContent=a.formatFractionCurrent(n+1)}),o.querySelectorAll(q(a.totalClass)).forEach(g=>{g.textContent=a.formatFractionTotal(A)})),a.type==="progressbar"){let g;a.progressbarOpposite?g=e.isHorizontal()?"vertical":"horizontal":g=e.isHorizontal()?"horizontal":"vertical";const k=(n+1)/A;let f=1,p=1;g==="horizontal"?f=k:p=k,o.querySelectorAll(q(a.progressbarFillClass)).forEach(b=>{b.style.transform=`translate3d(0,0,0) scaleX(${f}) scaleY(${p})`,b.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(o.innerHTML=a.renderCustom(e,n+1,A),v===0&&u("paginationRender",o)):(v===0&&u("paginationRender",o),u("paginationUpdate",o)),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](a.lockClass)})}function L(){const t=e.params.pagination;if(T())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let s=e.pagination.el;s=y(s);let n="";if(t.type==="bullets"){let h=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&h>a&&(h=a);for(let A=0;A<h;A+=1)t.renderBullet?n+=t.renderBullet.call(e,A,t.bulletClass):n+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?n=t.renderFraction.call(e,t.currentClass,t.totalClass):n=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?n=t.renderProgressbar.call(e,t.progressbarFillClass):n=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach(h=>{t.type!=="custom"&&(h.innerHTML=n||""),t.type==="bullets"&&e.pagination.bullets.push(...h.querySelectorAll(q(t.bulletClass)))}),t.type!=="custom"&&u("paginationRender",s[0])}function B(){e.params.pagination=se(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.shadowRoot.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(s=>le(s,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=y(a),a.forEach(s=>{t.type==="bullets"&&t.clickable&&s.classList.add(t.clickableClass),s.classList.add(t.modifierClass+t.type),s.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(s.classList.add(`${t.modifierClass}${t.type}-dynamic`),_=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&s.classList.add(t.progressbarOppositeClass),t.clickable&&s.addEventListener("click",S),e.enabled||s.classList.add(t.lockClass)}))}function j(){const t=e.params.pagination;if(T())return;let a=e.pagination.el;a&&(a=y(a),a.forEach(s=>{s.classList.remove(t.hiddenClass),s.classList.remove(t.modifierClass+t.type),s.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&s.removeEventListener("click",S)})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...t.bulletActiveClass.split(" ")))}m("init",()=>{e.params.pagination.enabled===!1?M():(B(),L(),i())}),m("activeIndexChange",()=>{typeof e.snapIndex>"u"&&i()}),m("snapIndexChange",()=>{i()}),m("snapGridLengthChange",()=>{L(),i()}),m("destroy",()=>{j()}),m("enable disable",()=>{let{el:t}=e.pagination;t&&(t=y(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),m("lock unlock",()=>{i()}),m("click",(t,a)=>{const s=a.target;let{el:n}=e.pagination;if(Array.isArray(n)||(n=[n].filter(h=>!!h)),e.params.pagination.el&&e.params.pagination.hideOnClick&&n&&n.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const h=n[0].classList.contains(e.params.pagination.hiddenClass);u(h===!0?"paginationShow":"paginationHide"),n.forEach(A=>A.classList.toggle(e.params.pagination.hiddenClass))}});const z=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),B(),L(),i()},M=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),j()};Object.assign(e.pagination,{enable:z,disable:M,render:L,update:i,init:B,destroy:j})}function ve({swiper:e,extendParams:H,on:m,emit:u,params:c}){e.autoplay={running:!1,paused:!1,timeLeft:0},H({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let x,_,y=c&&c.autoplay?c.autoplay.delay:3e3,T=c&&c.autoplay?c.autoplay.delay:3e3,d,S=new Date().getTime,i,L,B,j,z,M;function t(r){!e||e.destroyed||!e.wrapperEl||r.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",t),v())}const a=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?i=!0:i&&(T=d,i=!1);const r=e.autoplay.paused?d:S+T-new Date().getTime();e.autoplay.timeLeft=r,u("autoplayTimeLeft",r,r/y),_=requestAnimationFrame(()=>{a()})},s=()=>{let r;return e.virtual&&e.params.virtual.enabled?r=e.slides.filter(C=>C.classList.contains("swiper-slide-active"))[0]:r=e.slides[e.activeIndex],r?parseInt(r.getAttribute("data-swiper-autoplay"),10):void 0},n=r=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(_),a();let I=typeof r>"u"?e.params.autoplay.delay:r;y=e.params.autoplay.delay,T=e.params.autoplay.delay;const C=s();!Number.isNaN(C)&&C>0&&typeof r>"u"&&(I=C,y=C,T=C),d=I;const F=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(F,!0,!0),u("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,F,!0,!0),u("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(F,!0,!0),u("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,F,!0,!0),u("autoplay")),e.params.cssMode&&(S=new Date().getTime(),requestAnimationFrame(()=>{n()})))};return I>0?(clearTimeout(x),x=setTimeout(()=>{U()},I)):requestAnimationFrame(()=>{U()}),I},h=()=>{e.autoplay.running=!0,n(),u("autoplayStart")},A=()=>{e.autoplay.running=!1,clearTimeout(x),cancelAnimationFrame(_),u("autoplayStop")},o=(r,I)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(x),r||(M=!0);const C=()=>{u("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",t):v()};if(e.autoplay.paused=!0,I){z&&(d=e.params.autoplay.delay),z=!1,C();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-S),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),C())},v=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(S=new Date().getTime(),M?(M=!1,n(d)):n(),e.autoplay.paused=!1,u("autoplayResume"))},g=()=>{if(e.destroyed||!e.autoplay.running)return;const r=J();r.visibilityState==="hidden"&&(M=!0,o(!0)),r.visibilityState==="visible"&&v()},k=r=>{r.pointerType==="mouse"&&(M=!0,o(!0))},f=r=>{r.pointerType==="mouse"&&e.autoplay.paused&&v()},p=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",k),e.el.addEventListener("pointerleave",f))},b=()=>{e.el.removeEventListener("pointerenter",k),e.el.removeEventListener("pointerleave",f)},E=()=>{J().addEventListener("visibilitychange",g)},$=()=>{J().removeEventListener("visibilitychange",g)};m("init",()=>{e.params.autoplay.enabled&&(p(),E(),S=new Date().getTime(),h())}),m("destroy",()=>{b(),$(),e.autoplay.running&&A()}),m("beforeTransitionStart",(r,I,C)=>{e.destroyed||!e.autoplay.running||(C||!e.params.autoplay.disableOnInteraction?o(!0,!0):A())}),m("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){A();return}L=!0,B=!1,M=!1,j=setTimeout(()=>{M=!0,B=!0,o(!0)},200)}}),m("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!L)){if(clearTimeout(j),clearTimeout(x),e.params.autoplay.disableOnInteraction){B=!1,L=!1;return}B&&e.params.cssMode&&v(),B=!1,L=!1}}),m("slideChange",()=>{e.destroyed||!e.autoplay.running||(z=!0)}),Object.assign(e.autoplay,{start:h,stop:A,pause:o,resume:v})}const ge="/MyProject-NightMarket/assets/carouselImg-67838588.png",pe="/MyProject-NightMarket/assets/carouselImg2-b3034f5b.png",ye="/MyProject-NightMarket/assets/B臨-07103fed.png",he="/MyProject-NightMarket/assets/B江-323bd854.png",be="/MyProject-NightMarket/assets/B街-4b8fb0a2.png",Ae="/MyProject-NightMarket/assets/B觀-a1ddd195.png",_e="/MyProject-NightMarket/assets/B光-c54ea00d.png",xe="/MyProject-NightMarket/assets/B夜-a7963d62.png",Ce="/MyProject-NightMarket/assets/B市-df6c9782.png",Te="data:image/png;base64,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",Se="/MyProject-NightMarket/assets/history-2-66d311f7.png",Le="/MyProject-NightMarket/assets/history-3-718bfe77.png",Me="/MyProject-NightMarket/assets/history-4-6395714d.png";const{VITE_APP_URL:Be,VITE_APP_PATH:Ie}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"cream21",BASE_URL:"/MyProject-NightMarket/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},De={data(){return{cartegory:[],modules:[ve,ne,me]}},components:{HeaderNav:w,FooterView:ee,Swiper:ie,SwiperSlide:oe},computed:{...ce(R,["products"])},methods:{...W(R,["getProducts"]),...W(te,["addToCart"]),categorys(){this.$http.get(`${Be}/v2/api/${Ie}/products/all`).then(e=>{console.log("取得該產品",e.data.products),this.cartegory=e.data.products;const H=this.cartegory.map(u=>u.category),m=[...new Set(H)];this.cartegory=m,console.log(this.cartegory)}).catch(e=>{alert(e.response.data)})}},mounted(){this.getProducts(),this.categorys()}},O=e=>(fe("data-v-e6cf1f09"),e=e(),ue(),e),ke={class:"home"},Ee={class:"swiper"},Pe=O(()=>l("img",{src:ge,class:"d-block img-fluid",alt:"carouselImg"},null,-1)),Ne=O(()=>l("img",{src:pe,class:"d-block img-fluid",alt:"carouselImg2"},null,-1)),Oe=K('<div class="container nightMarket" data-v-e6cf1f09><div class="row justify-content-between align-items-end" data-v-e6cf1f09><div class="col-7" data-v-e6cf1f09><div class="MainName mb-3" data-v-e6cf1f09><img src="'+ye+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09><img src="'+he+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09><img src="'+be+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09></div><div class="subName" data-v-e6cf1f09><img src="'+Ae+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09><img src="'+_e+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09><img src="'+xe+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09><img src="'+Ce+'" alt="臨江觀光夜市" class="border border-white border-2" data-v-e6cf1f09></div></div><div class="col-2 offset-3" data-v-e6cf1f09><button type="button" class="rounded-circle" data-v-e6cf1f09><img src="'+Te+'" width="100" alt="前往商品" data-v-e6cf1f09></button></div></div></div>',1),He=K('<div class="container-fluid bg-origin" data-v-e6cf1f09><div class="row" data-v-e6cf1f09><div class="col-lg-2 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center" data-v-e6cf1f09><div class="newTitle fw-bold fs-3" data-v-e6cf1f09>新商店開幕</div><div class="newSubTitle" data-v-e6cf1f09>十一月零陸號</div><button type="button" class="newButton btn btn-primary" data-v-e6cf1f09> Primary </button></div><div class="col-lg-2 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center" data-v-e6cf1f09><div class="newTitle fw-bold fs-3" data-v-e6cf1f09> 12間必吃美食，跟著這篇絕對不會迷路 </div><div class="newSubTitle" data-v-e6cf1f09>十一月零陸號</div></div><div class="col-lg-4 news borderLine d-flex text-center flex-lg-column justify-content-center align-items-center" data-v-e6cf1f09><div class="mainTitle fw-bold fs-3" data-v-e6cf1f09> 最新消息 <div class="mainTag fs-6" data-v-e6cf1f09>News</div></div><div class="newSubTitle" data-v-e6cf1f09>消息一覽</div></div><div class="col-lg-2 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center" data-v-e6cf1f09><div class="newTitle fw-bold fs-3" data-v-e6cf1f09>新商店開幕</div><div class="newSubTitle" data-v-e6cf1f09>十一月零陸號</div></div><div class="col-lg-2 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center" data-v-e6cf1f09><div class="newTitle fw-bold fs-3" data-v-e6cf1f09> 12間必吃美食，跟著這篇絕對不會迷路 </div><div class="newSubTitle" data-v-e6cf1f09>十一月零陸號</div></div></div></div><div class="bgHistory" data-v-e6cf1f09><div class="container" data-v-e6cf1f09><div class="historyCulture d-flex flex-row-reverse justify-content-lg-evenly" data-v-e6cf1f09><div class="historyText" data-v-e6cf1f09> 歷史文化 <div class="historyTag fs-3" data-v-e6cf1f09>納涼的</div></div><div class="historyDetail" data-v-e6cf1f09> /<br data-v-e6cf1f09>夜市在臺灣，有超過100年的歷史。通常是因為當地的交通方便，或是有遼闊場地以及多人群聚集而加以形成。 <br data-v-e6cf1f09><br data-v-e6cf1f09>據《臺灣日日新報》資料，1908年，有人在鳳山廳旗津天后宮廟前空地設夜市，營業時間為18時至24時。<br data-v-e6cf1f09><br data-v-e6cf1f09> 此外，日治時期的納涼（日語：納涼）會活動也影響了後續臺灣夜市的發展 </div><div class="historySmallImg d-flex" data-v-e6cf1f09><img src="'+Se+'" alt="history2" data-v-e6cf1f09><img src="'+Le+'" alt="history3" data-v-e6cf1f09><img src="'+Me+'" alt="history4" data-v-e6cf1f09></div></div><div class="marketCulture d-lg-flex justify-content-lg-between align-items-start" data-v-e6cf1f09><div class="historyImg" data-v-e6cf1f09></div><div class="marketText" data-v-e6cf1f09> 夜市文化 <div class="marketTag fs-3" data-v-e6cf1f09>台灣的</div></div><div class="marketDetail" data-v-e6cf1f09><div class="subDetail" data-v-e6cf1f09> /<br data-v-e6cf1f09>台灣小吃與夜市文化更是獨步全球，種類多樣化，是台灣人生活中最具代表性的飲食文化，舉凡蚵仔煎、蚵仔麵線、臭豆腐、炒米粉、大餅包小餅、萬巒豬腳、大腸蚵仔麵線、甜不辣、台南但仔麵…等,皆是台灣風味獨特的小吃名食，價位便宜又好吃，並且可以吃出該地的人文特色。 <br data-v-e6cf1f09><br data-v-e6cf1f09>此外，夜市也是台灣飲食的特殊的文化，每個夜市充斥琳瑯滿目的特產與小吃美食，各有不同的特色與風味。<br data-v-e6cf1f09><br data-v-e6cf1f09>透過地方小吃，遊客可以更認識地方特產、文化與人文典故。因此，遊台灣，別錯過了精采絕倫的「夜市文化」! </div><ul class="marketCount d-flex" data-v-e6cf1f09><li class="text-center border-end" data-v-e6cf1f09><div class="nCount fs-3 fw-bold mb-2" data-v-e6cf1f09>36</div><div class="nCity" data-v-e6cf1f09>北部</div></li><li class="text-center border-end" data-v-e6cf1f09><div class="nCount fs-3 fw-bold mb-2" data-v-e6cf1f09>49</div><div class="nCity" data-v-e6cf1f09>中部</div></li><li class="text-center border-end" data-v-e6cf1f09><div class="nCount fs-3 fw-bold mb-2" data-v-e6cf1f09>52</div><div class="nCity" data-v-e6cf1f09>南部</div></li><li class="text-center" data-v-e6cf1f09><div class="nCount fs-3 fw-bold mb-2" data-v-e6cf1f09>24</div><div class="nCity" data-v-e6cf1f09>東部</div></li></ul></div></div></div></div>',2),je={class:"bg-white"},ze={class:"container"},Fe=O(()=>l("div",{class:"h3 fw-bold text-center mb-5 mt-4"},"商品種類",-1)),Ge={class:"foodSelect mb-4"},Ve={class:"chooseSelect"},qe=O(()=>l("img",{src:"https://images.unsplash.com/photo-1492683513054-55277abccd99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkZXNzZXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",alt:""},null,-1)),Ye={class:"chooseName fw=bold text-center fs-5"},Je={class:"bg-secondary"},Ue={class:"container"},Qe=O(()=>l("div",{class:"productTopic p-5 text-center"},[l("div",null,"Yummy Yummy"),l("div",{class:"h3 fw-bold mt-3"},"人氣美食")],-1)),Re={class:"row"},We={class:"productImg"},Ze=["src"],Xe={class:"productTag d-flex flex-column"},Ke={class:"fw-bold"},$e={class:"fw-bold"},we={class:"productContent mt-3"},et={class:"title d-flex justify-content-between align-items-center"},tt={class:"cardTitle fw-bold"},at={class:"productIcon"},st=["onClick"],lt=O(()=>l("span",{class:"material-symbols-outlined me-2"},"shopping_cart",-1)),nt=[lt],it=O(()=>l("a",{href:"#"},[l("span",{class:"material-symbols-outlined"},"favorite")],-1)),ot={class:"description d-flex flex-column justify-content-start"},rt={class:"productDetail"},ct={class:"price d-flex"},dt={class:"fw-bold me-1"};function ft(e,H,m,u,c,x){const _=G("HeaderNav"),y=G("swiper-slide"),T=G("swiper"),d=G("router-link"),S=G("FooterView");return V(),Y("div",ke,[D(_),l("div",Ee,[D(T,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:9e3,disableOnInteraction:!1},modules:c.modules,class:"mySwiper"},{default:P(()=>[D(y,null,{default:P(()=>[Pe]),_:1}),D(y,null,{default:P(()=>[Ne]),_:1})]),_:1},8,["modules"]),Oe]),He,l("div",je,[l("div",ze,[Fe,l("div",Ge,[D(T,{slidesPerView:1,spaceBetween:10,loop:{clickable:!0},navigation:{clickable:!0},breakpoints:{"@0.00":{slidesPerView:1,spaceBetween:10},"@0.75":{slidesPerView:2,spaceBetween:20},"@1.00":{slidesPerView:3,spaceBetween:40},"@1.50":{slidesPerView:4,spaceBetween:50}},modules:c.modules,class:"mySwiper"},{default:P(()=>[(V(!0),Y(Z,null,X(c.cartegory,i=>(V(),de(y,{class:"childSelect",key:i},{default:P(()=>[l("div",Ve,[D(d,{to:"/Food"},{default:P(()=>[qe,l("div",Ye,N(i),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1},8,["breakpoints","modules"])])])]),l("div",Je,[l("div",Ue,[Qe,l("div",Re,[(V(!0),Y(Z,null,X(e.products,i=>(V(),Y("div",{class:"col-lg-4 col-md-6 mb-5",key:i.id},[l("div",We,[D(d,{to:`/FoodDetail/${i.id}`},{default:P(()=>[l("img",{src:i.imageUrl,class:"img-fluid foodImg",alt:"foodImg"},null,8,Ze)]),_:2},1032,["to"]),l("div",Xe,[l("span",Ke,N(i.category[0]),1),l("span",$e,N(i.category[1]),1)])]),l("div",we,[l("div",et,[D(d,{to:`/FoodDetail/${i.id}`},{default:P(()=>[l("h3",tt,N(i.title),1)]),_:2},1032,["to"]),l("div",at,[l("a",{href:"#",onClick:L=>e.addToCart(i.id,1)},nt,8,st),it])]),l("div",ot,[l("p",rt,N(i.description),1),l("div",ct,[l("span",dt,"NT$"+N(i.price),1),l("span",null,[l("del",null,N(i.origin_price),1)])])])])]))),128))])])]),D(S)])}const pt=re(De,[["render",ft],["__scopeId","data-v-e6cf1f09"]]);export{pt as default};
