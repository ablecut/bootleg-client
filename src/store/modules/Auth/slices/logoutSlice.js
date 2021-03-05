import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false
}

const logoutSlice = createSlice({
  initialState,
  name: 'logout',
  reducers: {
    logoutPending: (state) => {
      state.loading = true;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.error = false;
      state.loading = false;
    },
    logoutFailure: (state) => {
      state.error = true;
      state.loading = false;
    }
  }
});

export const {
  logoutPending,
  logoutSuccess,
  logoutFailure
} = logoutSlice.actions;

export default logoutSlice.reducer;
