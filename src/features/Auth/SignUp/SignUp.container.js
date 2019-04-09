import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { signUp } from 'state/actions/auth.actions';
import { getAuth } from 'state/selectors/firebase.selectors';
import { getAllUsers } from 'state/selectors/firestore.selectors';

import routes from 'variables/routes';
import SignUp from './SignUp.component';
import validate from './SignUp.validators';
import asyncValidate from './SignUp.asyncValidators';

class SignUpContainer extends Component {
  render() {
    const { handleSubmit, submitting, signUp, history, auth } = this.props;
    const { isEmpty } = auth;
    console.log('auth :', auth);
    if (!isEmpty) {
      return <Redirect push to={routes.Main} />
    }
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
