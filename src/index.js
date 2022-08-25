import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';

import store from 'store/configureStore';
// import rootReducer from './modules';
// import { createStore } from 'redux';

/** redux */
// import rootReducer from './modules';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import ReduxThunk from 'redux-thunk';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk)),
// );

// const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store()}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
