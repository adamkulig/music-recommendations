import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import FormChangePassword from './FormChangePassword.component';
import { changePassword } from '../../../state/actions/auth.actions';
// import routes from '../../variables/routes';
import validate from './FormChangePassword.validators';

class FormChangePasswordContainer extends Component {
  render() {
    const { handleSubmit, submitting, changePassword, auth } = this.props;
    const { message } = auth;
    return (
      <FormChangePassword 
        handleSubmit={handleSubmit(changePassword)} 
        submitting={submitting}
        message={message}
      />
    );
  }
}

const mapStateToProps = state => ({
  firebaseAuth: state.firebase.auth,
  auth: state.auth
});

const mapDispatchToProps = {
  changePassword
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'changePassword',
  validate
})(FormChangePasswordContainer));
