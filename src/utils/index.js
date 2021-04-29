import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { setIsTrackLoading } from '../store/modules/Player/slices/playerSlice';

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

export const fetchTrackData = async (url, dispatch, playerRef, key) => {
  try {
    dispatch(setIsTrackLoading({
      isTrackLoading: true
    }));

    const response = await fetch('/play', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authentication': Cookies.get('Authentication')
      },
      body: JSON.stringify({
        url
      })
    });

    if (key !== playerRef.current.getAttribute('key')) {
      throw new Error('Aborted');
    }
  
    const reader = await response.body.getReader();
  
    const stream = await new ReadableStream({
      start: (controller) => {
        const pump = async () => {
          const { done, value } = await reader.read();
          
          if (done) {
            controller.close();
            return;
          }
          
          controller.enqueue(value);
          pump();
        }
        pump();
      }
    });
  
    const resp = await new Response(stream);
  
    const blob = await resp.blob();
  
    const uri = await URL.createObjectURL(blob);

    dispatch(setIsTrackLoading({
      isTrackLoading: false
    }));
    
    return uri;
  
  }
  catch (e) {
    if (e.message === 'Aborted') {
      return;
    }

    dispatch(setIsTrackLoading({
      isTrackLoading: false
    }));

    playerRef.current.setAttribute('data-id', null);
  }
  
}