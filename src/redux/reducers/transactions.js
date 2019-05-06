import {
  TRANSACTION_LOADING,
  GET_DAILY_TRANSACTION,
  GET_WEEKLY_TRANSACTION,
  GET_MONTHLY_TRANSACTION,
  GET_RANGE,
} from '../types';

const initialState = {
  range: null,
  daily: null,
  weekly: null,
  monthly: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DAILY_TRANSACTION:
      return {
        ...state,
        loading: false,
        daily: action.payload,
      };
    case GET_WEEKLY_TRANSACTION:
      return {
        ...state,
        loading: false,
        weekly: action.payload,
      };
    case GET_MONTHLY_TRANSACTION:
      return {
        ...state,
        loading: false,
        monthly: action.payload,
      };
    case GET_RANGE:
      return {
        ...state,
        loading: false,
        range: action.payload,
      };
    default:
      return state;
  }
}
