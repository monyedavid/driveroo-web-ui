import { set_current_user } from '../../redux/actions/auth';
import store from '../../redux/store';
import { GSAuth } from '../../Graphql/auth.graphql';

export const checksessionSetUser = () => {
  // Check for token

  let result;
  const me = async () => {
    try {
      result = await new GSAuth().me();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(result, 'result data');
  me();
};
