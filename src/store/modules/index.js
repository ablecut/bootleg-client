import { combineReducers } from '@reduxjs/toolkit';

import auth from './Auth';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;