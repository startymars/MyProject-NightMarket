import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'

import './assets/custom.css'


const app = createApp(App)
const pinia=createPinia();
app.use(pinia);
app.use(router)
app.component('VueLoading',Loading) //全域元件註冊
app.use(VueAxios, axios)

app.mount('#app')
