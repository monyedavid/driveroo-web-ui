import { GET_DRIVERS, GET_DRIVER, TOGGLE_DRIVER_LOADING } from '../types';

const initialState = {
  loading: false,
  driver: null,
  drivers: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        loading: false,
      };

    case GET_DRIVER:
      return {
        ...state,
        driver: action.payload,
      };

    case TOGGLE_DRIVER_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    // default
    default:
      return state;
  }
}
