import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from 'store/modules';

const middleware = [thunk];

const configureStore = () => {
  const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(thunkMiddleware))
      : composeWithDevTools(applyMiddleware(thunkMiddleware));
  const store = createStore(reducer, enhancer);
  return store;
};

export default configureStore;
