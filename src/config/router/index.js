import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../pages/NotFound';

const Router = () => {
  return(
    <BrowserRouter>
        <Switch>
          <PrivateRoute path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default Router;