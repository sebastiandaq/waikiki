import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.LOAD_CART_SUCCESS:
      return action.cart;
    case types.ADD_TO_CART_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.item)
      ];
    case types.UPDATE_CART_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.updatedItem.id),
        Object.assign({}, action.updatedItem)
      ];
    case types.DELETE_FROM_CART_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.item_id)
      ];
    default:
      return state;
  }
}
