import axios from 'axios';

// export const registerUser = (user, history) => dispatch => {
//     axios.post('http://localhost:4001/users/', user)
//             .then(() => history.push('/login'))
//             .catch(err => {
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response
//                 });
//             });
// };

export function registerUser(user, history) {
  return () => (
    new Promise((resolve, reject) => {
      axios.post('http://localhost:4001/users', user)
        .then(() => history.push('/login'))
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
      axios.post('http://localhost:4001/users/login', user)
        .then((res) => {
          console.log(res.data);

          dispatch(action.authLogin(res.data));
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
