import { LOADING_START, LOADING_END } from '../types';
let initialState = {
    loading: false,
    loadingText: '',
};
export function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_START:
            return { ...state, loading: true, loadingText: action.loadingText };
        case LOADING_END:
            return { ...state, loading: false, loadingText: '' };

        default: return { ...state };
    }
}