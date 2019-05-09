import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import {
  GIFT_LOADING,
  GET_GIFT,
  GET_GIFTS,
  GET_ERRORS,
  SET_GIFT,
} from '../types';

export const giftLoading = () => {
  return {
    type: GIFT_LOADING,
  };
};

export const getGifts = _ => async dispatch => {
  dispatch(giftLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/gifts/`)
    .then(({ data }) =>
      dispatch({
        type: GET_GIFTS,
        payload: data.gifts,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_GIFTS,
        payload: null,
      }),
    );
};

export const getGift = id => async dispatch => {
  dispatch(giftLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/gifts?_id=${id}`)
    .then(({ data }) => {
      console.log(data, 'DATA');
      dispatch({
        type: GET_GIFT,
        payload: data.gift,
      });
    })
    .catch(error =>
      dispatch({
        type: GET_GIFT,
        payload: null,
      }),
    );
};

export const addGift = (data, history) => async dispatch => {
  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/gifts`, data)
    .then(result => history.push('/gifted-tickets'))
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

export const setGift = data => dispatch => {
  dispatch(giftLoading());
  dispatch({
    type: SET_GIFT,
    payload: data,
  });
};
