import { combineReducers } from 'redux';

/** Reducer */
import auth from './auth';
import { productionReducer } from './production/productionReducers';
// import releaseReducer from './release';
import { storageReducer } from './storage/storageReducers';
import { stockReducer } from './stock/stockReducers';
import { orderReducer } from './order/orderReducers';
import { bomReducer } from './bom/bomReducers';
import { employeeReducer } from './employee/employeeReducers';

const reducer = combineReducers({
  employee: employeeReducer,
  production: productionReducer,
  storage: storageReducer,
  stock: stockReducer,
  order: orderReducer,
  bom: bomReducer,
  auth,
});

export default reducer;
