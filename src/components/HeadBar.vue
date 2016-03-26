<template>
  <ul class="m-prolist">
    <li><a v-link="{name: 'ProList'}">Product List</a></li>
    <li><a v-link="{name: 'Cart'}">Cart({{ products.length > 0 ? products.length : 0 }})</a></li>
  </ul>
</template>

<script>
  import {getAllInCart} from '../vuex/Cart/getters'
  
  export default {
    vuex: {
      getters: {
        products: getAllInCart
      }
    }
  }
</script>

<style scoped>
  a:hover {
    background: #FF4C51;
    color: #fff;
  }
  .m-prolist {
    padding: 20px;
    overflow: hidden;
    border-bottom: 2px solid #ececec;
  }
  .m-prolist li {
    list-style: none;
    float: left;
  }
  .m-prolist li a {
    display: block;
    padding: 20px;
    text-decoration: none;
  }
</style>