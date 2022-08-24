import { combineReducers } from 'redux';
import auth from './auth';
import storageReducer from './storageReducer';
import stockReducer from './stockReducer';
import orderReducer from './orderReducer';
import bomReducer from './bomReducer';

const rootReducer = combineReducers({
  storage: storageReducer,
  stock: stockReducer,
  order: orderReducer,
  bom: bomReducer,
  auth,
});

export default rootReducer;
