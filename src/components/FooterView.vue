<template>
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
                   <router-link to="/Login" class="text-decoration-none text-white">新增你的餐廳</router-link>
                </li>
                <li class="news">
                    <router-link to="/News" class="text-decoration-none text-white">最新消息</router-link>
                </li>
                <li>
                     <router-link to="/Food" class="text-decoration-none text-white">美食報報</router-link>
                </li>
            </ul>
        </div>
        <div class="col text-white text-center fProject">
            <hr>
            <div class="pb-3">本網站僅供個人作品使用，不提供商業用途</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

ul{
  list-style:none;
}

.footer{
    font-family: 'Noto Serif TC';
}

.fMenu{
    padding-top: 10px;
}

.logo{
    padding-top: 30px;
}

.footerMenu{
  letter-spacing: 0.5rem;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}

.news{
    padding-left: 40px;
    padding-right: 40px;
}

.fProject{
    padding-top: 80px;
}

@media screen and (max-width:768px){
    .logo{
        padding-left: 30px;
    }
    .footerMenu{
      display: flex;
      flex-direction:column-reverse;
      align-items: start;
      -webkit-writing-mode:horizontal-tb;
      writing-mode:horizontal-tb;
      padding-top: 40px;
    }
    .news{
     padding: 0;
     padding-top: 40px;
     padding-bottom: 40px;
    }

    .fProject{
        font-size: 12px;
    }

}
</style>
