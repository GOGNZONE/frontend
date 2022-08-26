import { combineReducers } from 'redux';

import auth from './auth';
import client from './client';
import { productionReducer } from './production/productionReducers';
// import releaseReducer from './release';

const reducer = combineReducers({
  production: productionReducer,
  auth,
  client,
});

export default reducer;
