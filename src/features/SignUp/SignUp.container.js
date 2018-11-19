import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp.component';

import { signUp } from '../../state/actions/signUp.actions';


class SignUpContainer extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  onTextChange = event => 
  this.setState({
    [event.target.id]: event.target.value  
  });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignUp(this.state)
  }

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <SignUp 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        email={email} 
        password={password} 
        confirmPassword={confirmPassword}
      />
    );
  }
}

const mapDispatchToProps = {
  onSignUp: signUp
}

export default connect(null, mapDispatchToProps)(SignUpContainer);
