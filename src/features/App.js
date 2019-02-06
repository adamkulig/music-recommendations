import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Nav from 'features/Nav/Nav.container';
import Footer from 'components/Footer/Footer.component';
import SignIn from 'features/SignIn/SignIn.container';
import SignUp from 'features/SignUp/SignUp.container';
import NewRecoForm from 'features/NewRecoForm/NewRecoForm.container';
import ReviewList from 'features/ReviewList/ReviewList.container';
import ReviewDetails from 'features/ReviewDetails/ReviewDetails.container';
import ProfileSettings from 'features/ProfileSettings/ProfileSettings.container';
import NotFound from 'components/NotFound/NotFound.component'

import routes from 'variables/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Switch>
            <Route exact path={routes.Main} component={ReviewList} />
            <Route path={routes.SignIn} component={SignIn} />
            <Route path={routes.SignUp} component={SignUp} />
            <Route path={routes.NewRecoForm} component={NewRecoForm} />
            <Route path={routes.RecoDetails} component={ReviewDetails} />
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
