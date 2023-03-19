<template>
  <nav class="navbar navbar-expand-md fixed-top">
  <div class="container">
    <div class="logo">
      <router-link to="/">
          <img src="../assets/Logo.png" alt="logo" class="img-fluid"/>
      </router-link>
     </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <router-link to="/News" class="text-decoration-none text-white">最新消息</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Food" class="text-decoration-none text-white">美食報報</router-link>
        </li>
        <li class="nav-item d-flex align-items-center rounded-pill">
            <router-link to="/Favorite" class="px-2">
              <img src="../assets/heart.png" alt="favorite" />
            </router-link>
            <router-link to="/Cart" class="px-2">
              <img src="../assets/shopping-cart.png" alt="shopping-cart" />
            </router-link>
            <img src="../assets/user.png" alt="user" class="px-2" />
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  methods: {
    scroll () {
      console.log('我正在滾動')
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const nav = document.querySelector('nav')
      if (scrollTop > 100) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }
  },
  mounted () {
    const navScroll = document.querySelector('nav')
    console.log(navScroll)
    navScroll.addEventListener('scroll', this.scroll())
  }

}
</script>

<style scoped>
.logo img{
  max-width: 60%;
  height: auto;
}
.rounded-pill{
  background-color: rgba(255, 255, 255, 0.1);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.nav-item{
  padding:10px;
}
nav.scrolled {
  background-color: black;
}
</style>
