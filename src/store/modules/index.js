import { combineReducers } from 'redux';

// import productionReducer from './production';
import auth from './auth';
import { employeeReducer } from './employee/employeeReducers';
import { productionReducer } from './production/productionReducers';
// import releaseReducer from './release';

const reducer = combineReducers({
  employee: employeeReducer,
  production: productionReducer,
  auth,
});

export default reducer;
