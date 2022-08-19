import { combineReducers } from 'redux';
import productionReducer from './production';
// import releaseReducer from './release';

const reducer = combineReducers({
  production: productionReducer,
});

export default reducer;
