import Http from './Http';
import * as cartActions from '../actions/cartActions';

export function confirmCart(cart) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost:4001/carts', cart)
        .then((res) => {
          console.log(res.data);

          dispatch(cartActions.cleanCart());
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

export function getUserCarts(user) {
  return () => (
    new Promise((resolve, reject) => {
      Http.get('http://localhost:4001/carts/' + user._id)
        .then((res) => resolve(res))
        .catch((err) => {
          console.log(err);
          const error = err.response.data;
          return reject(error);
        });
    })
  );
}
