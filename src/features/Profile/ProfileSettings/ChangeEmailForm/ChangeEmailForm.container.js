import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ChangeEmailForm from './ChangeEmailForm.component';
import { changeEmail } from 'state/actions/auth.actions';
import { getAuth } from 'state/selectors/firebase.selectors.js';
import validate from './ChangeEmailForm.validators';

class ChangeEmailFormContainer extends Component {
  render() {
    const { handleSubmit, submitting, changeEmail } = this.props;
    return (
      <ChangeEmailForm 
        handleSubmit={handleSubmit(changeEmail)} 
        submitting={submitting}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

const mapDispatchToProps = {
  changeEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'changeEmail',
  validate
})(ChangeEmailFormContainer));
