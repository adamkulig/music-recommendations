import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ChangePasswordForm from './ChangePasswordForm.component';
import { changePassword } from 'state/actions/auth.actions';
import { getAuth } from 'state/selectors/firebase.selectors.js';
import validate from './ChangePasswordForm.validators';

class ChangePasswordFormContainer extends Component {
  render() {
    const { handleSubmit, submitting, changePassword } = this.props;
    return (
      <ChangePasswordForm 
        handleSubmit={handleSubmit(changePassword)} 
        submitting={submitting}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

const mapDispatchToProps = {
  changePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'changePassword',
  validate
})(ChangePasswordFormContainer));
