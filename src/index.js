import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';

/** redux */
import store from './store/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store()}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
