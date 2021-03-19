import { toast } from 'react-toastify';

export const displayErrorToast = (errorMessage) => {
  toast.error(errorMessage);
}

export const thunkErrorHandler = (err, dispatch, errorCallback, failureAction) => {
  const errorMessage = err?.response?.data?.error;
  errorCallback(errorMessage || 'Some Error Occured');
  dispatch(failureAction());
}