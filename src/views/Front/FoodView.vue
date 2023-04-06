<template>
  <HeaderNav class="bg-black position-static" />
  <div class="newBanner d-flex justify-content-center align-items-center">
    <div class="newsTitle">美食報報</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <div class="filter d-flex justify-content-between align-items-center">
        <nav aria-label="breadcrumb" class="pt-5 pb-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">美食報報</li>
          </ol>
        </nav>

        <select
          class="filterFood"
          ref="filterItem"
          @change="sortItems"
          required
        >
          <option selected>商品排序</option>
          <option value="high">價格高～低</option>
          <option value="low">價格低～高</option>
        </select>
      </div>
      <div class="row mx-auto">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs mb-5 fs-5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              全部
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="food-tab"
              data-bs-toggle="tab"
              data-bs-target="#food"
              type="button"
              role="tab"
              aria-controls="food"
              aria-selected="false"
            >
              小吃
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="fried-tab"
              data-bs-toggle="tab"
              data-bs-target="#fried"
              type="button"
              role="tab"
              aria-controls="fried"
              aria-selected="false"
            >
              炸物
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="ice-tab"
              data-bs-toggle="tab"
              data-bs-target="#ice"
              type="button"
              role="tab"
              aria-controls="ice"
              aria-selected="false"
            >
              冰品
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="drink-tab"
              data-bs-toggle="tab"
              data-bs-target="#drink"
              type="button"
              role="tab"
              aria-controls="drink"
              aria-selected="false"
            >
              飲料
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="dessert-tab"
              data-bs-toggle="tab"
              data-bs-target="#dessert"
              type="button"
              role="tab"
              aria-controls="dessert"
              aria-selected="false"
            >
              甜點
            </button>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in products"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="row">
          <div
            class="tab-pane fade show active col-lg-3 col-md-6 mb-3"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
            v-for="item in products"
            :key="item.id"
          >
            <div class="product">
              <div class="productImg">
                <router-link :to="`/FoodDetail/${item.id}`">
                  <img :src="item.imageUrl" class="img-fluid" alt="foodImg" />
                </router-link>
                <div class="productTag d-flex flex-column">
                  <span class="fw-bold">{{ item.category[0] }}</span>
                  <span class="fw-bold">{{ item.category[1] }}</span>
                </div>
              </div>
              <div
                class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
              >
                <div
                  class="title d-flex justify-content-between align-items-center"
                >
                  <router-link :to="`/FoodDetail/${item.id}`">
                    <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                  </router-link>
                  <div class="productIcon">
                    <a
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
                    >
                  </div>
                </div>
                <div class="price fs-6 mb-2">
                  NT${{ item.price }}
                  <small
                    ><del>NT${{ item.origin_price }}</del></small
                  >
                </div>
                <div class="d-grid gap-2">
                  <button
                    type="button"
                    class="btn btn-outline-primary p-2"
                    @click="addToCart(item.id, 1)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div> -->
          <div
            class="tab-pane fade"
            id="food"
            role="tabpanel"
            aria-labelledby="food-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in foodTab"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="fried"
            role="tabpanel"
            aria-labelledby="fried-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in friedTab"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="ice"
            role="tabpanel"
            aria-labelledby="ice-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in iceTab"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="drink"
            role="tabpanel"
            aria-labelledby="drink-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in drinkTab"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="dessert"
            role="tabpanel"
            aria-labelledby="dessert-tab"
          >
            <div class="row">
              <div
                class="col-lg-3 col-md-6 mb-3"
                v-for="item in dessertTab"
                :key="item.id"
              >
                <div class="product">
                  <div class="productImg">
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <img
                        :src="item.imageUrl"
                        class="img-fluid"
                        alt="foodImg"
                      />
                    </router-link>
                    <div class="productTag d-flex flex-column">
                      <span class="fw-bold">{{ item.category[0] }}</span>
                      <span class="fw-bold">{{ item.category[1] }}</span>
                    </div>
                  </div>
                  <div
                    class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                  >
                    <div
                      class="title d-flex justify-content-between align-items-center"
                    >
                      <router-link :to="`/FoodDetail/${item.id}`">
                        <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                      </router-link>
                      <div class="productIcon">
                        <a
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
                        >
                      </div>
                    </div>
                    <div class="price fs-6 mb-2">
                      NT${{ item.price }}
                      <small
                        ><del>NT${{ item.origin_price }}</del></small
                      >
                    </div>
                    <div class="d-grid gap-2">
                      <button
                        type="button"
                        class="btn btn-outline-primary p-2"
                        @click="addToCart(item.id, 1)"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row"> -->
      <!-- <div class="col-lg-3 col-md-4">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  美食類別
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <ul class="p-2">
                    <li class="p-2"><a href="#">全部(90)</a></li>
                    <li class="p-2"><a href="#">小吃(2)</a></li>
                    <li class="p-2"><a href="#">炸物(3)</a></li>
                    <li class="p-2"><a href="#">飲料(4)</a></li>
                    <li class="p-2"><a href="#">冰品(3)</a></li>
                    <li class="p-2"><a href="#">甜點(4)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      <!-- <div class="col-lg-12 col-md-8">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 mb-3"
              v-for="item in products"
              :key="item.id"
            >
              <div class="product">
                <div class="productImg">
                  <router-link :to="`/FoodDetail/${item.id}`">
                    <img :src="item.imageUrl" class="img-fluid" alt="foodImg" />
                  </router-link>
                  <div class="productTag d-flex flex-column">
                    <span class="fw-bold">{{ item.category[0] }}</span>
                    <span class="fw-bold">{{ item.category[1] }}</span>
                  </div>
                </div>
                <div
                  class="productDetail d-flex flex-column justify-content-center pt-2 mb-3"
                >
                  <div
                    class="title d-flex justify-content-between align-items-center"
                  >
                    <router-link :to="`/FoodDetail/${item.id}`">
                      <h3 class="fw-bold fs-5 mb-2">{{ item.title }}</h3>
                    </router-link>
                    <div class="productIcon">
                      <a
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
                      >
                    </div>
                  </div>
                  <div class="price fs-6 mb-2">
                    NT${{ item.price }}
                    <small
                      ><del>NT${{ item.origin_price }}</del></small
                    >
                  </div>
                  <div class="d-grid gap-2">
                    <button
                      type="button"
                      class="btn btn-outline-primary p-2"
                      @click="addToCart(item.id, 1)"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      <!-- </div> -->
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      isFavorite: false,
      products: [],
      chooseProduct: [{ 全部: 2 }],
      qty: 1,
      num: 0,
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  computed: {
    ...mapState(productStore, ["products"]),
    foodTab() {
      return this.products.filter((item) => item.category === "小吃");
    },
    friedTab() {
      return this.products.filter((item) => item.category === "炸物");
    },
    iceTab() {
      return this.products.filter((item) => item.category === "冰品");
    },
    drinkTab() {
      return this.products.filter((item) => item.category === "飲料");
    },
    dessertTab() {
      return this.products.filter((item) => item.category === "甜點");
    },
  },
  methods: {
    // ...mapActions(productStore, ["getProducts"]),
    ...mapActions(productStore, ["favoriteProducts"]),
    ...mapActions(cartStore, ["addToCart"]),
    ...mapActions(productStore, ["deleteFavoriteProducts"]),
    clickFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    sortItems() {
      const filterItem = this.$refs.filterItem.value;
      if (filterItem == "low") {
        this.products.sort((a, b) => a.price - b.price);
      } else if (filterItem == "high") {
        this.products.sort((a, b) => b.price - a.price);
      }
    },
    Selecter() {
      this.products.forEach((item) => {
        // if(this.chooseProduct[item.category]!=="小吃"){
        //     this.chooseProduct.push({ "全部": this.num+1 });
        //     this.chooseProduct.push({ [item.category]: this.num+1 });
        //     console.log(this.chooseProduct);
        // }
        if (item.category !== this.chooseProduct[item.category]) {
          this.chooseProduct.push({ [item.category]: this.num + 1 });
        }
      });
      const selectFood = this.products.map((food) => food.category);
      const newSelectFood = [...new Set(selectFood)];
      console.log(newSelectFood);
    },
  },
  mounted() {
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
        console.log("取得該產品", res.data.products);
        this.products = res.data.products;
        this.Selecter();
      })
      .catch((err) => {
        alert(err.response.data);
      });
  },
};
</script>

<style scoped>
.newBanner {
  width: 100%;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcyfHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
  opacity: 0.8;
}
.newsTitle {
  width: 30%;
  text-align: center;
  position: absolute;
  background-color: #f2efe7;
  padding: 3%;
  font-weight: bold;
  font-size: 2rem;
}
.productImg {
  position: relative;
  max-width: 100%;
}

.productImg img {
  width: 100%;
  height: 200px;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 10px;
}

.productTag {
  position: absolute;
  background-color: #000000;
  color: #fff;
  padding: 4px;
  top: -10px;
  right: -10px;
}
.accordion-body li {
  font-size: 1rem;
  padding: 5%;
}
.filterFood {
  width: 200px;
  background-color: #fafafa;
  border: none;
  border-bottom: 1px solid #f18724;
  color: #818a91;
  min-height: 38px;
  text-indent: 10px;
}
</style>
