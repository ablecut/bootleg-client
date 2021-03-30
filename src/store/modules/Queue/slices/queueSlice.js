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

      state.queue.splice(state.currentIndex + 1, 0, payload.track);
      state.currentIndex = state.currentIndex + 1;
      state.currentSecond = 0;
    }
  }
})

export default queueSlice.reducer;