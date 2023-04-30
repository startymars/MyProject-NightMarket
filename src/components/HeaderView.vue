<template>
  <nav
    class="navbar navbar-expand-md bg-black fixed-top"
    data-bs-spy="scroll"
    data-bs-target="#navbar-example"
  >
    <div class="container" id="navbar-example">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/Logo.png" alt="logo" class="img-fluid" />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav align-items-center navbarLgMenu">
          <li class="nav-item">
            <router-link to="/News" class="text-decoration-none text-white"
              >最新消息</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Food" class="text-decoration-none text-white"
              >美食報報</router-link
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link to="/Favorite" class="px-3">
              <img src="../assets/heart.png" alt="favorite" />
            </router-link>
            <div class="position-relative">
              <router-link to="/Cart">
                <img src="../assets/shopping-cart.png" alt="shopping-cart" />
              </router-link>
              <span
                class="badge rounded-pill bg-primary position-absolute"
                style="top: -40%; right: -60%"
                >{{ cartNum }}</span
              >
            </div>
            <img src="../assets/user.png" alt="user" class="px-4" />
          </li>
        </ul>
        <ul class="navbarMenu p-0 mt-5">
          <li>
            <router-link to="/News" class="fs-3 text-decoration-none text-white"
              >最新消息</router-link
            >
          </li>
          <li>
            <router-link to="/Food" class="fs-3 text-decoration-none text-white"
              >美食報報</router-link
            >
          </li>
          <li>
            <router-link
              to="/Login"
              class="fs-3 text-decoration-none text-white"
              >新增你的餐廳</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import cartStore from "@/stores/cartStore.js";
import { mapState, mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(cartStore, ["getCarts"]),
  },
  computed: {
    ...mapState(cartStore, ["cartNum"]),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style scoped>
body {
  position: relative;
}
.logo img {
  max-width: 60%;
  height: auto;
}
.rounded-pill {
  background-color: rgba(255, 255, 255, 0.1);
}
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
.nav-item {
  padding: 10px;
}
.navbarMenu {
  display: none;
}
.navbarMenu li {
  margin: 10% 0%;
}
@media screen and (max-width: 768px) {
  nav {
    background-image: url("/src/assets/navbar.png");
    background-repeat: no-repeat;
    background-position: center, center;
    background-size: cover;
  }
  #navbarNavDropdown .navbarLgMenu {
    display: none;
  }
  .navbarMenu {
    display: block;
  }
}
</style>
