import { combineReducers } from '@reduxjs/toolkit';

import auth from './Auth';
import search from './Search/slices/search';

const rootReducer = combineReducers({
  auth,
  search
});

export default rootReducer;