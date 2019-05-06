import { SHOWTIME_LOADING, GET_SHOWTIME, GET_SHOWTIMES } from '../types';

const initialState = {
  showtimes: null,
  showtime: null,
  loading: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOWTIME_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SHOWTIME:
      return {
        ...state,
        showtime: action.payload,
        loading: false,
      };
    // {ok: true , movieTicket : {}}
    case GET_SHOWTIMES:
      return {
        ...state,
        showtimes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
