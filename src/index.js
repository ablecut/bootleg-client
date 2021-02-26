import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './config/router';
import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  ,document.getElementById('root')
);

serviceWorkerRegistration.register();
