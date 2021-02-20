import React,{ lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import SuspenseLoader from '../../components/SuspenseLoader';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<SuspenseLoader />}>
          <PrivateRoute path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;