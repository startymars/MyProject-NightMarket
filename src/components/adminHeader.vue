<template>
  <nav class="navbar navbar-light bg-secondary">
    <div class="container-fluid">
      <span class="fw-bold text-black p-2">熊好呷-夜市美食一把罩後台管理</span>
      <div class="d-flex">
        <div class="user px-3">Cream</div>
        <div class="logout">
            <router-link to="/" @click="logout" class="text-decoration-none">登出</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      document.cookie = `week2Token=;expires=${new Date()};`
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar{
  box-shadow: 0px 1px 15px 5px rgb(221, 221, 221);
}
</style>
