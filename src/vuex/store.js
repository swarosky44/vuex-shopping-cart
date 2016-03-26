import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/logger'
import product from './Product/store'
import cart from './Cart/store'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    product,
    cart
  },
  static: debug,
  middlewares: debug ? [logger()] : []
})
