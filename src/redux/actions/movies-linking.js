import axios from 'axios';
import {
    GET_FH_MOVIES_PENDING, GET_FH_MOVIES_SUCCESS, GET_FH_MOVIES_FAILED,
    ERROR_SET
} from '../types';

import constants from '../../config/constants';

let { filmHouseMoviesUrl, genesisMoviesUrl } = constants;

export function getFilmhouseMovies(cinemaHouse) {
    console.log('getFi...., cinemahouse: ', cinemaHouse)

    return (dispatch) => {

        let getUrl //= (cinemaHouse === 'filmhouse') ? filmHouseMoviesUrl : null;
        if (cinemaHouse === 'filmhouse') {
            getUrl = filmHouseMoviesUrl;
        }

        else if (cinemaHouse === 'genesis') {
            getUrl = genesisMoviesUrl;
        }

        else {
            console.log('no recognized cinema house chosen: cinemaHouse: ', cinemaHouse)
            dispatch({ type: ERROR_SET, payload: { message: 'no recognized cinema house chosen: cinemaHouse: ', cinemaHouse } })
            return;
        }
        //console.log('cinemaHouse: ', cinemaHouse);
        console.log('getUrl: ', getUrl);

        dispatch({ type: GET_FH_MOVIES_PENDING });
        return axios.get(getUrl)
            .then((res) => {
                //console.log('filmhouse res: ', JSON.stringify(res, null, 4))
                let payload;

                if (cinemaHouse === 'filmhouse') {
                    console.log('it is filmhouse ');

                    payload = res.data;
                }

                if (cinemaHouse === 'genesis') {
                    console.log('it is genesis ');
                    payload = res.data.results;
                }



                dispatch({ type: GET_FH_MOVIES_SUCCESS, payload: payload });
            })
            .catch((ex) => {
                console.log('error fetching movies: ', JSON.stringify(ex, null, 4))
                dispatch({ type: ERROR_SET, payload: ex })
                dispatch({ type: GET_FH_MOVIES_FAILED });
            })
    }
}