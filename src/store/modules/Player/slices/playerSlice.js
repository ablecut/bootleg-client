import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  runningTime: 0,
  isTrackLoading: false,
  isPlaying: false
}

const playerSlice = createSlice({
  name: 'player',
  initialState
});

export default playerSlice.reducer;
