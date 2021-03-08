import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../components/NotFound';
import SuspenseLoader from '../../components/SuspenseLoader';

const Search = lazy(() => import('../../pages/Search'));

const Router = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Switch>
          <PrivateRoute path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <PrivateRoute path='/search' component={Search} exact />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;