<template>
  <HeaderNav class="bg-black position-static" />
  <div class="bg-secondary">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5 pb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/Food">美食報報</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ detailProduct.title }}
          </li>
        </ol>
      </nav>
      <div class="row mx-auto mb-5">
        <div class="col-lg-5">
          <img
            class="detailImg"
            :src="detailProduct.imageUrl"
            :alt="detailProduct.title"
          />
        </div>
        <div class="col-lg-6 offset-lg-1">
          <ul class="p-0">
            <li class="h4 mb-3">{{ detailProduct.title }}</li>
            <li class="bg-light p-3">
              <span class="h5 fw-bold text-primary"
                >NT${{ detailProduct.price }}</span
              ><span class="mx-2"
                ><del>原價$NT{{ detailProduct.origin_price }}</del></span
              >
            </li>
            <hr />
            <li class="detailContext">
              <p>
                {{ detailProduct.description }}
              </p>
              <p>分類：{{ detailProduct.category }}</p>
              <p>單位：{{ detailProduct.unit }}</p>
            </li>
          </ul>
          <div class="mb-5">
            <div class="row">
              <span class="col-sm-2 col-form-label">數量：</span>
              <div class="col-sm-10">
                <span>
                  <select name="" id="" class="form-control"  v-model="productQty">
                    <option :value="i" v-for="i in 10" :key="i + '12345'">
                      {{ i }}
                    </option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div class="d-lg-flex justify-content-start">
            <button
              class="btn btn-outline-primary px-5 py-3 me-3 fw-bold"
              type="button"
              @click="addToCart(detailProduct.id, productQty)"
            >
              加入購物車
            </button>
            <router-link to="/Cart">
              <button
                class="btn btn-primary px-5 py-3 fw-bold"
                type="button"
                @click="addToCart(detailProduct.id, 1)"
              >
                直接購買
              </button>
            </router-link>
            <!-- <div class="px-5 py-3 fw-bold border border-primary border-1">
            <span class="material-symbols-outlined align-middle">favorite</span>
          </div> -->
          </div>
        </div>
      </div>
      <nav class="mt-5">
        <div
          class="nav nav-tabs d-flex justify-content-center align-items-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            class="nav-link active fs-5"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            商家描述
          </button>
          <button
            class="nav-link fs-5"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            店家資訊
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active p-4"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {{ detailProduct.description }}
        </div>
        <div
          class="tab-pane fade p-4"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          {{ detailProduct.content }}
        </div>
      </div>
      <div class="recommend">
        <div class="text-center h4 m-5">推薦美食</div>
        <swiper
          :slidesPerView="1"
          :breakpoints="{
            '567': {
              spaceBetween: 40,
              slidesPerView: 2,
            },
            '992': {
              spaceBetween: 40,
              slidesPerView: 3,
            },
            '1205': {
              slidesPerView: 4,
            },
          }"
          :spaceBetween="20"
          :loop="true"
          :navigation="{
            clickable: ture,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="item in products" :key="item.id">
            <div>
              <div class="otherImg mb-4">
                <router-link
                  :to="`/FoodDetail/${item.id}`"
                  @click="DetailProduct"
                >
                  <img :src="item.imageUrl" alt="推薦美食" />
                </router-link>
                <div class="otherTag p bg-black text-white px-3 py-1">
                  {{ item.category }}
                </div>
              </div>

              <div>
                <h5 class="mt-2">{{ item.title }}</h5>
                <p class="p-0 mb-5" :class="{ 'hovered': showLabel }" v-if="showLabel" @mouseover="showLabel = false">
                  NT$
                  {{ item.price }}
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addToCart(item.id, 1)"
                  v-else
                  @mouseleave="showLabel = true"
                >
                  加入購物車
                </button>
              </div>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script>
import HeaderNav from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import productStore from "@/stores/productStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      detailProduct: [],
      productQty:1,
      modules: [Navigation],
      showLabel: true,
    };
  },
  components: {
    HeaderNav,
    FooterView,
    Swiper,
    SwiperSlide,
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler() {
        this.DetailProduct();
        window.scrollTo(0, 0);
      },
    },
  },
  computed: {
    ...mapState(productStore, ["products"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart"]),

    DetailProduct() {
      console.log("22222", this.$route.params);
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log("取得該產品id", res.data.product);
          this.detailProduct = res.data.product;
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
  },
  mounted() {
    this.DetailProduct();
    this.getProducts();
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
}

.detailImg {
  width: 100%;
  height: 400px;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 5px;
}

.otherImg {
  position: relative;
  width: 250px; /* 設定 div 的寬度 */
  height: 230px; /* 設定 div 的高度 */
}

.otherImg img {
  max-width: 100%; /* 圖片寬度最大為 div 的寬度 */
  max-height: 100%;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.2);
}

.otherTag {
  position: absolute;
  bottom: -12%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
