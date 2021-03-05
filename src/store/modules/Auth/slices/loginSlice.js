import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  username: Cookies.get('username'),
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

    loginSuccess: (state, { payload }) => {
      const { username } = payload;
      state.username = username;
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