import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { some, isNil } from 'lodash';
import SignUp from './SignUp.component';
import { signUp } from '../../state/actions/auth.actions';
import routes from '../../config/routes';
import { isEmailValid, isPasswordValid, isNicknameValid } from '../../helpers/regexHelpers';
import message from '../../variables/messages';

class SignUpContainer extends Component {
  state = {
    registrationData: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: ''
    },
    validation: {
      email: {
        isValid: null,
        message: ''
      },
      password: {
        isValid: null,
        message: ''
      },
      confirmPassword: {
        isValid: null,
        message: ''
      },
      nickname: {
        isValid: null,
        message: ''
      },
    }
  }

  static getDerivedStateFromProps = (props, state) => {
    if(!isNil(props.authError)) {
      const { code, message } = props.authError;
      const { validation } = state;
      console.log('getDerivedStateFromProps')
      if (code === 'auth/email-already-in-use') {
        return {
           validation: {
            ...validation,
            email: {
              isValid: false,
              message: message
            }
          }
        };
      }
    }
  }

  isValid = (form, value) => {
    if (form === 'email') {
      return isEmailValid(value);
    } else if (form === 'password') {
      return isPasswordValid(value);
    } else if (form === 'confirmPassword') {
      return value === this.state.registrationData.password;
    } else if (form === 'nickname') {
      return isNicknameValid(value);
    }
  }

  invalidMessage = form => {
    if (form === 'email') {
      return message.invalidEmail;
    } else if (form === 'password') {
      return message.invalidPassword;
    } else if (form === 'confirmPassword') {
      return message.invalidConfirmPassword;
    } else if (form === 'nickname') {
      return message.invalidNickname;
    }
  }
  
  disableSubmit = () => {
    const { validation } = this.state;
    const isInvalid = some(validation, ['isValid', false || null]);
    return isInvalid;
  }

  onTextChange = e => 
  this.setState({
    registrationData: {
      ...this.state.registrationData,
      [e.target.id]: e.target.value
    },
    validation: {
      ...this.state.validation,
      [e.target.id]: {
        isValid: this.isValid(e.target.id, e.target.value),
        message: this.isValid(e.target.id, e.target.value) ? null : this.invalidMessage(e.target.id)
      }
    }
  });

  onSubmit = e => {
    e.preventDefault();
    if (!this.disableSubmit()) {
      this.props.onSignUp(this.state.registrationData);
    }
  }

  render() {
    console.log(this.state.validation)
    const { isEmpty } = this.props.auth;
    if (!isEmpty) {
      return <Redirect push to={routes.Main} />
    }
    return (
      <SignUp 
        onSubmit={this.onSubmit} 
        onTextChange={this.onTextChange} 
        registrationData={this.state.registrationData}
        validation={this.state.validation}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authErrorMessage
});

const mapDispatchToProps = {
  onSignUp: signUp
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
