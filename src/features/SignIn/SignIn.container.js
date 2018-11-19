import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn.component';

class SignInContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  onTextChange = event => 
  this.setState({
    [event.target.id]: event.target.value  
  });

  onSubmit = () => {
    console.log('click')
  }

  render() {
    console.log(this.state)
    const { email, password } = this.state;
    return (
      <SignIn onSubmit={this.onSubmit} onTextChange={this.onTextChange} email={email} password={password}/>
    );
  }
}

export default SignInContainer;
