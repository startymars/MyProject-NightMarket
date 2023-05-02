import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default defineStore('productStore', {
  state: () => {
    return{
      products: [],
      favorites:[],
      isLoading:false
    }
  },
  actions: {  //methods
    getProducts() {
      this.isLoading = true;
      axios
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
      .then((res) => {
        this.isLoading=false;
        this.products = res.data.products;
      })
      .catch((err) => {
        alert(err.response.data);
      });
    },
    favoriteProducts(item){
        this.favorites.push({"image":item.imageUrl,"title":item.title,"content":item.content,"price":item.price,"id":item.id})
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
            title: '已加入收藏'
          })
        console.log(this.favorites);
    },
    deleteFavoriteProducts(item){
        const filterFavorite=this.favorites.filter((product)=>product.id!==item.id)
        this.favorites=filterFavorite;
        console.log(this.favorites);
        // this.favorites.forEach((product)=>{
        //     if(item.title==product.title){
        //         console.log("已有此項目");
        //     }
        // })
    }
  },
  getters: {  //computed

  }
})
