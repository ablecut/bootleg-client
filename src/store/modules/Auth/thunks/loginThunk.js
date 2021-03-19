import { api } from '../../../../config/api';
import { authUrls } from '../../../../config/url';
import {
  loginPending,
  loginSuccess,
  loginFailure
} from '../slices/loginSlice';
import { thunkErrorHandler } from '../../../../utils';

export const loginAction = (payload, errorCallback, successCallback) => {
  return async (dispatch) => {
    try{
      const requestData = {
        username: payload.username,
        password: payload.password
      }

      dispatch(loginPending());

      const response = await api.post(authUrls.login, requestData);

      dispatch(loginSuccess({
        username:response.data.username
      }));

      successCallback();
    }
    catch(err) {
      thunkErrorHandler(err, dispatch, errorCallback, loginFailure);
    }
  }
}