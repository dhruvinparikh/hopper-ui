import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const SecureRoute = ({ component: Component, isLoggedIn, path }) => {
  if (!isLoggedIn) {
    const location = {
      pathname: '/login',
      state: { from: {pathname: path} }
    };
    return <Redirect to={location} />;
  } else {
    return (
      <Route exact path={path} render={props => <Component {...props} />} />
    );
  }
};

SecureRoute.displayName = 'SecureRoute';

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func
};

export default SecureRoute;
