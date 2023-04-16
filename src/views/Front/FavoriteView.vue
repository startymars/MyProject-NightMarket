<template>
  <HeaderNav class="bg-black position-static" />
  <div class="likeBanner d-flex justify-content-center align-items-center">
    <div class="likeTitle">我的收藏</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5 pb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">我的收藏</li>
        </ol>
      </nav>
      <div class="row mx-auto justify-content-between align-items-center">
        <template v-if="favoriteStatus">
          <div class="col-12">
            <div class="h4 mb-4">我的收藏</div>
          </div>
          <div
            class="col-md-5 d-flex mb-5 p-2"
            style="background: #ffffff"
            v-for="item in favorites"
            :key="item.id"
          >
            <div class="row g-0">
              <div class="col-md-5 favorite position-relative">
                <router-link :to="`/FoodDetail/${item.id}`">
                  <img :src="item.image" alt="favoriteFood" />
                </router-link>
              </div>
              <div class="col-md-7 ps-3">
                <div class="favoriteBody">
                  <h5 class="title">{{ item.title }}</h5>
                  <p class="favoriteContent">{{ item.content }}</p>
                  <p class="text">
                    <small class="text-muted">NT${{ item.price }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row mx-auto mb-4">
            <div
              class="col d-flex justify-content-center align-items-center text-center border border-dark rounded notFavorite"
            >
              <div class="fs-3 align-middle">
                目前沒有收藏任何商品唷！
                <div class="mt-5">
                  <router-link to="/">
                    <button type="button" class="btn btn-primary px-5">
                      前往購物
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script>
import HeaderNav from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import productStore from "@/stores/productStore.js";
import { mapState } from "pinia";

export default {
  data() {
    return {
      favoriteStatus: false,
      products:[]
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  computed: {
    ...mapState(productStore, ["favorites"]),
  },
  mounted(){
      this.products=this.favorites;
      if(this.products.length){
          this.favoriteStatus=true
      }else{
          this.favoriteStatus=false
      }
      window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.likeBanner {
  width: 100%;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1527598041828-aea5d622f3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
  opacity: 0.8;
}
.likeTitle {
  width: 30%;
  text-align: center;
  position: absolute;
  background-color: #f2efe7;
  padding: 3%;
  font-weight: bold;
  font-size: 2rem;
}

.favoriteBody {
  position: relative;
}

.favorite img {
  width: 100%;
  height: 150px;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 5px;
}

.favoriteContent {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.notFavorite {
  height: 350px;
}
@media screen and (max-width: 768px) {
  .favorite {
    margin-bottom: 20px;
  }
  .favorite img {
    width: 100%;
    height: 250px;
  }
}
</style>
