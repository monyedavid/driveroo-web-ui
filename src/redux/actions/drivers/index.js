import { GSDriver } from '../../../Graphql/driver.graphql';
import { GET_ERRORS, GET_DRIVERS, TOGGLE_DRIVER_LOADING } from '../../types';

export const allDrivers = token => async dispatch => {
  dispatch(driverLoad());
  const service = new GSDriver(token);
  let result;
  try {
    result = await service.getDriversDetails();
    if (result)
      if (result.data) {
        if (result.data.findAllDrivers[0].__typename === 'Error') {
          dispatch({
            type: GET_ERRORS,
            payload: result.data.findAllDrivers,
          });
        }

        if (result.data.findAllDrivers[0].__typename === 'DriverResults')
          dispatch({
            type: GET_DRIVERS,
            payload: result.data.findAllDrivers,
          });
      }
  } catch (error) {
    dispatch({
      type: 'NETWORK',
      payload: 'A network error occured please try again later',
    });
  }
};

const driverLoad = () => {
  return {
    type: TOGGLE_DRIVER_LOADING,
  };
};
