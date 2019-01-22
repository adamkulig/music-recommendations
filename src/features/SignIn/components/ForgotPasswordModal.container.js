import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ForgotPasswordModal from './ForgotPasswordModal.component';
import { resetPassword, toggleResetPasswordModal } from '../../../state/actions/auth.actions';
import validate from './ForgotPasswordModal.validators';

class ForgotPasswordModalContainer extends Component {
  render() {
    const { handleSubmit, submitting, resetPassword, auth, toggleResetPasswordModal} = this.props;
    const { modalIsOpen } = auth;
      return (
        <ForgotPasswordModal 
          isOpen={modalIsOpen} 
          handleSubmit={handleSubmit(resetPassword)} 
          submitting={submitting}
          toggle={toggleResetPasswordModal}
        />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  resetPassword,
  toggleResetPasswordModal
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'resetPassword',
  validate
})(ForgotPasswordModalContainer));
