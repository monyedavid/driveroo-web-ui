import {
    GET_NB_MOVIES_PENDING,
    GET_NB_MOVIES_SUCCESS,
    GET_NB_MOVIES_FAILED,
    POST_NB_GENERAL_FAILED, POST_NB_GENERAL_PENDING, POST_NB_GENERAL_SUCCESS,
} from '../types';

const initialState = {
    fetching: false,
    fetched: false,
    movies: [],
    error: null,
    doneId: false
}

export default function nairaboxMoviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NB_MOVIES_PENDING:
            return { ...state, fetching: true, fetched: false }

        case GET_NB_MOVIES_SUCCESS: {
            return {
                ...state, fetching: false, fetched: true,
                movies: action.payload
            }
        }

        case GET_NB_MOVIES_FAILED: {
            return { ...state, fetching: false, fetched: false, doneId: false }
        }


        case POST_NB_GENERAL_PENDING:
            return { ...state, fetching: true, fetched: false, doneId: false }

        case POST_NB_GENERAL_SUCCESS: {
            return {
                ...state, fetching: false, fetched: true, doneId: true
            }
        }
        case POST_NB_GENERAL_FAILED: {
            return {
                ...state, fetching: false, fetched: false, doneId: false,
                error: action.payload
            }
        }

        default: return { ...state }
    }
}