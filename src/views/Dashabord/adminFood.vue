<template>
  <div class="container food">
    <div class="title d-flex justify-content-between align-items-center">
      <h4>美食管理</h4>
      <button
        class="btn btn-primary btn-lg"
        type="button"
        @click="openModal('create')"
      >
        新增產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-left">{{ item.origin_price }}</td>
          <td class="text-left">{{ item.price }}</td>
          <td>
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-dark btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="page" @emit-change="getProducts"></Pagination>
  </div>
  <!-- Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>

              <div>
                <h4>多圖設置</h4>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div
                    class="mb-1"
                    v-for="(image, key) in tempProduct.imagesUrl"
                    :key="key"
                  >
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">圖片網址</label>
                      <input
                        v-model="tempProduct.imagesUrl[key]"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                      />
                    </div>
                    <img class="img-fluid" :src="tempProduct.imagesUrl[key]" />
                  </div>
                  <div
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                  >
                    <button
                      class="btn btn-outline-primary btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100"
                      @click="tempProduct.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImages"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addData">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 刪除Modal -->
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.food {
  position: absolute;
  width: 80%;
  height: calc(100vh - (51.2px + 10%));
  left: 17%;
  top: 10%;
}
</style>

<script>
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pagination from "@/components/PaginationView.vue";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      page: {},
      bsModal: "",
      deleteModal: "",
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products/?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
    openModal(status, product) {
      if (status === "create") {
        this.bsModal.show();
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [],
        };
      } else if (status === "edit") {
        this.bsModal.show();
        this.isNew = false;
        this.tempProduct = { ...product };
      } else if (status === "delete") {
        this.deleteModal.show();
        this.tempProduct = { ...product };
      }
    },
    addData() {
      //用this.isNew判斷開啟哪個API
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`;
      let method = "post";
      if (!this.isNew) {
        //false編輯
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = "put";
      }

      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          if (res.data) {
            this.getProducts(); //將新增後的產品重新呼叫取得產品列表
            this.bsModal.hide(); //關閉modal
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    deleteProduct() {
      this.$http
        .delete(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        )
        .then((res) => {
          if (res.data) {
            this.products = res.data.products;
            this.getProducts(); //將新增後的產品重新呼叫取得產品列表
            this.deleteModal.hide();
          }
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.bsModal = new bootstrap.Modal(this.$refs.productModal);
    this.deleteModal = new bootstrap.Modal(this.$refs.delProductModal);
  },
};
</script>
