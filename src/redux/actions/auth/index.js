import { SET_CURRENT_USER } from '../../types';
import { GSAuth } from '../../../Graphql/auth.graphql';
// Register User
const service = new GSAuth();
export const loginUser = ({ emailmobile, password }) => async dispatch => {
  let result;
  try {
    result = await service.login({ emailmobile, password });
  } catch (error) {
    console.log(error, '| error');
  }
  console.log(result, 'result');
};

// Login - Get User Token
export const regUser = userData => async dispatch => {
  let result;
  try {
    result = await service.admin_link({ ...userData });
  } catch (error) {
    console.log('err |', error);
  }
};

// Set Logged in User
export const set_current_user = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
  };
};

// Log user out

export const logout_user = () => dispatch => {};
