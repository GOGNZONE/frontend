import { combineReducers } from 'redux';

// import productionReducer from './production';
import auth from './auth';
import { productionReducer } from './production/productionReducers';
// import releaseReducer from './release';

const reducer = combineReducers({
  production: productionReducer,
  auth,
});

export default reducer;
