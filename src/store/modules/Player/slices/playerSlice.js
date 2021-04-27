import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  runningTime: 0,
  isTrackLoading: false,
  isPlaying: false
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsTrackLoading: (state, action) => {
      state.isTrackLoading = action.payload.isTrackLoading;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload.isPlaying;
    }
  }
});

export const {
  setIsTrackLoading,
  setIsPlaying
} = playerSlice.actions;

export default playerSlice.reducer;
