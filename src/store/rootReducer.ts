import { combineReducers } from 'redux';

import counterReducer from './modules/counter/slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
