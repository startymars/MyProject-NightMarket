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
        <div class="col-8">
          <h4>訂單資訊</h4>
          <hr />
          <form>
            <div class="row">
              <div class="mb-3 col-6">
                <label for="name" class="form-label">收件人姓名</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="請輸入您的姓名"
                />
              </div>
              <div class="mb-3 col-6">
                <label for="tel" class="form-label">收件人電話</label>
                <input
                  id="tel"
                  name="phone"
                  type="text"
                  class="form-control"
                  placeholder="請輸入您的電話"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">信箱</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="請輸入您的信箱"
                />
              </div>
              <div class="mb-3">
                <label for="emaaddressil" class="form-label">地址</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  class="form-control"
                  placeholder="請輸入您的地址"
                />
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
                ></textarea>
              </div>
              <div class="row">
                <div class="col-6 mb-3">
                  <button type="submit" class="btn btn-lg btn-outline-primary">
                    回上一頁
                  </button>
                </div>
                <div class="col-6 mb-3">
                  <button type="submit" class="btn btn-lg btn-primary">
                    結帳
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-4">
          <div class="bg-primary p-4">
            <h4>你的訂單</h4>
            <hr />
            <ul class="payDetai p-0">
              <li class="d-flex justify-content-between mb-4">
                <h6 class="payTitle">商品</h6>
                <h6 class="payTotal">總計</h6>
              </li>
              <li class="d-flex justify-content-between mb-4">
                <div class="payNumber">
                  1.
                  <span class="payItem">壕大大炭烤雞排</span>
                </div>

                <div class="payPrice">NT$150</div>
              </li>
            </ul>
            <hr />
            <div class="payFinalTotal d-flex justify-content-between mb-4">
              <h5>總計</h5>
              <div class="fw-bold">$900</div>
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
      foodProducts: [],
      qty: 1,
      carts:[],
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
  methods: {
    onSubmit() {
      console.log(this.form);
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需為正確的手機號碼格式";
    },
    getCarts(){
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
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
  },
  mounted() {},
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
</style>
