import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../../App';
import PrivateRoute from './PrivateRoute';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import NotFound from '../../components/NotFound';
import SuspenseLoader from '../../components/SuspenseLoader';
import Pagebar from '../../components/Pagebar';

const Search = lazy(() => import('../../pages/Search'));
const Queue = lazy(() => import('../../containers/Queue'));
const Play = lazy(() => import('../../containers/Play'));

const Router = () => {
  return(
    <BrowserRouter>
      <App>
        <Pagebar />
        <Suspense fallback={<SuspenseLoader />}>
          <Switch>
            <PrivateRoute path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <PrivateRoute path='/search' component={Search} exact />
            <PrivateRoute path='/queue' component={Queue} exact />
            <PrivateRoute path='/play' component={Play} exact />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}

export default Router;