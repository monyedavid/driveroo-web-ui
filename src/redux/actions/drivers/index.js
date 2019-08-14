import { GSDriver } from '../../../Graphql/driver.graphql';

export const allDrivers = token => async dispatch => {
  const service = new GSDriver(token);
  let result;
  try {
    result = await service.getDriversDetails();
  } catch (error) {
    console.log(error, '| error');
  }

  console.log(result);
};
