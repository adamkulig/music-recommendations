import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ResetPasswordModal from './ResetPasswordModal.component';
import { resetPassword } from 'state/actions/auth.actions';
import { toggleResetPasswordModal } from 'state/actions/modals.actions';
import { getModals } from 'state/selectors/modals.selectors';
import validate from './ResetPasswordModal.validators';

class ResetPasswordModalContainer extends Component {

  onToggle = () => {
    const { toggleResetPasswordModal, reset } = this.props;
    toggleResetPasswordModal();
    reset(); //do not initialize syncErrors on the beginning...
    // this.props.initialize({ email: '' });
  }
  
  render() {
    const { handleSubmit, submitting, reset, modals, resetPassword} = this.props;
    const { resetPasswordModalIsOpen } = modals;
      return (
        <ResetPasswordModal 
          isOpen={resetPasswordModalIsOpen} 
          handleSubmit={handleSubmit(resetPassword)} 
          submitting={submitting}
          toggle={this.onToggle}
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
