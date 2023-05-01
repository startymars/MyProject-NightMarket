<template>
  <div class="container food">
    <div class="title d-flex justify-content-between align-items-center">
      <h4>最新消息管理</h4>
      <button
        class="btn btn-primary btn-lg"
        type="button"
        @click="openModal('create')"
      >
        新增文章
      </button>
    </div>
    <div
      class="allNews d-flex justify-content-between align-items-center mt-3 mb-3"
    >
      <span
        >全部(9) |
        <span>已發表(9)</span>
      </span>
      <div class="input-container">
        <input type="text" name="text" class="input" placeholder="search..." />
        <span class="icon">
          <svg
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="1"
                d="M14 5H20"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="1"
                d="M14 8H17"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                stroke="#000"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="1"
                d="M22 22L20 20"
                stroke="#000"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">全選</th>
          <th width="120">圖片</th>
          <th>文章標題</th>
          <th width="100">店家名稱</th>
          <th width="100">建立日期</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in article" :key="item.id">
          <td>1111</td>
          <td>
            <img :src="item.imageUrl" class="img-fluid" alt="newsImg" />
          </td>
          <td class="text-left">{{ item.title }}</td>
          <td class="text-left">{{ item.author }}</td>
          <td class="text-left">{{ item.create_at }}</td>
          <td>
            <span class="text-success" v-if="item.isPublic">啟用</span>
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
    <Pagination :pages="page" @emit-change="getNews"></Pagination>
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
            <span v-if="isNew">新增貼文</span>
            <span v-else>編輯貼文</span>
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
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempProduct.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempProduct.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempProduct.author"
                  placeholder="請輸入作者"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
            </div>
            <!-- <div>
            
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
            </div> -->

            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempProduct.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempProduct.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempProduct.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempProduct.tag[tempProduct.tag.length - 1] ||
                    !tempProduct.tag.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    type="button"
                    @click="tempProduct.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempProduct.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempProduct.content"
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
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
          <button type="button" class="btn btn-primary" @click="addNews">
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
          <button type="button" class="btn btn-danger" @click="deleteNews">
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
.input-container {
  width: 220px;
  position: relative;
}

.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: 0.2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.input-container:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}
</style>

<script>
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pagination from "@/components/PaginationView.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      article: {},
      tempProduct: {
        tag: [""],
      },
      create_at: 0,
      isNew: true,
      page: {},
      bsModal: "",
      deleteModal: "",
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ["heading", "typing", "bold", "italic", "|", "link"],
      },
    };
  },
  components: {
    Pagination,
  },
  // watch: {
  //   article() {
  //     this.tempProduct = {
  //       ...this.article,
  //       tag: this.article.tag || [],
  //       isPublic: this.article.isPublic || false,
  //     };
  //     [this.create_at] = new Date(this.tempProduct.create_at * 1000)
  //       .toISOString()
  //       .split('T');
  //   },
  //   create_at() {
  //     this.tempProduct.create_at = Math.floor(new Date(this.create_at) / 1000);
  //   },
  // },
  methods: {
    getNews(page = 1) {
      this.$http
        .get(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/articles/?page=${page}`
        )
        .then((res) => {
          console.log(res.data);
          this.article = res.data.articles;
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
        console.log("1111", this.tempProduct);
      } else if (status === "delete") {
        this.deleteModal.show();
        this.tempProduct = { ...product };
      }
    },
    addNews() {
      //用this.isNew判斷開啟哪個API
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article`;
      let method = "post";
      console.log("1111");
      if (!this.isNew) {
        //false編輯
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article/${this.tempProduct.id}`;
        method = "put";
      }

      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          console.log("11123", res.data);
          this.getNews(); //將新增後的產品重新呼叫取得產品列表
          this.bsModal.hide(); //關閉modal
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteNews() {
      this.$http
        .delete(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article/${this.tempProduct.id}`
        )
        .then((res) => {
          console.log(res.data);
          this.article = res.data.articles;
          this.getNews(); //將新增後的產品重新呼叫取得產品列表
          this.deleteModal.hide();
        })
        .catch((err) => {
          alert(err.response.data);
        });
    },
  },
  mounted() {
    this.getNews();
    this.bsModal = new bootstrap.Modal(this.$refs.productModal);
    this.deleteModal = new bootstrap.Modal(this.$refs.delProductModal);
  },
};
</script>







   