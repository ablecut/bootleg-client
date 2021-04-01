import { toast } from 'react-toastify';

export const displayErrorToast = (errorMessage) => {
  toast.error(errorMessage);
}

export const displaySuccessToast = (successMessage) => {
  toast.success(successMessage);
}

export const thunkErrorHandler = (err, dispatch, errorCallback, failureAction) => {
  const errorMessage = err?.response?.data?.error;
  errorCallback(errorMessage || 'Some Error Occured');
  dispatch(failureAction());
}

export const formatDuration = (duration) => {
  const hours = new Date(duration * 1000).toISOString().substr(11, 8);

  if (hours.split(':')[0].toString() === '00') {
    return hours.substring(3, hours.length);
  }

  return hours;
}