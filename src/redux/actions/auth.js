import { SET_CURRENT_USER } from '../types';
import { GSAuth } from '../../Graphql/auth.graphql';
// Register User
export const registerUser = (userData, history) => dispatch => {
  const service = new GSAuth();
  try {
  } catch (error) {}
};

// Login - Get User Token
export const loginUser = userData => dispatch => {};

// Set Logged in User
export const set_current_user = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
  };
};

// Log user out

export const logout_user = () => dispatch => {};
