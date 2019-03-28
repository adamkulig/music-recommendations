import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import Nav from 'features/Nav/Nav.container';
import Footer from 'components/Footer/Footer.component';
import SignIn from 'features/Auth/SignIn/SignIn.container';
import SignUp from 'features/Auth/SignUp/SignUp.container';
import RecForm from 'features/Recs/RecForm/RecForm.container';
import RecsList from 'features/Recs/RecsList/RecsList.container';
import RecDetails from 'features/Recs/RecDetails/RecDetails.container';
import ProfileSettings from 'features/Profile/ProfileSettings/ProfileSettings.container';
import NotFound from 'components/NotFound/NotFound.component'

import routes from 'variables/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Switch>
            <Redirect exact from={routes.Main} to={routes.Recs}/>
            <Route path={routes.Recs} component={RecsList} />
            <Route path={routes.SignIn} component={SignIn} />
            <Route path={routes.SignUp} component={SignUp} />
            <Route path={routes.RecForm} component={RecForm} />
            <Route path={routes.RecDetails} component={RecDetails} />
            <Route path={routes.Profile} component={ProfileSettings} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
