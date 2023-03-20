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
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('VueLoading',Loading) //全域元件註冊
app.use(VueAxios, axios)
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app')
