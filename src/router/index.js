import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Front/HomeView.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/Front/NewsView.vue')
  },
  {
    path: '/Food',
    name: 'Food',
    component: () => import('../views/Front/FoodView.vue')
  },
  {
    path: '/FoodDetail',
    name: 'FoodDetail',
    component: () => import('../views/Front/FoodDetailView.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/Front/CartView.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../views/Front/OrderView.vue')
  },
  {
    path: '/Favorite',
    name: 'Favorite',
    component: () => import('../views/Front/FavoriteView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Front/adminLogin.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashabord/DashabordView.vue'),
    children: [
      {
        path: 'adminOrder',
        name: 'adminOrder',
        component: () => import('../views/Dashabord/adminOrder.vue')
      },
      {
        path: 'adminNews',
        name: 'adminNews',
        component: () => import('../views/Dashabord/adminNews.vue')
      },
      {
        path: 'adminFood',
        name: 'adminFood',
        component: () => import('../views/Dashabord/adminFood.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
