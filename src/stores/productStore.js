import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('productStore', {
  state: () => {
    return{
      products: []
    }
  },
  actions: {  //methods
    getProducts() {
      axios
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
        console.log("有取得商品",res.data);
        this.products = res.data.products;
      })
      .catch((err) => {
        alert(err.response.data);
      });
    },
  },
  getters: {  //computed

  }
})
