<template>
  <HeaderNav class="bg-black position-static" />
  <div class="bg-secondary">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5 pb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">訂單確認</li>
        </ol>
      </nav>
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-12 mb-5">
          <div class="h3 fw-bold">訂單完成</div>
        </div>
        <div
          class="col-12 border border-dark mb-5"
          style="width: 50%; height: 80%"
        >
          <ul class="text-start p-4">
            <li class="mb-3">訂單編號：{{ order.order.id }}</li>
            <li class="mb-3">收件人：{{ order.order.user.name }}</li>
            <li class="mb-3">收件地址：{{ order.order.user.address }}</li>
            <li class="mb-3">聯絡電話：{{ order.order.user.tel }}</li>
            <li class="mb-3">總金額：${{ order.order.total }}</li>
            <li class="mb-3">備註：{{ order.order.message }}</li>
          </ul>
        </div>
        <div class="col-12 mb-5">
         <router-link to="/">   
          <button type="button" class="btn btn-primary px-5 py-3">
            回首頁
          </button>
         </router-link>  
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
      order: {},
    };
  },
  components: {
    HeaderNav,
    FooterView,
  },
   watch: {
    "$route.params": {
      immediate: true,
      handler() {
        this.getOrder();
      },
    },
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data;
        })
        .catch((err) => {
          alert(err.data);
        });
    },
  },
  mounted() {
     console.log(this.order);
  },
};
</script>

<style scoped>
</style>
