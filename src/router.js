import Vue from 'vue'
import VueRouter from 'vue-router'
import ProList from './components/ProList'
import Cart from './components/Cart'
import ProDetail from './components/ProDetail'

Vue.use(VueRouter)
var router = new VueRouter()
router.map({
  '/': {
    name: 'ProList',
    component: ProList
  },
  '/cart': {
    name: 'Cart',
    component: Cart
  },
  '/pro/:pro_code': {
    name: 'ProDetail',
    component: ProDetail
  }
})

export default router
