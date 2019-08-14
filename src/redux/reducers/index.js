import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import driver from './driver';
export default combineReducers({
  auth,
  errors,
  driver,
});
