import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import SignUp from './SignUp.component';
import { signUp } from '../../state/actions/auth.actions';
import routes from '../../config/routes';
import validate from './SignUp.validators';
import asyncValidate from './SignUp.asyncValidators';

class SignUpContainer extends Component {
  render() {
    const { handleSubmit, submitting, signUp } = this.props;
    const { isEmpty } = this.props.auth;
    if (!isEmpty) {
      return <Redirect push to={routes.Main} />
    }
    return (
      <SignUp 
        handleSubmit={handleSubmit(signUp)} 
        submitting={submitting}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  users: state.firestore.data.users
});

const mapDispatchToProps = {
  signUp
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'signUp',
    validate,
    asyncValidate,
    asyncBlurFields: ['email', 'nickname']
  }),
  firestoreConnect([
    { collection: 'users' }
  ])
)(SignUpContainer);
