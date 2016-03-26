import {getAllPro} from '../../api/api'
import * as types from '../mutation-types'

export const getProDetail = ({dispatch}, pro_code, product) => {
  if (!product) {
    let pro = getAllPro().find(p => p.pro_code === pro_code)
    dispatch(types.GET_ONE_PRO, pro)
  } else {
    dispatch(types.GET_ONE_PRO, product)
  }
}

export const getProducts = ({dispatch}) => {
  let products = getAllPro()
  dispatch(types.GET_ALL_PRO, products)
}

export const addToCart = ({dispatch}, product) => {
  if (product.num > 0) {
    dispatch(types.ADD_TO_CART, product)
  }
}
