import { GIFT_LOADING, GET_GIFTS, GET_GIFT } from '../types';

const initialState = {
  gift: null,
  gifts: null,
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GIFT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GIFTS:
      return {
        ...state,
        gifts: action.payload,
        loading: false,
      };
    case GET_GIFT:
      return {
        ...state,
        gift: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
