<template>
  <nav class="main-menu">
    <ul>
      <li>
        <router-link to="/admin/adminFood">
          <i class="fa fa-utensils"></i>
          <span class="nav-text"> 美食管理</span>
        </router-link>
      </li>
      <li class="has-subnav">
        <router-link to="/admin/adminOrder">
          <i class="fa fa-truck-fast"></i>
          <span class="nav-text"> 訂單管理 </span>
        </router-link>
      </li>
      <li class="has-subnav">
        <router-link to="/admin/adminNews">
          <i class="fa fa-comments"></i>
          <span class="nav-text"> 最新消息管理 </span>
        </router-link>
      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-ticket"></i>
          <span class="nav-text"> 優惠券管理 </span>
        </a>
      </li>
    </ul>
    <ul class="logout">
      <li>
        <a href="/">
          <i class="fa fa-house"></i>
          <span class="nav-text"> 回前台 </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css);
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

.fa {
  position: relative;
  display: table-cell;
  width: 60px;
  height: 36px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
}

/* .main-menu:hover,
nav.main-menu.expanded {
  width: 3%;
  overflow: visible;
} */

.main-menu {
  background: #855e44;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  height: calc(100vh - 51.2px);
  width: 15%;
  overflow: hidden;
  -webkit-transition: width 0.05s linear;
  transition: width 0.05s linear;
  z-index: 1000;
}

.main-menu > ul {
  margin: 20px 0;
}

.main-menu li {
  position: relative;
  display: block;
  width: 250px;
}

.main-menu li > a {
  position: relative;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  color: rgb(255, 255, 255);
  text-decoration: none;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.main-menu .nav-text {
  position: relative;
  display: table-cell;
  vertical-align: middle;
  width: 190px;
}

.main-menu > ul.logout {
  position: absolute;
  left: 0;
  bottom: 0;
}

a:hover,
a:focus {
  text-decoration: none;
}
nav ul,
nav li {
  outline: 0;
  margin: 0;
  padding: 0;
}
.main-menu li:hover > a,
nav.main-menu li.active > a,
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus,
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus,
.dashboard-page nav.dashboard-menu ul li:hover a,
.dashboard-page nav.dashboard-menu ul li.active a {
  color: rgb(0, 0, 0);
  background-color: #ffffff;
}
</style>
