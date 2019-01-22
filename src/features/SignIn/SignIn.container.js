import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import SignIn from './SignIn.component';
import ForgotPasswordModal from './components/ForgotPasswordModal.container';
import { signIn, toggleResetPasswordModal } from '../../state/actions/auth.actions';
import routes from '../../variables/routes';
import validate from './SignIn.validators';

class SignInContainer extends Component {
  render() {
    const { handleSubmit, submitting, signIn, toggleResetPasswordModal, auth, firebaseAuth, history } = this.props;
    const { isEmpty } = firebaseAuth;
    const { message } = auth;
    if (!isEmpty) {
      return <Redirect to={routes.Main} />
    }
    return (
      <Fragment>
        <SignIn 
          handleSubmit={handleSubmit(signIn)} 
          submitting={submitting}
          handleOpenModal={toggleResetPasswordModal}
          message={message}
          history={history}
        />
        <ForgotPasswordModal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  firebaseAuth: state.firebase.auth,
  auth: state.auth
});

const mapDispatchToProps = {
  signIn,
  toggleResetPasswordModal
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'signIn',
  validate
})(SignInContainer));
