import {
    GET_LOCATIONS_SUCCESS, GET_LOCATIONS_PENDING, GET_LOCATIONS_FAILED
} from '../types';

const initialState = {
    fetching: false,
    fetched: false,
    locations: [],
    error: null,
}

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATIONS_PENDING:
            return { ...state, fetching: true, fetched: false }
        case GET_LOCATIONS_SUCCESS: {
            return {
                ...state, fetching: false, fetched: true,
                locations: action.payload
            }
        }
        case GET_LOCATIONS_FAILED: {
            return { ...state, fetching: false, fetched: false, error: action.payload }
        }
        default: return { ...state }
    }
}