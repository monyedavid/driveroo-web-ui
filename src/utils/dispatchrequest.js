import axios from 'axios';
export const dispatch_request = async (
  request_type, // axios.(get | post)
  data, // post data
  path, // axios request path
  green_type, // if successfull dispatch this action!!!
  history, // if history push to history path
  history_path, // hoistory path
  red_type, // if  error dispatch this action!!!
  error_payload,
  useErrorResponse,
) => {
  let response;
  try {
    respone =
      request_type === 'get'
        ? await axios.get(`${process.env.MOVIE_DASHBOARD_API}${path}`)
        : request_type === 'post'
        ? await axios.post(`${process.env.MOVIE_DASHBOARD_API}${path}`, data)
        : request_type === 'delete'
        ? await axios.delete(`${process.env.MOVIE_DASHBOARD_API}${path}`)
        : request_type === 'put'
        ? await axios.put(`${process.env.MOVIE_DASHBOARD_API}${path}`)
        : null;

    history
      ? history.push(`/${history_path}`)
      : dispatch({
          type: green_type,
          payload: response.data,
        });
  } catch (error) {
    dispatch({
      type: red_type,
      payload: error_payload
        ? error_payload
        : useErrorResponse
        ? error.response.data
        : null,
    });
  }
};
