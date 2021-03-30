import { combineReducers } from '@reduxjs/toolkit';

import auth from './Auth';
import search from './Search/slices/search';
import queue from './Queue/slices/queueSlice';

const rootReducer = combineReducers({
  auth,
  search,
  queue
});

export default rootReducer;