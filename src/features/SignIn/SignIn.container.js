import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import SignIn from './SignIn.component';
import { signIn } from '../../state/actions/auth.actions';
import routes from '../../config/routes';

class SignInContainer extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  onTextChange = event => 
  this.setState({
    credentials: {
      ...this.state.credentials,
      [event.target.id]: event.target.value  
    }
  });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignIn(this.state.credentials);
  }

  render() {
    const { isEmpty } = this.props.auth;
    if (!isEmpty) {
      return <Redirect to={routes.Main} />
    }
    return (
      <SignIn 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        data={this.state.credentials}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  onSignIn: signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
