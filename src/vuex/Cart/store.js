import {
  ADD_TO_CART,
  CHECK_OUT
} from '../mutation-types'

const state = {
  products: []
}

const mutations = {
  [ADD_TO_CART] (state, product) {
    console.log(product)
    let pro = state.products.find(p => p.id === product.pro_code)
    if (pro) {
      pro.quantity++
    } else {
      state.products.push({
        id: product.pro_code,
        name: product.pro_name,
        price: product.price,
        quantity: 1
      })
    }
  },
  [CHECK_OUT] (state, cartProducts) {
    state.products = []
  }
}

export default {
  state,
  mutations
}
