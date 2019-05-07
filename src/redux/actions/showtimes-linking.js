import axios from 'axios';
import {
    GET_SHOWTIMES_SUCCESS, GET_SHOWTIMES_PENDING, GET_SHOWTIMES_FAILED
} from '../types';

import constants from '../../config/constants';

let { showtimeUrl } = constants;

export function getShowtimes(id) {

    return (dispatch) => {

        dispatch({ type: GET_SHOWTIMES_PENDING });
        return axios.get(`${showtimeUrl}/cinemas/getSiteShowtime/${id}`)
            .then((res) => {
                console.log('showtimes res: ', JSON.stringify(res, null, 4))
                dispatch({ type: GET_SHOWTIMES_SUCCESS, payload: res.data });
            })
            .catch((ex) => {
                console.log('error fetching showtimes: ', JSON.stringify(ex, null, 4))
                dispatch({ type: GET_SHOWTIMES_FAILED, payload: ex });
            })
    }
}