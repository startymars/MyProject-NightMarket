<template>
  <HeaderNav class="bg-black position-static" />
  <div class="newBanner d-flex justify-content-center align-items-center">
    <div class="newsTitle">購物車</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <div class="cartClear d-flex justify-content-between align-items-center">
        <nav aria-label="breadcrumb" class="pt-5 pb-5">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">首頁</a></li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
        <div class="text-end mb-3">
          <button
            type="button"
            class="btn btn-lg btn-outline-primary"
            @click="deleteCarts"
          >
            清空購物車
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <table class="table">
            <thead>
              <tr>
                <th class="col"></th>
                <th class="col">圖片</th>
                <th class="col">商品名稱</th>
                <th class="col">價格</th>
                <th class="col">數量</th>
                <th class="col">總價</th>
              </tr>
            </thead>
            <tbody>
              <tr
                style="vertical-align: middle"
                v-for="item in carts.carts"
                :key="item.id"
              >
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="deleteCartItem(item.id)"
                  >
                    <span class="material-symbols-outlined">clear</span>
                  </button>
                </td>
                <td style="width: 150px">
                  <div
                    style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`,
                    }"
                  ></div>
                </td>
                <td class="fs-6 fw-bold">{{ item.product.title }}</td>
                <td>${{ item.product.price }}</td>
                <td>
                  <div class="input-group input-group-sm">
                    <select
                      name=""
                      id=""
                      class="form-control"
                      v-model="item.qty"
                      @change="updateCartItem(item)"
                    >
                      <option :value="i" v-for="i in 10" :key="i + '12345'">
                        {{ i }}
                      </option>
                    </select>
                  </div>
                </td>
                <td>${{ item.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <div class="discount">
            <div class="mb-3">
              <label for="discount" class="form-label fw-bold h5"
                >優惠券折扣</label
              >
              <input
                type="text"
                class="form-control p-3"
                id="discount"
                placeholder="輸入優惠代碼"
                v-model="this.coupon"
              />
            </div>
            <div class="text-end mb-3">
              <button type="button" class="btn btn-primary" @click="useCoupon">
                使用折扣
              </button>
            </div>
          </div>
          <div class="cartList p-3 mb-4">
            <h5 class="mb-5">購物清單總計</h5>
            <div class="cartTotal">
              <div
                class="cartOrigin d-flex justify-content-between align-items-center"
              >
                <p>原始價格</p>
                <p>NT$100</p>
              </div>
              <div
                class="cartDiscount d-flex justify-content-between align-items-center"
              >
                <p>折扣</p>
                <p>-NT$30</p>
              </div>
              <hr />
              <div
                class="totalPrice mb-3 d-flex justify-content-between align-items-center"
              >
                <p class="fw-bold fs-6">總付款金額</p>
                <p class="fw-bold">NT$450</p>
              </div>
            </div>
            <div class="text-end mb-3">
              <router-link to="/Order">
                <button type="button" class="btn btn-primary">前往付款</button>
              </router-link>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      carts: [],
      coupon: "",
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  methods: {
    getCarts() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          console.log("取得購物車列表", res.data.data);
          this.carts = res.data.data;
          console.log("有被存入", this.carts);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
    updateCartItem(item) {
      //購物車的id、產品的id
      const data = {
        product_id: item.product.id, //同名不寫第二次
        qty: item.qty,
      };
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, {
          data,
        })
        .then((res) => {
          alert("更新購物車", res.data);
          this.getCarts();
        })
        .catch((err) => {
          alert(err.data);
        });
    },
    deleteCartItem(item) {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item}`)
        .then((res) => {
          console.log("刪除購物車品項", res.data);
          this.getCarts();
        })
        .catch((err) => {
          console.dir(err.data);
        });
    },
    deleteCarts() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          console.log(res.data.message);
          this.getCarts();
        })
        .catch((err) => {
          console.log(err.data.message);
          alert(err.data.message);
        });
    },
    useCoupon() {
      console.log("取得優惠券", this.coupon);
    },
  },
  mounted() {
    this.getCarts();
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

.cartList {
  background-color: rgb(253, 255, 249);
}
</style>
