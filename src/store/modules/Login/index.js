import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from './slices/loginSlice';

const loginReducer = combineReducers({
  login: loginSlice
});

export default loginReducer;
