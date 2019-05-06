import { CINEMA_LOADING, GET_CINEMAS } from '../types';

const initialState = {
  cinema: null,
  cinemas: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CINEMA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CINEMAS:
      return {
        ...state,
        cinemas: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
