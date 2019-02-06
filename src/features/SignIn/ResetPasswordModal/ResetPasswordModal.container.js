import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ResetPasswordModal from './ResetPasswordModal.component';
import { resetPassword } from 'state/actions/auth.actions';
import { toggleResetPasswordModal } from 'state/actions/modals.actions';
import { getModals } from 'state/selectors/modals.selectors';
import validate from './ResetPasswordModal.validators';

class ResetPasswordModalContainer extends Component {

  // onToggleResetPasswordModal = () => {
  //   const { toggleResetPasswordModal, destroy, reset, initialize } = this.props;
  //   // destroy();
  //   reset('resetPassword');
  //   // initialize();
  //   toggleResetPasswordModal();
  // }

  onResetPassword = () => {
    const { toggleResetPasswordModal, resetPassword } = this.props;
    resetPassword()
    toggleResetPasswordModal();
  }
  
  render() {
    const { handleSubmit, submitting, toggleResetPasswordModal, reset, modals} = this.props;
    const { resetPasswordModalIsOpen } = modals;
      return (
        <ResetPasswordModal 
          isOpen={resetPasswordModalIsOpen} 
          handleSubmit={handleSubmit(this.onResetPassword)} 
          submitting={submitting}
          toggle={toggleResetPasswordModal}
          reset={reset}
        />
    );
  }
}

const mapStateToProps = state => ({
  modals: getModals(state)
});

const mapDispatchToProps = {
  resetPassword,
  toggleResetPasswordModal
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'resetPassword',
  validate
})(ResetPasswordModalContainer));
