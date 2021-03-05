import { api } from '../../../../config/api';
import { authUrls } from '../../../../config/url';

import {
  logoutPending,
  logoutSuccess,
  logoutFailure
} from '../slices/logoutSlice';

export const logoutAction = (errorCallback, successCallback) => {
  return async (dispatch) => {
    try {
      dispatch(logoutPending());
      await api.post(authUrls.logout);
      dispatch(logoutSuccess());
      successCallback();
    }
    catch (err) {
      const errorMessage = err.response.data.error;
      errorCallback(errorMessage);
      dispatch(logoutFailure());
    }
  }
}