<template>
  <HeaderNav class="bg-black position-static" />
  <div class="newBanner d-flex justify-content-center align-items-center">
    <div class="newsTitle">訂單資訊</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5 pb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">訂單資訊</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-lg-8 mb-4">
          <h4>訂單資訊</h4>
          <hr />
          <v-form ref="form" v-slot="{ errors }" @submit="createOrder"
            >{{ errors }}
            <div class="row">
              <div class="mb-3 col-6">
                <label for="name" class="form-label">收件人姓名</label>
                <v-field
                  id="name"
                  name="name"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  rules="required"
                  v-model="form.user.name"
                  placeholder="請輸入您的姓名"
                >
                </v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3 col-6">
                <label for="tel" class="form-label">收件人電話</label>
                <v-field
                  id="tel"
                  name="phone"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  :rules="isPhone"
                  v-model="form.user.tel"
                  placeholder="請輸入您的電話"
                >
                </v-field>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">信箱</label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  rules="email|required"
                  v-model="form.user.email"
                  placeholder="請輸入您的信箱"
                >
                </v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="emaaddressil" class="form-label">地址</label>
                <v-field
                  id="address"
                  name="address"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入您的地址"
                  rules="required"
                  v-model="form.user.address"
                >
                </v-field>
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="pay" class="form-label">付款方式</label>
                <select class="form-select" aria-label="pay">
                  <option disabled selected>請選擇付款方式</option>
                  <option value="1">貨到付款</option>
                  <option value="2">信用卡付款</option>
                  <option value="3">ATM轉帳</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">備註</label>
                <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6 mb-3">
                <router-link to="/Cart">
                  <button type="button" class="btn btn-outline-primary">
                    回上一頁
                  </button>
                </router-link>
              </div>
              <div class="col-6 mb-3">
                <button type="submit" class="btn btn-primary">結帳</button>
              </div>
            </div>
          </v-form>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="bg-primary p-4">
            <h4>你的訂單</h4>
            <hr />
            <div class="payDetai p-0">
              <div class="d-flex justify-content-between mb-4">
                <h6 class="payTitle">商品</h6>
                <h6 class="payTotal">總計</h6>
              </div>
              <ul
                class="d-flex justify-content-between p-0 mb-4"
                v-for="(item, index) in carts.carts"
                :key="item.id"
              >
                <li class="payNumber">
                  {{ index + 1 }}
                  <span class="payItem">{{ item.product.title }}</span>
                </li>

                <li class="payPrice">NT${{ item.product.price }}</li>
              </ul>
            </div>
            <hr />
            <div class="payFinalTotal d-flex justify-content-between mb-4">
              <h5>總計</h5>
              <div class="fw-bold">${{ carts.final_total }}</div>
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
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCarts"]),
    onSubmit() {
      console.log(this.form);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需為正確的手機號碼格式";
    },
    getCarts() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
    createOrder() {
      //送出結帳
      const order = this.form;
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.form.message = "";
          this.getCarts();
          const orderId = res.data.orderId;
          this.$router.push(`/OrdersFinish/${orderId}`);
        })
        .catch((err) => {
          console.log(err.data);
        });
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
  background-image: url("https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDM4fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
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
</style>
