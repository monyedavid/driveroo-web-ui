import axios from 'axios';
import {
    GET_NB_MOVIES_PENDING, GET_NB_MOVIES_SUCCESS, GET_NB_MOVIES_FAILED,
    POST_NB_GENERAL_FAILED, POST_NB_GENERAL_PENDING, POST_NB_GENERAL_SUCCESS
} from '../types';

import constants from '../../config/constants';

let { nairaboxMoviesUrl, nairaboxUrl } = constants;

export function getNairaboxMovies() {

    return (dispatch) => {

        //console.log('nairaboxMoviesUrl: ', nairaboxMoviesUrl);

        dispatch({ type: GET_NB_MOVIES_PENDING });
        return axios.get(nairaboxMoviesUrl)
            .then((res) => {
                //console.log('nairabox res: ', JSON.stringify(res, null, 4))

                dispatch({ type: GET_NB_MOVIES_SUCCESS, payload: res.data.movies });
            })
            .catch((ex) => {
                console.log('error fetching movies: ', JSON.stringify(ex, null, 4))
                dispatch({ type: GET_NB_MOVIES_FAILED });
            })
    }
}

export function postFilmhouseIdTicketId(filmhouseId, ticketId, cinemaHouseNameObj, cinemaHouse) {
    console.log('cinemaHouse name: ', cinemaHouse)
    //{ filmhouseid: filmhouseId, ticketId: ticketId }/tickets?as=link-genesis

    let postUrl;
    if (cinemaHouse === 'filmhouse') {
        postUrl = `${nairaboxUrl}/tickets?as=link`
    }
    if (cinemaHouse === 'genesis') {
        postUrl = `${nairaboxUrl}/tickets?as=link-genesis`
    }
    console.log('postUrl: ', postUrl);

    return (dispatch) => {

        console.log('posting ids: ' + filmhouseId + ' , ', ticketId);

        dispatch({ type: POST_NB_GENERAL_PENDING });
        return axios.post(postUrl, cinemaHouseNameObj)
            .then((res) => {
                console.log('nairabox post res: ', JSON.stringify(res, null, 4))

                dispatch({ type: POST_NB_GENERAL_SUCCESS, payload: res.data.movies });
            })
            .catch((ex) => {
                console.log('error posting ids: ', JSON.stringify(ex, null, 4))
                dispatch({ type: POST_NB_GENERAL_FAILED, payload: ex });
            })
    }
}