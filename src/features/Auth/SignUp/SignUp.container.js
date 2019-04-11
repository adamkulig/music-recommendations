import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { signUp } from 'state/actions/auth.actions';
import { getAuth } from 'state/selectors/firebase.selectors';
import { getAllUsers } from 'state/selectors/firestore.selectors';

import SignUp from './SignUp.component';
import validate from './SignUp.validators';
import asyncValidate from './SignUp.asyncValidators';

class SignUpContainer extends Component {
  render() {
    const { handleSubmit, submitting, signUp, history } = this.props;
    return (
      <SignUp 
        handleSubmit={handleSubmit(signUp)} 
        submitting={submitting}
        history={history}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
  users: getAllUsers(state)
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
