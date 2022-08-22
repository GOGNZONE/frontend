import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from 'redux-thunk';
// import authenticationReducer from '../reducers/authenticationReducer';
import storageReducer from '../reducers/storageReducer';

const store = configureStore({
  reducer: {
    // auth: authenticationReducer,
    storage: storageReducer,
  },
});

export default store;
