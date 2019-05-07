import { ERROR_SET, ERROR_CLEAR } from '../types';
let initialState = {
    error: null
};
export function errorReducer(state = initialState, action) {
    switch (action.type) {
        case ERROR_SET:
            return { ...state, error: action.payload };
        case ERROR_CLEAR:
            return { ...state, error: null };

        default: return { ...state };
    }
}