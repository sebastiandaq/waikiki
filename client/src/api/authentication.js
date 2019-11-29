import Http from './Http';
import * as userActions from '../actions/userActions';

export function registerUser(user) {
  return () => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost:4001/users', user)
        .then((res) => resolve(res))
        .catch((err) => {
          console.log(err);
          const error = err.response.data;
          return reject(error);
        });
    })
  );
}

export function loginUser(user) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost:4001/users/login', user)
        .then((res) => {
          console.log(res.data);

          dispatch(userActions.authLogin(res.data));
          return resolve();
        })
        .catch((err) => {
          console.log(err);
          const error = err.response.data;
          return reject(error);
        });
    })
  );
}

export function logoutUser() {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost:4001/users/account/logout')
        .then(() => {
          dispatch(userActions.authLogout());
          return resolve();
        })
        .catch((err) => {
          console.log(err);
          const error = err.response.data;
          return reject(error);
        });
    })
  );
}
