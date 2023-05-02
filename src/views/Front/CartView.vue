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
            <li class="breadcrumb-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
        <div class="text-end mb-3">
          <button
            type="button"
            class="btn btn-outline-primary fs-5"
            @click="deleteCarts"
          >
            清空購物車
          </button>
        </div>
      </div>

      <div class="row">
        <template v-if="cartStatus">
          <div class="col-lg-8 mb-3">
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
                      class="btn"
                      @click="deleteCartItem(item.id)"
                    >
                      <span
                        class="material-symbols-outlined"
                        @click="deleteCartItem(item.id)"
                      >
                        delete
                      </span>
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
                        <option :value="i" v-for="i in 30" :key="i + '12345'">
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
        </template>
        <template v-else>
          <div
            class="col-12 d-flex p-5 mb-5 justify-content-center align-items-center text-center border border-dark rounded"
          >
            <div class="fs-3 align-middle">
              目前購物車無任何商品唷！
              <div class="mt-5">
                <router-link to="/">
                  <button type="button" class="btn btn-primary px-5">
                    前往購物
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </template>
        <template v-if="cartStatus">
          <div class="col-lg-4">
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="useCoupon"
                >
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
                  <p>NT${{ carts.total }}</p>
                </div>
                <div
                  class="cartDiscount d-flex justify-content-between align-items-center"
                >
                  <p>折扣</p>
                  <p>-NT$0</p>
                </div>
                <hr />
                <div
                  class="totalPrice mb-3 d-flex justify-content-between align-items-center"
                >
                  <p class="fw-bold fs-6">總付款金額</p>
                  <p class="fw-bold">NT${{ carts.final_total }}</p>
                </div>
              </div>
              <div class="text-end mb-3">
                <router-link to="/Orders">
                  <button type="button" class="btn btn-primary">
                    前往付款
                  </button>
                </router-link>
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
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      coupon: "",
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
    ...mapState(cartStore, ["cartStatus"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCarts"]),
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
          if (res.data) {
            Swal.fire({
              title: "產品已更新",
              icon: "success",
              showConfirmButton: true,
              showCancelButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.getCarts();
              }
            });
          }
        })
        .catch((err) => {
          alert(err.data);
        });
    },
    deleteCartItem(item) {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item}`)
        .then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Delete!",
              text: "產品已刪除",
              icon: "success",
              showConfirmButton: true,
              showCancelButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.getCarts();
              }
            });
          }
        })
        .catch((err) => {
          console.dir(err.data);
        });
    },
    deleteCarts() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data) {
            Swal.fire({
              title: "購物車品項已刪除",
              icon: "success",
              showConfirmButton: true,
              showCancelButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.getCarts();
              }
            });
          }
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    useCoupon() {
      console.log("取得優惠券", this.coupon);
    },
  },
  mounted() {
    this.getCarts();
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.newBanner {
  width: 100%;
  height: 300px;
  background-image: url("https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmb29kJTIwY2FydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
  opacity: 0.8;
  background-attachment: fixed;
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
  background-color: rgb(255, 255, 255);
}
</style>
