import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getAuth } from 'state/selectors/firebase.selectors';

import routes from 'variables/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = !rest.auth.isEmpty;
  return (
    <Route {...rest} render={props => (
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={routes.SignIn} />
      )
    )}
    />
  )
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);
