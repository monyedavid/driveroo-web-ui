import { set_current_user } from '../../redux/actions/auth';
import store from '../../redux/store';
import { GSAuth } from '../../Graphql/auth.graphql';
import { GET_ERRORS } from '../../redux/types';

export const checksessionSetUser = () => {
  // Check for token

  let result;
  const me = async () => {
    try {
      result = await new GSAuth().me();
    } catch (err) {
      store.dispatch({
        type: GET_ERRORS,
        payload: [
          { path: 'Network', message: 'Please check your internet connection' },
        ],
      });
    }

    console.log(result, 'from | check session auth');
    if (result)
      if (result.data) {
        if (result.data.me)
          if (result.data.me.__typename === 'Error') {
            store.dispatch({
              type: GET_ERRORS,
              payload: [result.data.me],
            });
          }

        if (result.data.me.__typename === 'me_data') {
          // get current user || redirect to dashboard
          store.dispatch(set_current_user(result.data.me));
          // if (history) history.push('/dashboard');
          // window.location.href = '/dashboard';
        }
      }
  };
  me();
};
