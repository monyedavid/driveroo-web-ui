import {
  MOVIES_TICKET_LOADING,
  GET_MOVIES_TICKET,
  GET_MOVIE_TICKET,
} from '../types';

const initialState = {
  movieTickets: null,
  movieTicket: null,
  loading: false,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_TICKET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_TICKET:
      return {
        ...state,
        movieTickets: action.payload,
        loading: false,
      };
    // {ok: true , movieTicket : {}}
    case GET_MOVIE_TICKET:
      return {
        ...state,
        movieTicket: action.payload.ticket,
        loading: false,
      };
    default:
      return state;
  }
}
