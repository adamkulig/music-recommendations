import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isNil } from 'lodash';
import messages from '../../variables/messages';
import SignIn from './SignIn.component';
import { signIn } from '../../state/actions/auth.actions';
import routes from '../../config/routes';

class SignInContainer extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    },
    validation: {
      email: {
        isValid: null,
        message: ''
      },
      password: {
        isValid: null,
        message: ''
      }
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    if(!isNil(props.authError)) {
      const { code } = props.authError;
      const { validation } = state;
      if (code === 'auth/wrong-password') {
        return {
          validation: {
            ...validation,
            password: {
              isValid: false,
              message: messages.wrongPassword
            }
          }
        } 
      } else if (code === 'auth/user-not-found') {
        return {
            validation: {
            ...validation,
            email: {
              isValid: false,
              message: messages.wrongPassword
            }
          }
        };
      }
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
        credentials={this.state.credentials}
        validation={this.state.validation}
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
