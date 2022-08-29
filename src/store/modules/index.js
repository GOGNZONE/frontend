import { combineReducers } from 'redux';

/** Reducer */
import auth from './auth';
import { employeeReducer } from './employee/employeeReducers';
import { clientReducer } from './client/clientReducers';
import { productionReducer } from './production/productionReducers';
import { storageReducer } from './storage/storageReducers';
import { stockReducer } from './stock/stockReducers';
import { orderReducer } from './order/orderReducers';
import { bomReducer } from './bom/bomReducers';

const reducer = combineReducers({
  employee: employeeReducer,
  client: clientReducer,
  production: productionReducer,
  storage: storageReducer,
  stock: stockReducer,
  order: orderReducer,
  bom: bomReducer,
  auth,
});

export default reducer;
