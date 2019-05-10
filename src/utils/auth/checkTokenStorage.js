import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { set_current_user, _logout_user_ } from '../actions/authAction';
import store from '../../redux/store';
import { _clear_current_profile_ } from '../actions/profileActions';

export const check_token_storage = () => {
  // Check for token
  if (localStorage.nairaboxamd) {
    // set Auth Token header Auth
    setAuthToken(localStorage.nairaboxamd);
    // Decode token and get user information
    const decoded = jwt_decode(localStorage.nairaboxamd);
    store.dispatch(set_current_user(decoded));
  }
};

export const expired_token_logout = () => {
  const current_time = Date.now() / 1000;
  // Check for token
  if (localStorage.nairaboxamd) {
    const decoded = jwt_decode(localStorage.nairaboxamd);
    if (decoded.exp < current_time) {
      // Logout User
      store.dispatch(_logout_user_());
      // Clear current Profile
      store.dispatch(_clear_current_profile_());
      // redirect To login
      window.location.href = '/login';
    }
  }
};
