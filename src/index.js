import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './index.css';

ReactDOM.render(
  <h1>Setup</h1>
  ,document.getElementById('root')
);

serviceWorkerRegistration.register();
