import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn.component';

import { signIn } from '../../state/actions/signIn.actions';


class SignInContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onTextChange = event => 
  this.setState({
    [event.target.id]: event.target.value  
  });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignIn(this.state)
  }

  render() {
    const { email, password } = this.state;
    return (
      <SignIn 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        email={email} 
        password={password}
      />
    );
  }
}

const mapDispatchToProps = {
  onSignIn: signIn
}

export default connect(null, mapDispatchToProps)(SignInContainer);
