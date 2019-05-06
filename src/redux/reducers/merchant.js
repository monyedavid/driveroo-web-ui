import { MERCHANT_LOADING, GET_MERCHANT, GET_MERCHANTS } from '../types';

const initialState = {
  merchants: null,
  merchant: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MERCHANT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MERCHANTS:
      return {
        ...state,
        merchants: action.payload,
        loading: false,
      };
    case GET_MERCHANT:
      return {
        ...state,
        merchant: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
