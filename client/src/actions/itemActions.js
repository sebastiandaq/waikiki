import * as types from './actionTypes';
import CartApi from '../api/mockCartApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadItemsSuccess(items) {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function loadItems() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return fetch('http://localhost:4001/').then( (items) => items.json())
    .then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addToCartSuccess(item) {
  return { type: types.ADD_TO_CART_SUCCESS, item};
}

export function updateAddCartSuccess(updatedItem) {
  return { type: types.UPDATE_CART_SUCCESS, updatedItem};
}

export function updateExistingItemInCart(item) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return CartApi.updateExistingItemInCart("add",item).then(updatedItem => {
      dispatch(updateAddCartSuccess(updatedItem));
    }).catch(error => {
      dispatch(ajaxCallError(error));
    });
  };
}

export function addToCart(item) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return CartApi.addToCart(item).then(item => {
      dispatch(addToCartSuccess(item));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
