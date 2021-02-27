import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './config/router';
import store from './store';
import ErrorBoundary from './pages/ErrorBoundary';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router />
    </Provider>
  </ErrorBoundary>
  ,document.getElementById('root')
);

serviceWorkerRegistration.register();
