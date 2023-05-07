<template>
  <div class="bg-secondary">
    <div class="subscribe">
      <div class="container">
        <div class="row">
          <div class="h5 fw-bold pt-5">訂閱我們的文章，獲取最新消息</div>
          <div class="col-5">
            <v-form ref="form" v-slot="{ errors }" @submit="getSubscribe">
              <div class="mb-3">
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  size="10"
                  class="form-control"
                  rules="email|required"
                  placeholder="請輸入您的信箱"
                  :class="{ 'is-invalid': errors['email'] }"
                  v-model="this.email"
                >
                </v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <button type="submit" class="btn btn-primary mb-3">
                立即訂閱
              </button>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black footer">
    <div class="container">
      <div class="row fMenu">
        <div class="col-md-9 text-white">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/Logo.png" alt="logo" width="200" />
            </router-link>
          </div>
        </div>
        <div class="col-md-3 text-white">
          <ul class="footerMenu">
            <li>
              <router-link to="/Login" class="text-decoration-none text-white"
                >新增你的餐廳</router-link
              >
            </li>
            <li class="news">
              <router-link to="/News" class="text-decoration-none text-white"
                >最新消息</router-link
              >
            </li>
            <li>
              <router-link to="/Food" class="text-decoration-none text-white"
                >美食報報</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col text-white text-center fProject">
          <hr />
          <div class="pb-3">本網站僅供個人作品使用，不提供商業用途</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    getSubscribe() {
      Swal.fire({
        title: "已加入訂閱!",
        icon: "success",
        showConfirmButton: true,
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.footer {
  font-family: "Noto Serif TC";
}

.fMenu {
  padding-top: 10px;
}

.logo {
  padding-top: 30px;
}

.footerMenu {
  letter-spacing: 0.5rem;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}

.news {
  padding-left: 40px;
  padding-right: 40px;
}

.fProject {
  padding-top: 80px;
}

.subscribe {
  width: 100%;
  height: 200px;
  background-image: url("https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: cover;
  opacity: 0.9;
  background-attachment: fixed;
}

@media screen and (max-width: 768px) {
  .logo {
    padding-left: 30px;
  }
  .footerMenu {
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
    padding-top: 40px;
  }
  .news {
    padding: 0;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .fProject {
    font-size: 12px;
  }
}
</style>
