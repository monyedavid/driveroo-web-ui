import {
  GET_FH_MOVIES_PENDING,
  GET_FH_MOVIES_SUCCESS,
  GET_FH_MOVIES_FAILED,
} from '../types';

const initialState = {
  fetching: false,
  fetched: false,
  movies: []
}

export default function filmHouseMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FH_MOVIES_PENDING:
      return { ...state, fetching: true, fetched: false }
    case GET_FH_MOVIES_SUCCESS: {
      return {
        ...state, fetching: false, fetched: true,
        movies: action.payload
      }
    }
    case GET_FH_MOVIES_FAILED: {
      return { ...state, fetching: false, fetched: false }
    }
    default: return { ...state }
  }
}