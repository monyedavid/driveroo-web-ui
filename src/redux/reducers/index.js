import { combineReducers } from 'redux';
import movieTickets from './movie';
import voucher from './vouchers';
import gift from './gifting';
import merchant from './merchant';
import redeemption from './redeemptions';
import transactions from './transactions';
import cinemas from './cinema';
import errors from './errors';
import showtimes from './showtime';

import filmHouseMoviesReducer from './filmHouseMoviesReducer';
import nairaboxMoviesReducer from './nairaboxMoviesReducer';
import locationsReducer from './locationsReducer';
import showtimesReducer from './showtimesReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

export default combineReducers({
  errors,
  gift,
  merchant,
  movieTickets,
  redeemption,
  transactions,
  voucher,
  cinemas,
  showtimes,

  filmHouseMoviesReducer,
  nairaboxMoviesReducer,
  locationsReducer,
  showtimesReducer,
  loadingReducer,
  errorReducer,

});
