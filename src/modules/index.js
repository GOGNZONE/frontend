import { combineReducers } from 'redux';
import auth from './auth';
import client from './client';

const rootReducer = combineReducers({
  auth,
  client,
});

export default rootReducer;
