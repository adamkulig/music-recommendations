import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import { signIn } from 'state/actions/auth.actions';
import { toggleResetPasswordModal } from 'state/actions/modals.actions';
import { getAuth } from 'state/selectors/firebase.selectors';

import SignIn from './SignIn.component';
import validate from './SignIn.validators';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal.container';
import routes from 'variables/routes';

class SignInContainer extends Component {
  render() {
    const { handleSubmit, submitting, signIn, toggleResetPasswordModal, auth } = this.props;
    const { isEmpty, emailVerified } = auth;
    if (!isEmpty && emailVerified) {
      return <Redirect to={routes.Main} />
    }
    return (
      <Fragment>
        <SignIn 
          handleSubmit={handleSubmit(signIn)} 
          submitting={submitting}
          handleOpenModal={toggleResetPasswordModal}
        />
        <ResetPasswordModal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

const mapDispatchToProps = {
  signIn,
  toggleResetPasswordModal
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signIn',
  validate
})(SignInContainer));
