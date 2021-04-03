import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queue: [],
  currentIndex: 0,
  currentSecond: 0
}

const queueSlice = createSlice({
  initialState,
  name: 'queue',
  reducers: {
    addToQueue: (state, action) => {
      const { payload } = action;

      state.queue.push(payload.track);
    },
    play: (state, action) => {
      const { payload } = action;

      const newIndex = state.queue.length === 0 ? 0 : state.currentIndex + 1;
      state.queue.splice(state.currentIndex + 1, 0, payload.track);
      state.currentIndex = newIndex;
      state.currentSecond = 0;
    },
    setData: (state, action) => {
      const { payload } = action;

      state.queue = payload.queue;
      state.currentIndex = payload.currentIndex;
      state.currentSecond = payload.currentSecond;
    },
    setCurrentActive: (state, action) => {
      const { payload } = action;

      state.currentIndex = payload.currentIndex;
      state.currentSecond = 0;
    },
    removeFromQueue: (state, action) => {
      const { payload } = action;

      const currentQueueLength = state.queue.length;
      state.queue.splice(payload.removeIndex, 1);
      state.currentSecond = 0;
      const secondCondition = payload.removeIndex === currentQueueLength - 1 && payload.removeIndex === state.currentIndex;
      if (payload.removeIndex < state.currentIndex || secondCondition) {
        console.log('gere');
        state.currentIndex = state.currentIndex - 1;
      }
    }
  }
})

export const {
  addToQueue,
  play,
  setData,
  setCurrentActive,
  removeFromQueue
} = queueSlice.actions;

export default queueSlice.reducer;