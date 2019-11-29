import Http from './Http';

export function confirmCart(cart) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.post('http://localhost:4001/carts', cart)
        .then((res) => {
          console.log(res.data);
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
