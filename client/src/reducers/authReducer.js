import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authLogin = (state, payload) => {
  localStorage.setItem('userData', JSON.stringify(payload));

  const stateObj = Object.assign({}, state, {
    isAuthenticated: true,
    user: JSON.parse(localStorage.getItem('userData'))
  });

  return stateObj;
};

const checkAuth = (state) => {
  if (localStorage.getItem("userData") === null || localStorage.getItem("userData") === "undefined") {
    return state;
  }

  const stateObj = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('userData'),
    user: !!localStorage.getItem('userData') === true ? JSON.parse(localStorage.getItem('userData')) : null
  });

  return stateObj;
};

const logout = (state) => {
  localStorage.removeItem('userData');

  const stateObj = Object.assign({}, state, {
    isAuthenticated: false,
    user: null
  });

  return stateObj;
};

const authReducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case types.SET_CURRENT_USER:
      return authLogin(state, payload);
    case types.AUTH_CHECK:
      return checkAuth(state);
    case types.AUTH_LOGOUT:
      return logout(state);
    case types.RELOAD_USER:
      return authLogin(state, payload);
    default:
      return state;
  }
};

export default authReducer;
