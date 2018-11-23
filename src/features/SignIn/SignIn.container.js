import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import SignIn from './SignIn.component';
import { signIn } from '../../state/actions/auth.actions';

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
    this.props.onSignIn(this.state.credentials)
  }

  render() {
    return (
      <SignIn 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        data={this.state.credentials}
      />
    );
  }
}

const mapDispatchToProps = {
  onSignIn: signIn
}

export default connect(null, mapDispatchToProps)(SignInContainer);
