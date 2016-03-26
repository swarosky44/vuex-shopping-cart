<template>
  <div class="m-prolist">
    <div class="m-item" v-for="p in products">
      <a v-link="{name: 'ProDetail', params: {pro_code:p.pro_code}}">
      {{ p.pro_name }}
    </a>
    <span>￥：{{ p.price }}</span>
    </div>
  </div>
</template>

<script>
  import {getProducts} from '../vuex/Product/actions'
  export default {
    vuex: {
      getters: {
        products: ({product}) => product.all
      },
      actions: {getProducts}
    },
    created () {
      if (!this.products.length) {
        this.getProducts()
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    background: #FF4C51;
    color: #fff;
  }
  .m-prolist {
    padding: 20px;
  }
  .m-prolist .m-item {
    padding: 20px;
  }
  .m-prolist .m-item a {
    display: inline-block;
    padding: 5px;
    width: 80px;
    text-align: center;
  }
  .m-prolist .m-item span {
    display: inline-block;
    width: 120px;
    text-indent: 40px;
  }
</style>
