import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import {
  GET_ERRORS,
  SHOWTIME_LOADING,
  GET_SHOWTIME,
  GET_SHOWTIMES,
} from '../types';

export const setShowTimeLoading = _ => {
  return {
    type: SHOWTIME_LOADING,
  };
};

export const getShowTimes = () => async dispatch => {
  dispatch(setShowTimeLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/tickets/available`)
    .then(({ data }) =>
      dispatch({
        type: GET_SHOWTIMES,
        payload: data.AllTicketsAvailable,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_SHOWTIMES,
        payload: null,
      }),
    );
};

export const getShowTime = id => async dispatch => {
  dispatch(setShowTimeLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/tickets/available?_id=${id}`)
    .then(({ data }) =>
      dispatch({
        type: GET_SHOWTIME,
        payload: data.ticketavailble,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_SHOWTIME,
        payload: null,
      }),
    );
};

export const newShowTime = (data, history) => async dispatch => {
  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/tickets/available/new`, data)
    .then(result => {
      history.push('/list-movies');
    })
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
              mssg:
                'Aunty Seyi we couldnt reach the server please try again later',
            },
          }),
    );
};
