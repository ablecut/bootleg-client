import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './slices/loginSlice';

const Auth = combineReducers({
  login: loginSlice
});

export default Auth;
