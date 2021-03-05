import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './slices/loginSlice';
import logoutSlice from './slices/logoutSlice';

const Auth = combineReducers({
  login: loginSlice,
  logout: logoutSlice
});

export default Auth;
