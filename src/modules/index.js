import { combineReducers } from 'redux';
import auth from './auth';
import mypage from './mypage';

const rootReducer = combineReducers({
  auth,
  mypage,
});

export default rootReducer;
