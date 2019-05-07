import {
    GET_SHOWTIMES_SUCCESS, GET_SHOWTIMES_PENDING, GET_SHOWTIMES_FAILED
} from '../types';

const initialState = {
    fetching: false,
    fetched: false,
    showtimes: [],
    error: null,
}

export default function showtimesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SHOWTIMES_PENDING:
            return { ...state, fetching: true, fetched: false }
        case GET_SHOWTIMES_SUCCESS: {
            return {
                ...state, fetching: false, fetched: true,
                showtimes: action.payload
            }
        }
        case GET_SHOWTIMES_FAILED: {
            return { ...state, fetching: false, fetched: false, error: action.payload }
        }
        default: return { ...state }
    }
}