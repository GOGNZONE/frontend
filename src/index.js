import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';

import store from './store/configureStore';
// import rootReducer from './modules';
// import { createStore } from 'redux';

// const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store()}>
    {/* <React.StrictMode> */}
    <Router>
      <App />
    </Router>
    {/* </React.StrictMode> */}
  </Provider>,
);
