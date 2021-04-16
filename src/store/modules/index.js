import { combineReducers } from '@reduxjs/toolkit';

import auth from './Auth';
import search from './Search/slices/search';
import queue from './Queue/slices/queueSlice';
import player from './Player/slices/playerSlice';

const rootReducer = combineReducers({
  auth,
  search,
  queue,
  player
});

export default rootReducer;