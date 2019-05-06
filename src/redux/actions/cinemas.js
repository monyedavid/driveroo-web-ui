import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import { CINEMA_LOADING, GET_CINEMAS, GET_ERRORS } from '../types';

export const cinemaLoading = () => {
  return {
    type: CINEMA_LOADING,
  };
};

export const getCinemas = id => async dispatch => {
  dispatch(cinemaLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/cinema/location`)
    .then(({ data }) =>
      dispatch({
        type: GET_CINEMAS,
        payload: data.CinemaLocations,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_CINEMAS,
        payload: null,
      }),
    );
};

export const addCinema = (data, history) => async dispatch => {
  axios
    .post(`${MOVIE_DASHBOARD_API_LOCAL}/cinema/location/new`, data)
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
