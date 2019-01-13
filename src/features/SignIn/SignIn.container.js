import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import SignIn from './SignIn.component';
import { signIn } from '../../state/actions/auth.actions';
import routes from '../../variables/routes';
import validate from './SignIn.validators';
// import asyncValidate from './SignIn.asyncValidators';

class SignInContainer extends Component {
 
  render() {
    const { handleSubmit, submitting, signIn } = this.props;
    const { isEmpty } = this.props.auth;
    if (!isEmpty) {
      return <Redirect to={routes.Main} />
    }
    return (
      <SignIn 
        handleSubmit={handleSubmit(signIn)} 
        submitting={submitting}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signIn',
  validate
})(SignInContainer));
