import { combineReducers } from 'redux';

import auth from './auth';
import client from './client';
import { employeeReducer } from './employee/employeeReducers';
import { productionReducer } from './production/productionReducers';
// import releaseReducer from './release';

const reducer = combineReducers({
  employee: employeeReducer,
  production: productionReducer,
  auth,
  client,
});

export default reducer;
