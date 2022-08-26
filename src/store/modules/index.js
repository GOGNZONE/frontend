import { combineReducers } from 'redux';

/** Reducer */
import auth from './auth';
import { productionReducer } from './production/productionReducers';
import { employeeReducer } from './employee/employeeReducers';

const reducer = combineReducers({
  employee: employeeReducer,
  production: productionReducer,
  auth,
});

export default reducer;
