import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = (props) => {
  const { component: Component, path } = props;

  const renderComponent = () => {
    if (!Cookies.get('Authentication')) return <Redirect to='/login' />
    return <Component />;
  }

  return(
    <Route 
      path={path}
      render={renderComponent}
      exact
    />
  );
}

export default PrivateRoute;