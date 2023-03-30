<template>
  <HeaderNav class="bg-black position-static" />
  <div class="newBanner d-flex justify-content-center align-items-center">
    <div class="newsTitle">美食報報</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <div
        class="filter d-flex justify-content-between align-items-center mb-3"
      >
        <nav aria-label="breadcrumb" class="pt-5 pb-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              美食報報
            </li>
          </ol>
        </nav>
        <div class="dropdown">
          <a
            class="btn btn btn-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            預設排序
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">價格高～低</a></li>
            <li><a class="dropdown-item" href="#">價格低～高</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
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
                  <ul>
                    <li><a href="#">全部(90)</a></li>
                    <li><a href="#">小吃(2)</a></li>
                    <li><a href="#">炸物(3)</a></li>
                    <li><a href="#">飲料(4)</a></li>
                    <li><a href="#">冰品(3)</a></li>
                    <li><a href="#">甜點(4)</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 mb-3"
              v-for="item in products"
              :key="item.id"
            >
              <div class="product">
                <div class="productImg">
                  <router-link :to="`/FoodDetail/${item.id}`">
                    <img
                      :src="item.imageUrl"
                      class="img-fluid foodImg"
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
                      <a href="#">
                        <span class="material-symbols-outlined">favorite</span>
                      </a>
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
  </div>
  <FooterView />
</template>

<script>
import HeaderNav from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import productStore from "@/stores/productStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";
// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      qty: 1,
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  computed: {
    ...mapState(productStore, ["products"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.newBanner {
  width: 100%;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdhcm4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
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
}

.productImg .foodImg {
  width: 400px;
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
</style>
