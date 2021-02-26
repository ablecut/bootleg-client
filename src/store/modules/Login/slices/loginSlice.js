import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.loading = true;
      state.error = false;
    },

    loginSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },

    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const {
  loginPending,
  loginSuccess,
  loginFailure
} = loginSlice.actions;

export default loginSlice.reducer;