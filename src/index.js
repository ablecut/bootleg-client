import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './config/router';

import './index.css';

ReactDOM.render(
  <Router/>
  ,document.getElementById('root')
);

serviceWorkerRegistration.register();
