import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('cartStore', {
  state: () => {
    return {
      carts: [],
      cartStatus: false,
      cartNum: 0
    }
  },
  actions: {  //methods
    getCarts() {
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          console.log("ww取得購物車列表", res.data.data);
          this.carts = res.data.data;
          if (this.carts.carts.length) {
            this.cartStatus = true
          } else {
            this.cartStatus = false
          }
          this.calcNum();
          console.log("有被存入", this.carts);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
    addToCart(product_id, qty = 1) {
      const data = {
        product_id, //同名不寫第二次
        qty,
      };
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          console.log("加入購物車:", res.data)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: '已加入購物車'
          })
          this.getCarts();
        })
        .catch((err) => {
          console.log(err.data);
        });
    },
    calcNum() {
      this.cartNum = this.carts.carts.length
    }
  },
  getters: {  //computed

  }
})
