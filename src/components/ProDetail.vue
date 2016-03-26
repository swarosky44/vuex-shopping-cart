<template>
  <div class="m-detail">
    <a class="u-goback" v-link="{name: 'ProList'}"> &gt; Leave Here</a>
    <p class="u-name">{{ product.pro_name }}</p>
    <p class="u-price">￥：{{ product.price }}</p>
    <p>数量：{{ product.num }}</p>
  </div>
  <div class="m-btn">
    <a class="u-btn" href="javascript:;" @click="addToCart(product)">{{ product.num > 0 ? 'Add To Cart' : 'None'}}</a>
  </div>
</template>

<script>
  import {
    getProDetail,
    addToCart
  } from '../vuex/Product/actions'

  export default {
    vuex: {
      getters: {
        product: ({product}) => product.pro,
        products: ({product}) => product.all
      },
      actions: {
        getProDetail,
        addToCart
      }
    },
    created () {
      let pro_code = parseInt(this.$route.params.pro_code)
      let pro = this.products.find(p => p.pro_code === pro_code)
      this.getProDetail(pro_code, pro)
    }
  }
</script>

<style>
  .m-detail {
    padding: 40px;
    border-bottom: 2px solid #ececec;
  } 
  .u-name {
    margin-top: 30px;
  } 
  .u-price {
    margin-bottom: 10px;
  }
  .m-btn {
    padding: 40px;
  }
  .u-btn {
    float: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #FF4C51;
    color: #fff;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    border-radius: 2px;
    box-shadow: 0 3px 2px #FF0010;
  }
  .u-btn:hover {
    background: #FF0010; 
  }
  .u-goback {
    text-decoration: none;
    font-style: italic;
    color: #FF3E55;
  }
</style>
