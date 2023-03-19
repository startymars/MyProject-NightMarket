<template>
  <div class="background">
    <div class="container bgColor">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h4 class="text-center mt-4">後台登入</h4>
        <div class="box">
          <form class="row">
            <div class="col-12 mb-4">
              <label for="email" class="form-label">帳號</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="請輸入帳號"
                v-model="temp.username"
              />
            </div>
            <div class="col-12 mb-5">
              <label for="password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入密碼"
                v-model="temp.password"
              />
            </div>
            <div class="col-12 d-grid text-center">
              <button type="button" class="btn btn-primary" @click="login">登入</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      temp: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log("ssss");
      this.$http
        .post(`${VITE_APP_URL}/v2/admin/signin`, this.temp)
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `week2Token=${token};expires=${new Date(expired)};`
          this.$router.push('/admin')
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    mounted () {
      console.log("成功進來");
    }
  }
}
</script>

<style lang="scss" scoped>

.background {
  height: 100vh;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1617870314635-fc819547ec11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlnaHQlMjBtYXJrZXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
}

.bgColor {
  height: 60vh;
  width: 50%;
  background-color: rgb(255, 249, 243);
  border-radius: 10px;
  box-shadow: 3px 3px 6px 3px #cccccc;
  padding: 20px;
  opacity: 0.9;
}
</style>
