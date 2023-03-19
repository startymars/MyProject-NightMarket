<template>
  <HeaderNav class="bg-black position-static" />
  <div class="newBanner d-flex justify-content-center align-items-center">
    <div class="newsTitle">最新消息</div>
  </div>
  <div class="bg-secondary">
    <div class="container">
      <nav aria-label="breadcrumb" class="pt-5 pb-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">首頁</a></li>
          <li class="breadcrumb-item active" aria-current="page">最新消息</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <img
              src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHdhcm4lMjBmb29kfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              class="card-img-top newsShopImg"
              height="300"
              alt="new1"
            />
            <div class="position-absolute top-0 start-0">
              <span class="badge bg-black p-3 fs-5">好好商城</span>
            </div>
            <div class="card-body">
              <div class="card-title h5">
                12間必吃美食跟著這篇絕對不會迷路
                <span class="card-text h6"> 2022/01/22 </span>
              </div>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#">
                <p class="card-text text-end fs-3">
                  <small class="text-muted">Read More</small>
                </p>
              </a>
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
export default {
  components: {
    HeaderNav,
    FooterView,
  },
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
.corner {
  margin-top: 60px;
  padding-top: 100px;
  background-color: blue;
}

.newsShopImg {
  object-fit: cover;
}

.badge {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
</style>
