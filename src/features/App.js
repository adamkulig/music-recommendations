import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignIn from 'features/Auth/SignIn/SignIn.container';
import SignUp from 'features/Auth/SignUp/SignUp.container';
import RecForm from 'features/Recs/RecForm/RecForm.container';
import Recs from 'features/Recs/Recs.container';
import RecDetails from 'features/Recs/RecDetails/RecDetails.container';
import ProfileSettings from 'features/Profile/ProfileSettings/ProfileSettings.container';
import NotFound from 'features/NotFound/NotFound.component';
import AppLayout from 'components/AppLayout/AppLayout.component.js';
import PublicRoute from 'hocs/PublicRoute.hoc.js';
import PrivateRoute from 'hocs/PrivateRoute.hoc.js';

import routes from 'variables/routes';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Redirect exact from={routes.Main} to={routes.Recs}/>
          <Route path={routes.Recs} component={Recs} />
          <PublicRoute path={routes.SignIn} component={SignIn} />
          <PublicRoute path={routes.SignUp} component={SignUp} />
          <PrivateRoute path={routes.RecForm} component={RecForm} />
          <Route path={routes.RecDetails} component={RecDetails} />
          <PrivateRoute path={routes.Profile} component={ProfileSettings} />
          <Route component={NotFound} />
        </Switch>
      </AppLayout>
    );
  }
}

export default App;
