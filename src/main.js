import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'

import './assets/all.scss'
import './assets/custom.css'
import { defineRule,Form, Field, ErrorMessage,configure } from 'vee-validate';
import { required, email, min, max } from '@vee-validate/rules';
import { localize,loadLocaleFromURL } from '@vee-validate/i18n';


defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

// 讀取外部的資源
loadLocaleFromURL('./zh_TW.json');

// Activate the locale
configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});


const app = createApp(App)
const pinia=createPinia();
app.use(pinia);
app.use(router)
app.use(VueAxios, axios)
app.use(CKEditor)
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
