import { combineReducers } from 'redux';

/** Reducer */
import auth from './auth';
import client from './client';
import { employeeReducer } from './employee/employeeReducers';
import { productionReducer } from './production/productionReducers';
import { storageReducer } from './storage/storageReducers';
import { stockReducer } from './stock/stockReducers';
import { orderReducer } from './order/orderReducers';
import { bomReducer } from './bom/bomReducers';
import { releaseReducer } from './release/releaseReducers';

const reducer = combineReducers({
  employee: employeeReducer,
  production: productionReducer,
  storage: storageReducer,
  stock: stockReducer,
  order: orderReducer,
  bom: bomReducer,
  release: releaseReducer,
  auth,
  client,
});

export default reducer;
