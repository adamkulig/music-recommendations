import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp.component';
import { signUp } from '../../state/actions/auth.actions';

class SignUpContainer extends Component {
  state = {
    registrationData: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: ''
    }
  }

  onTextChange = event => 
  this.setState({
    registrationData: {
    ...this.state.registrationData,
    [event.target.id]: event.target.value
    }  
  });

  onSubmit = event => {
    event.preventDefault();
    this.props.onSignUp(this.state.registrationData)
  }

  render() {
    return (
      <SignUp 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        data={this.state.registrationData} 
      />
    );
  }
}

const mapDispatchToProps = {
  onSignUp: signUp
}

export default connect(null, mapDispatchToProps)(SignUpContainer);
