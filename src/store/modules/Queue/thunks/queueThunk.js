import { setData, addToQueue, play } from '../slices/queueSlice';
import { get, set } from 'idb-keyval';
import { displayErrorToast, displaySuccessToast } from '../../../../utils';

export const setInitialData = (username) => {
  return async (dispatch) => {
    try {
      const queueData = await get(`${username}_queueData`);
  
      if (!queueData) {
        await set(`${username}_queueData`, {
          queue: [],
          currentIndex: 0,
          currentSecond: 0
        });
        return;
      }
  
      dispatch(setData({
        queue: queueData.queue,
        currentIndex: queueData.currentIndex,
        currentSecond: queueData.currentSecond
      }))      
    }
    catch(e) {
      displayErrorToast('Some Error Occured');
    }
  }
}

export const addTrackToQueue = (username, track) => {
  return async (dispatch) => {
    try {
      const queueData = await get(`${username}_queueData`);

      const newQueueData = {...queueData, queue: [...queueData.queue, track]};

      await set(`${username}_queueData`, newQueueData);

      dispatch(addToQueue({
        track
      }));

      displaySuccessToast('Added to Queue Successfully');

    }
    catch(e) {
      displayErrorToast('Some Error Occured');
    }
  }
}

export const playTrack = (username, track) => {
  return async (dispatch) => {
    try {
      const queueData = await get(`${username}_queueData`);

      const newQueue = [...queueData.queue];

      newQueue.splice(queueData.currentIndex + 1, 0, track);

      const newQueueData = {
        currentIndex: queueData.currentIndex + 1,
        currentSecond: 0,
        queue: newQueue
      };

      await set(`${username}_queueData`, newQueueData);

      dispatch(play({
        track
      }));
    }
    catch(e) {
      displayErrorToast('Some Error Occured');
    }
  }
}