import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { set_current_user, logout_user } from '../../redux/actions/auth';
import store from '../../redux/store';

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
      store.dispatch(logout_user());
      // redirect To login
      window.location.href = '/login';
    }
  }
};
