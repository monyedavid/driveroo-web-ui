import axios from 'axios';
import {
    GET_LOCATIONS_SUCCESS, GET_LOCATIONS_PENDING, GET_LOCATIONS_FAILED
} from '../types';

import constants from '../../config/constants';

let { locationsUrl } = constants;

export function getLocations() {

    return (dispatch) => {

        dispatch({ type: GET_LOCATIONS_PENDING });
        return axios.get(`${locationsUrl}/tickets?as=cinemas`)
            .then((res) => {
                //console.log('locations res: ', JSON.stringify(res, null, 4))
                dispatch({ type: GET_LOCATIONS_SUCCESS, payload: res.data.cinemas });
            })
            .catch((ex) => {
                console.log('error fetching locations: ', JSON.stringify(ex, null, 4))
                dispatch({ type: GET_LOCATIONS_FAILED, payload: ex });
            })
    }
}