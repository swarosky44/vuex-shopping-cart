import {
  GET_ONE_PRO,
  GET_ALL_PRO,
  ADD_TO_CART
} from '../mutation-types'

const state = {
  pro: {},
  all: []
}

const mutations = {
  [GET_ONE_PRO] (state, pro) {
    state.pro = pro
  },
  [GET_ALL_PRO] (state, products) {
    state.all = products
  },
  [ADD_TO_CART] (state, product) {
    state.all.find(p => p.pro_code === product.pro_code).num--
  }
}

export default {
  state,
  mutations
}

