<template>
    <AdminHeaderView />
    <AdminNavbarView />
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router'
import AdminHeaderView from '@/components/adminHeader.vue'
import AdminNavbarView from '@/components/adminNavbar.vue'

const { VITE_APP_URL } = import.meta.env
export default {
  methods: {
    checkLogin () {
      console.log("檢查")
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)week2Token\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = token

      this.$http
        .post(`${VITE_APP_URL}/v2/api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/Login')
          }
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/Login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  },
  components: {
    RouterView,
    AdminHeaderView,
    AdminNavbarView
  }
}
</script>
