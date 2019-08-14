import { GSDriver } from '../../../Graphql/driver.graphql';
import { GET_ERRORS } from '../../types';

export const allDrivers = token => async dispatch => {
  const service = new GSDriver(token);
  let result;
  try {
    result = await service.getDriversDetails();
  } catch (error) {
    dispatch({
      type: 'NETWORK',
      payload: 'A network error occured please try again later',
    });

    // if (result)
    //   if (result.data) {
    //     if (result.data.login[0].path) {
    //       dispatch({
    //         type: GET_ERRORS,
    //         payload: result.data.login,
    //       });
    //     }

    //     if (result.data.login)
    //       if (!result.data.login[0].path) {
    //       }
    //   }
  }

  console.log(result);
};
