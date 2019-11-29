import * as types from './actionTypes';

export function authLogin(payload) {
  return {
    type: types.SET_CURRENT_USER,
    payload
  };
}

export function reloadUser(payload) {
  return {
    type: types.RELOAD_USER,
    payload
  };
}

export function authLogout() {
  return {
    type: types.AUTH_LOGOUT
  };
}

export function authCheck() {
  return {
    type: types.AUTH_CHECK
  };
}
