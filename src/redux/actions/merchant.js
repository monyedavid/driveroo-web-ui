import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import {
  MERCHANT_LOADING,
  GET_MERCHANT,
  GET_MERCHANTS,
  GET_ERRORS,
} from '../types';

export const setMerchantLoading = () => {
  return {
    type: MERCHANT_LOADING,
  };
};

export const getMerchants = _ => async dispatch => {
  dispatch(setMerchantLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/merchants/`)
    .then(({ data }) =>
      dispatch({
        type: GET_MERCHANTS,
        payload: data.merchants,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_MERCHANTS,
        payload: null,
      }),
    );
};

export const getMerchant = id => async dispatch => {
  dispatch(setMerchantLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/merchants/${id}`)
    .then(({ data }) =>
      dispatch({
        type: GET_MERCHANT,
        payload: data.merchant,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_MERCHANT,
        payload: null,
      }),
    );
};

export const addMerchants = (data, history) => async dispatch => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/merchants/new`, data, config)
    .then(result => history.push('/list-merchants'))
    .catch(error =>
      error.response
        ? dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
          })
        : dispatch({
            type: GET_ERRORS,
            payload: {
              path: 'no response',
              mssg: 'couldnt reach the server please try again later',
            },
          }),
    );
};
