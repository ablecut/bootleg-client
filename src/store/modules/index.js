import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './Login';

const rootReducer = combineReducers({
  loginReducer: loginReducer
});

export default rootReducer;