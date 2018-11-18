import React, { Component } from 'react';
import routes from '../config/routes';

import Nav from '../components/Nav/Nav.component';
import Main from '../features/Main/Main.container';
import SignIn from '../features/SignIn/SignIn.container';
import SignUp from '../features/SignUp/SignUp.container';

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
        </Switch>
        </Container>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
