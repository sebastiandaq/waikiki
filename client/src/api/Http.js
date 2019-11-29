import axios from 'axios';
import store from '../index';
import * as userActions from '../actions/userActions';

const token = localStorage.getItem('accessToken');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(userActions.authLogout());
    }
    return Promise.reject(error);
  }
);

export default axios;
