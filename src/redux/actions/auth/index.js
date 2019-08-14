import { SET_CURRENT_USER, GET_ERRORS } from '../../types';
import { GSAuth } from '../../../Graphql/auth.graphql';
// Register User
const service = new GSAuth();
export const loginUser = (
  { emailmobile, password },
  location,
) => async dispatch => {
  let result;
  try {
    result = await service.login({ emailmobile, password });
  } catch (error) {
    dispatch({
      type: 'NETWORK',
      payload: 'A network error occured please try again later',
    });
  }
  if (result.data) {
    if (result.data.login[0].path) {
      dispatch({
        type: GET_ERRORS,
        payload: result.data.login,
      });
    }

    console.log(result.data.login);
    if (!result.data.login[0].path) {
      console.log(result.data.login[0]);
      // get current user || redirect to dashboard
    }
  }
};

export const me = () => async dispatch => {
  let result;
  try {
    result = await service.me();
  } catch (error) {
    dispatch({
      type: 'NETWORK',
      payload: 'A network error occured please try again later',
    });
  }

  if (result.data) {
    if (result.data.login[0].path) {
      dispatch({
        type: GET_ERRORS,
        payload: result.data.login[0],
      });
    }

    if (!result.data.login[0].path) {
      // get current user || redirect to dashboard
      dispatch(set_current_user(result.data.login[0]));
    }
  }
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
