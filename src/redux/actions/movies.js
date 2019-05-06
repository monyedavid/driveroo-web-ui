import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import {
  GET_MOVIES,
  GET_MOVIES_TICKET,
  GET_MOVIE_TICKET,
  MOVIES_TICKET_LOADING,
  GET_ERRORS,
} from '../types';

export const setMovieTicketLoading = _ => {
  return {
    type: MOVIES_TICKET_LOADING,
  };
};

export const getMoviesTickets = () => async dispatch => {
  dispatch(setMovieTicketLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/tickets`)
    .then(result =>
      dispatch({
        type: GET_MOVIES_TICKET,
        payload: result.data,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_MOVIES_TICKET,
        payload: null,
      }),
    );
};

export const getMovieTicket = id => async dispatch => {
  dispatch(setMovieTicketLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/tickets?_id=${id}`)
    .then(({ data }) =>
      dispatch({
        type: GET_MOVIE_TICKET,
        payload: data,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_MOVIE_TICKET,
        payload: null,
      }),
    );
};

export const addMovieTicket = (data, history) => async dispatch => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };

  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/tickets/new`, data, config)
    .then(result => {
      console.log(result.data);
      history.push('/dashboard');
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
