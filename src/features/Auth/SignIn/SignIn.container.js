import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { signIn } from 'state/actions/auth.actions';
import { toggleResetPasswordModal } from 'state/actions/modals.actions';
import { getAuth } from 'state/selectors/firebase.selectors';

import SignIn from './SignIn.component';
import validate from './SignIn.validators';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal.container';

class SignInContainer extends Component {
  render() {
    const { handleSubmit, submitting, signIn, toggleResetPasswordModal } = this.props;
    return (
      <>
        <SignIn 
          handleSubmit={handleSubmit(signIn)} 
          submitting={submitting}
          handleOpenModal={toggleResetPasswordModal}
        />
        <ResetPasswordModal />
      </>
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
