import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('cartStore', {
  state: () => {
    return{
      carts: []
    }
  },
  actions: {  //methods
    getCarts() {
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          console.log("ww取得購物車列表", res.data.data);
          this.carts = res.data.data;
          console.log("有被存入", this.carts);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
  },
  getters: {  //computed

  }
})
