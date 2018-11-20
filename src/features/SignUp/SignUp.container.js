import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp.component';

import { signUp } from '../../state/actions/signUp.actions';

class SignUpContainer extends Component {
  state = {
    credentials: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onTextChange = event => 
  this.setState({
    ...this.state.credentials,
    [event.target.id]: event.target.value  
  });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignUp(this.state.credentials)
  }

  render() {
    return (
      <SignUp 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        data={this.state.credentials} 
      />
    );
  }
}

const mapDispatchToProps = {
  onSignUp: signUp
}

export default connect(null, mapDispatchToProps)(SignUpContainer);
