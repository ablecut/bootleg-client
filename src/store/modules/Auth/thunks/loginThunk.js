import { api } from '../../../../config/api';
import { loginUrls } from '../../../../config/url';
import {
  loginPending,
  loginSuccess,
  loginFailure
} from '../slices/loginSlice';

export const loginAction = (payload, errorCallback, successCallback) => {
  return async (dispatch) => {
    try{
      const requestData = {
        username: payload.username,
        password: payload.password
      }

      dispatch(loginPending());

      const response = await api.post(loginUrls.login, requestData);

      dispatch(loginSuccess({
        username:response.data.username
      }));

      successCallback();
    }
    catch(err) {
      const errorMessage = err.response.data.error;
      errorCallback(errorMessage);
      dispatch(loginFailure());
    }
  }
}