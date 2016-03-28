<template>
  <div class="m-cart" v-show="!cartProducts.length">购物车空空荡荡</div>
  <div v-show="cartProducts.length" class="g-wrap">
    <div class="m-cart">
      <div class="u-item" v-for="p in cartProducts">
        <span>{{ p.name }}</span>
        <span>￥：{{ p.price }}</span>
        <span>数量：{{ p.quantity }}</span>
      </div>
      <div class="m-total">
        总价￥：{{ count }}
      </div>
    </div>
    <div class="m-btn">
      <button class="u-btn" @click="checkout(cartProducts)">结算</button>
    </div>
  </div>
</template>

<script>
  import {getAllInCart} from '../vuex/Cart/getters'
  import {checkout} from '../vuex/Cart/actions'
  export default {
    vuex: {
      getters: {
        cartProducts: getAllInCart,
        count: ({cart}) => {
          let total = 0
          cart.products.forEach(ele => {
            total += ele.quantity * ele.price
          })
          return total
        }
      },
      actions: {checkout}
    }
  }
</script>

<style scoped>
  .m-cart {
    padding: 40px;
    border-bottom: 2px solid #ececec;
  }
  .u-item {
    padding: 10px 0;
  }
  .m-btn {
    padding: 40px;
  }
  .m-total {
    margin-top: 20px;
    text-indent: 20px;
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
    border: none;
  }
  .u-btn:hover {
    background: #FF0010; 
  }
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
</style>
