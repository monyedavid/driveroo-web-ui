import axios from 'axios';
import setAuthToken from '../../utils/auth/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from '../types';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';

// Register User
export const registerUser = (userData, history) => dispatch => {
  // dispatch func within registeruser func ES7 has to be the sexiest thing on this planet
  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/users/register`, userData)
    .then(result => history.push('/login'))
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      }),
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/users/login`, userData)
    .then(result => {
      // save to local storage
      const { token } = result.data;
      // set Token to storage
      localStorage.setItem(`nairaboxamd`, token);
      // Set token to auth header
      setAuthToken(token);
      // Decode token
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(set_current_user(decoded));
    })
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      }),
    );
};

// Set Logged in User
export const set_current_user = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out

export const logout_user = () => dispatch => {
  // remove token from local storage
  localStorage.removeItem('nairaboxamd');
  // Remove auth header for future request
  setAuthToken(false);
  // set current user to {}
  dispatch(set_current_user({}));
};
