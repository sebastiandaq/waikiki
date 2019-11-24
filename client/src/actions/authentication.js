import axios from 'axios';
import { GET_ERRORS } from './actionTypes';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:4001/users/', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:4001/users/login', user)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}