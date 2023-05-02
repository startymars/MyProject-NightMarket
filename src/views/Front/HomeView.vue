<template>
  <div class="home">
    <HeaderNav />
    <Loading />
    <div class="swiper">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 9000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <img
            src="/src/assets/carouselImg.png"
            class="d-block img-fluid"
            alt="carouselImg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="/src/assets/carouselImg2.png"
            class="d-block img-fluid"
            alt="carouselImg2"
          />
        </swiper-slide>
      </swiper>
      <div class="container nightMarket">
        <div class="row justify-content-between align-items-end">
          <div class="col-md-7">
            <div class="MainName mb-3">
              <img
                src="/src/assets/B臨.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
              <img
                src="/src/assets/B江.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
              <img
                src="/src/assets/B街.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
            </div>
            <div class="subName">
              <img
                src="/src/assets/B觀.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
              <img
                src="/src/assets/B光.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
              <img
                src="/src/assets/B夜.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
              <img
                src="/src/assets/B市.png"
                alt="臨江觀光夜市"
                class="border border-white border-2"
              />
            </div>
          </div>
          <div class="col-md-2 offset-md-3">
            <div class="btn-page">
              <router-link to="/Food">
                <button type="button" class="rounded-circle">
                  <img
                    src="/src/assets/button.png"
                    width="100"
                    alt="前往商品"
                  />
                </button>
              </router-link>
            </div>
            <div class="btn-md-page mt-3">
              <router-link to="/Food">
                <button type="button" class="rounded-pill ps-3 pe-3">
                  <span class="fw-bold"
                    >探索美食
                    <img
                      src="/src/assets/button.png"
                      width="40"
                      alt="前往商品"
                    />
                  </span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-origin">
      <div class="row">
        <div
          class="col-lg-4 order-lg-3 news borderLine d-flex flex-lg-column justify-content-lg-between align-items-lg-center"
        >
          <div class="mainTitle fw-bold fs-1" data-aos="flip-right">
            最新消息
            <div class="mainTag fs-6">News</div>
          </div>
          <div class="newSubTitle mdSub">消息一覽</div>
        </div>
        <div
          class="col-lg-2 order-lg-1 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center"
        >
          <div class="newTitle fw-bold fs-3">新商店開幕了</div>
          <div class="newSubTitle">十一月零陸號</div>
          <button type="button" class="newButton btn btn-primary">
            Primary
          </button>
        </div>
        <div
          class="col-lg-2 order-lg-2 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center"
        >
          <div class="newTitle fw-bold fs-3">
            12間必吃美食，跟著這篇絕對不會迷路
          </div>
          <div class="newSubTitle">十一月零陸號</div>
        </div>

        <div
          class="col-lg-2 order-lg-4 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center"
        >
          <div class="newTitle fw-bold fs-3">新商店開幕</div>
          <div class="newSubTitle">十一月零陸號</div>
        </div>
        <div
          class="col-lg-2 order-lg-5 news borderLine d-flex flex-lg-column flex-column-reverse justify-content-lg-between align-items-lg-center"
        >
          <div class="newTitle fw-bold fs-3">
            12間必吃美食，跟著這篇絕對不會迷路
          </div>
          <div class="newSubTitle">十一月零陸號</div>
        </div>
      </div>
    </div>
    <div class="bgHistory">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 offset-sm-3">
            <div
              class="historyCulture text-white d-flex justify-content-between"
            >
              <div class="historyDetail" data-aos="fade-right">
                /<br />夜市在臺灣，有超過100年的歷史。通常是因為當地的交通方便，或是有遼闊場地以及多人群聚集而加以形成。
                <br /><br />據《臺灣日日新報》資料，1908年，有人在鳳山廳旗津天后宮廟前空地設夜市，營業時間為18時至24時。<br /><br />
                此外，日治時期的納涼（日語：納涼）會活動也影響了後續臺灣夜市的發展
              </div>
              <div class="historyText" data-aos="fade-right">
                歷史文化
                <div class="fs-3">納涼的</div>
              </div>
            </div>
          </div>
          <div class="col-md-10 mb-4">
            <div class="text-white d-flex justify-content-between">
              <!-- <div class="image-container">
                <img
                  src="/src/assets/carouselImg.png"
                  alt="your-image-description"
                />
              </div> -->
              <div class="marketText" data-aos="fade-left">
                夜市文化
                <div class="marketTag fs-3">台灣的</div>
              </div>
              <div class="marketDetail" data-aos="fade-left">
                <div class="subDetail">
                  /<br />台灣小吃與夜市文化更是獨步全球，種類多樣化，是台灣人生活中最具代表性的飲食文化，舉凡蚵仔煎、蚵仔麵線、臭豆腐、炒米粉、大餅包小餅、萬巒豬腳、大腸蚵仔麵線、甜不辣、台南但仔麵…等,皆是台灣風味獨特的小吃名食，價位便宜又好吃，並且可以吃出該地的人文特色。
                  <br /><br />透過地方小吃，遊客可以更認識地方特產、文化與人文典故。因此，遊台灣，別錯過了精采絕倫的「夜市文化」!
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-11 offset-sm-1 mb-5">
            <ul class="d-flex justify-content-evenly text-white">
              <li class="text-center" data-aos="zoom-in-down">
                <div class="counter fs-2 fw-bold mb-2">36</div>
                <div class="nCity">北部</div>
              </li>
              <li class="text-center" data-aos="zoom-in-down">
                <div class="counter fs-2 fw-bold mb-2">49</div>
                <div class="nCity">中部</div>
              </li>
              <li class="text-center" data-aos="zoom-in-down">
                <div class="counter fs-2 fw-bold mb-2">52</div>
                <div class="nCity">南部</div>
              </li>
              <li class="text-center" data-aos="zoom-in-down">
                <div class="counter fs-2 fw-bold mb-2">24</div>
                <div class="nCity">東部</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-white">
      <div class="container">
        <div class="h3 fw-bold text-center mb-5 mt-4">商品種類</div>
        <div class="foodSelect mb-4">
          <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            :loop="{
              clickable: true,
            }"
            :navigation="{
              clickable: true,
            }"
            :breakpoints="{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class="childSelect"
              v-for="item in cartegory"
              :key="item"
            >
              <div class="chooseSelect">
                <router-link to="/Food">
                  <img
                    src="https://images.unsplash.com/photo-1535898331935-2d274aff0fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlnaHQlMjBtYXJrZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                  <div class="chooseName fw=bold text-center fs-5">
                    {{ item }}
                  </div>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div> -->
    <div class="bg-secondary">
      <div class="container">
        <div class="p-5 text-center">
          <div>Yummy Yummy</div>
          <div class="h3 fw-bold mt-3">人氣美食</div>
        </div>
        <div class="row mx-auto">
          <div
            class="col-lg-4 col-md-6 mb-5"
            v-for="item in products"
            :key="item.id"
          >
            <div class="productImg">
              <router-link :to="`/FoodDetail/${item.id}`">
                <img :src="item.imageUrl" class="img-fluid" alt="foodImg" />
              </router-link>
              <div class="overlay">
                <button
                  type="button"
                  class="btn btn-primary add-to-cart fs-5"
                  @click.prevent
                  @click="addToCart(item.id, 1)"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div class="productContent mt-3">
              <div
                class="title d-flex justify-content-start align-items-center"
              >
                <router-link :to="`/FoodDetail/${item.id}`">
                  <h3 class="cardTitle fw-bold me-2">
                    {{ item.title }}
                  </h3></router-link
                >

                <div class="productTag">
                  <span class="fw-bold">{{ item.category[0] }}</span>
                  <span class="fw-bold">{{ item.category[1] }}</span>
                </div>
                <!-- <a
                    href="#"
                    v-if="!isFavorite"
                    @click.prevent
                    @click="favoriteProducts(item)"
                  >
                    <span
                      class="material-symbols-outlined d-block"
                      @click="clickFavorite"
                      >favorite</span
                    >
                  </a>
                  <a
                    href="#"
                    @click.prevent
                    v-else
                    @click="deleteFavoriteProducts(item)"
                  >
                    <span class="material-icons" @click="clickFavorite"
                      >favorite</span
                    ></a
                  > -->
              </div>
              <div class="description d-flex flex-column justify-content-start">
                <p class="productDetail">{{ item.description }}</p>
                <div class="price d-flex">
                  <span class="fw-bold me-1">NT${{ item.price }}</span>
                  <span
                    ><del>{{ item.origin_price }}</del></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import Loading from "@/components/marketLoading.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import productStore from "@/stores/productStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      isFavorite: false,
      cartegory: [],
      modules: [Autoplay, Navigation, Pagination],
    };
  },
  components: {
    HeaderNav,
    FooterView,
    Loading,
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(productStore, ["products"]),
    ...mapState(productStore, ["isLoading"]),
    counterValue: {
      get() {
        return this.startNumber;
      },
    },
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productStore, ["favoriteProducts"]),
    ...mapActions(productStore, ["deleteFavoriteProducts"]),
    clickFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    categorys() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.cartegory = res.data.products;
          const newCategory = this.cartegory.map((food) => food.category);
          const uniqueArr = [...new Set(newCategory)];
          this.cartegory = uniqueArr;
          console.log(this.cartegory);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.categorys();
    window.scrollTo(0, 0); //頁面置頂
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.swiper {
  max-width: 100%;
  position: relative;
}
.childSelect {
  height: 100px;
}

.chooseSelect {
  max-width: 100%;
  max-height: 100%;
}

.chooseName {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  background-color: antiquewhite;
  border-radius: 5px;
}
.nightMarket {
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  z-index: 1;
}
.MainName img {
  width: 100px;
  height: auto;
  margin-right: 1rem;
}
.subName img {
  width: 100px;
  height: auto;
  margin-right: 1rem;
}
.btn-md-page {
  display: none;
}
.newButton {
  display: none;
}
.bg-origin {
  background-color: #f2efe7;
}
.news {
  padding: 80px;
}
.bg-origin:has(.news:hover) {
  color: #919191;
  background-image: url("/src/assets/hoverImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.news:hover {
  color: #fff;
}

.mainTitle {
  position: relative;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  margin-bottom: 40px;
}
.mainTag {
  position: absolute;
  top: -20px;
  font-weight: 400;
}
.newTitle {
  height: 300px;
  margin-bottom: 80px;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
.newSubTitle {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 800px;
  object-fit: cover;
}
.borderLine {
  border-right-style: dotted;
  border-right-color: #d1d1d1;
}

.productImg {
  position: relative;
  overflow: hidden;
}

.productImg img {
  display: block;
  width: 100%;
  height: 300px;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-out;
}

.productImg:hover img {
  transform: scale(1.2);
  opacity: 0.6;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  z-index: 2;
}

.add-to-cart {
  position: absolute;
  bottom: 40%;
  right: 25%;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: none; /* 初始狀態隱藏 */
}

.overlay:hover .add-to-cart {
  display: block; /* hover時顯示 */
}

.productTag {
  background-color: #000000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
}

.bgHistory {
  background-image: url("/src/assets/history.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-attachment: fixed;
}

.historyCulture {
  margin-top: 200px;
  margin-bottom: 200px;
}

.historyText {
  position: relative;
  font-size: 5rem;
  font-weight: bold;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  z-index: 1;
}

.historyText::after {
  content: "History \A and \A Culture";
  white-space: pre;
  position: absolute;
  color: #919191;
  font-size: 20px;
  right: 35%;
  bottom: -30%;
}
.historyDetail {
  width: 400px;
  font-size: 20px;
  z-index: 2;
}
.marketDetail {
  width: 70%;
}

@media (max-width: 576px) {
  /* 設定當裝置寬度小於或等於768px時的CSS樣式 */
  .historyText::after {
    display: none;
  }
  .historyDetail {
    margin-top: 200px;
  }
  .marketDetail {
    margin-top: 200px;
  }
}

.historySmallImg {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 40%;
  left: 15%;
}

.subDetail {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 50px;
  width: 100%;
}

/* .subDetail::before {
  content: "History of \A Night Maret";
  white-space: pre;
  position: absolute;
  color: #919191;
  font-size: 20px;
  top:5%;
} */

.marketText {
  font-size: 5rem;
  font-weight: bold;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}

@media (max-width: 768px) {
  /* 設定當裝置寬度小於或等於768px時的CSS樣式 */
  .btn-page {
    display: none;
  }
  .btn-md-page {
    display: block;
  }
  .historyText::after {
    right: 30%;
    bottom: -18%;
  }
}

.productDetail {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 991px) {
  .mainTitle {
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .news {
    padding: 24px;
  }
  .newTitle {
    height: 10px;
    margin-bottom: 20px;
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
  }
  .newSubTitle {
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
  }
  .mdSub {
    display: none;
  }
  .borderLine {
    border-bottom-style: dotted;
    border-bottom-color: #d1d1d1;
  }
  .MainName img {
    width: 70px;
    height: auto;
  }
  .subName img {
    width: 70px;
    height: auto;
  }
}
</style>
