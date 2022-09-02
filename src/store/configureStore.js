import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from 'store/modules';

const middleware = [thunk];
const logger = createLogger();

middleware.push(logger);

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
      : composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
  const store = createStore(reducer, enhancer);
  return store;
};

export default configureStore;
