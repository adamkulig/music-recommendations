import React, { Component } from 'react';
import routes from '../variables/routes';

import Nav from '../features/Nav/Nav.container';
import Footer from '../components/Footer/Footer.component';
import Main from '../features/Main/Main.container';
import SignIn from '../features/SignIn/SignIn.container';
import SignUp from '../features/SignUp/SignUp.container';
import NewRecoForm from '../features/NewRecoForm/NewRecoForm.container';
import ReviewList from '../features/ReviewList/ReviewList.container';
import ReviewDetails from '../features/ReviewDetails/ReviewDetails.container';
import ProfileSettings from '../features/ProfileSettings/ProfileSettings.container';
import NotFound from '../components/NotFound/NotFound.component'

import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Container>
          <Switch>
            <Route exact path={routes.Main} component={Main} />
            <Route path={routes.SignIn} component={SignIn} />
            <Route path={routes.SignUp} component={SignUp} />
            <Route path={routes.NewRecoForm} component={NewRecoForm} />
            <Route path={routes.ReviewList} component={ReviewList} />
            <Route path={routes.ReviewDetails} component={ReviewDetails} />
            <Route path={routes.ProfileSettings} component={ProfileSettings} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
