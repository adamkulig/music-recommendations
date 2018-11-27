import React, { Component } from 'react';
import routes from '../config/routes';
import '../styles/App.scss';

import Nav from '../features/Nav/Nav.container';
import Footer from '../components/Footer/Footer.component';
import Main from '../features/Main/Main.container';
import SignIn from '../features/SignIn/SignIn.container';
import SignUp from '../features/SignUp/SignUp.container';
import ReviewNew from '../features/ReviewNew/ReviewNew.container';
import ReviewList from '../features/ReviewList/ReviewList.container';
import ReviewDetails from '../features/ReviewDetails/ReviewDetails.container';
import ProfileDetails from '../features/ProfileDetails/ProfileDetails.container';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav />
        <Container>
          <Switch>
            <Route exact path={routes.Main} component={Main} />
            <Route path={routes.SignIn} component={SignIn} />
            <Route path={routes.SignUp} component={SignUp} />
            <Route path={routes.ReviewNew} component={ReviewNew} />
            <Route path={routes.ReviewList} component={ReviewList} />
            <Route path={routes.ReviewDetails} component={ReviewDetails} />
            <Route path={routes.ProfileDetails} component={ProfileDetails} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
