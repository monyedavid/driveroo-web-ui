import axios from 'axios';
import { MOVIE_DASHBOARD_API_LOCAL } from '../axios.request.link';
import {
  GET_DAILY_TRANSACTION,
  GET_MONTHLY_TRANSACTION,
  GET_RANGE,
  TRANSACTION_LOADING,
  GET_WEEKLY_TRANSACTION,
  SET_TRANSACTION,
} from '../types';

export const setTransactionLoading = _ => {
  return {
    type: TRANSACTION_LOADING,
  };
};

export const getDailyTransaction = (min, max) => dispatch => {
  dispatch(setTransactionLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/ledgers/daily?min=${min}&max=${max}`)
    .then(({ data }) => {
      dispatch({
        type: GET_DAILY_TRANSACTION,
        payload: data.dailyLedgers,
      });
    })
    .catch(error =>
      dispatch({
        type: GET_DAILY_TRANSACTION,
        payload: null,
      }),
    );
};

export const getWeeklyTransaction = weekbackno => dispatch => {
  dispatch(setTransactionLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/ledgers/weekly?weekback=${weekbackno}`)
    .then(({ data }) =>
      dispatch({
        type: GET_WEEKLY_TRANSACTION,
        payload: data.WeeklyLEdgers,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_WEEKLY_TRANSACTION,
        payload: null,
      }),
    );
};

export const getMonthlyTransaction = (min, max) => dispatch => {
  dispatch(setTransactionLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/ledgers/monthly?min=${min}&max=${max}`)
    .then(({ data }) => {
      dispatch({
        type: GET_MONTHLY_TRANSACTION,
        payload: data.MonthlyLedgers,
      });
    })
    .catch(error =>
      dispatch({
        type: GET_MONTHLY_TRANSACTION,
        payload: null,
      }),
    );
};

export const getRange = (type, min, max) => dispatch => {
  dispatch(setTransactionLoading());
  // MAKME REQUEST
  axios
    .get(`${MOVIE_DASHBOARD_API_LOCAL}/??????`)
    .then(result =>
      dispatch({
        type: GET_RANGE,
        payload: result.data,
      }),
    )
    .catch(error =>
      dispatch({
        type: GET_RANGE,
        payload: null,
      }),
    );
};

export const setTransaction = data => dispatch => {
  dispatch(setTransactionLoading());
  dispatch({
    type: SET_TRANSACTION,
    payload: data,
  });
};
