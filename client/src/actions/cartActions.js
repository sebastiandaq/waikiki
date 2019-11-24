import * as types from './actionTypes';
import CartApi from '../api/mockCartApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCartSuccess(cart) {
  return { type: types.LOAD_CART_SUCCESS, cart};
}

export function loadCart() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return fetch('http://localhost:4001/fetchCart').then((cart) => cart.json())
    .then(cart => {
      dispatch(loadCartSuccess(cart));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteFromCartSuccess(item_id) {
  return { type: types.DELETE_FROM_CART_SUCCESS, item_id};
}

export function deleteFromCart(item_id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return CartApi.deleteFromCart(item_id).then(item_id => {
      dispatch(deleteFromCartSuccess(item_id));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCartSuccess(updatedItem) {
  return { type: types.UPDATE_CART_SUCCESS, updatedItem};
}

export function updateExistingItemInCart(addOrDelete, item) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return CartApi.updateExistingItemInCart(addOrDelete, item).then(item => {
      dispatch(updateCartSuccess(item));
    }).catch(error => {
      throw(error);
    });
  };
}
