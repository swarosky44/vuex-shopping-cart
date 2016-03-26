import * as types from '../mutation-types'

export const checkout = ({dispatch}, cartProducts) => {
  if (cartProducts.length > 0) {
    dispatch(types.CHECK_OUT)
  }
}
