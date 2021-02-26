import { api } from '../../../../config/api';
import { loginUrls } from '../../../../config/url';
import {
  loginPending,
  loginSuccess,
  loginFailure
} from '../slices/loginSlice';

export const loginAction = (payload, errorCallback) => {
  return async (dispatch) => {
    try{
      const requestData = {
        username: payload.username,
        password: payload.password
      }

      dispatch(loginPending());
      await api.post(loginUrls.login, requestData);
      dispatch(loginSuccess());
      
    }
    catch(err) {
      const errorMessage = err.response.data.error;
      errorCallback(errorMessage);
      dispatch(loginFailure());
    }
  }
}