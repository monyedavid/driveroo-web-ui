import { GET_DRIVERS, GET_DRIVER } from '../types';

const initialState = {
  loading: true,
  driver: null,
  drivers: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };

    case GET_DRIVER:
      return {
        ...state,
        driver: action.payload,
      };

    // default
    default:
      return state;
  }
}
