import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileSettings from './ProfileSettings.component';
import { Redirect } from 'react-router-dom';
import routes from '../../variables/routes';

class ProfileSettingsContainer extends Component {
  render() {
    const { firebaseAuth } = this.props;
    const { isEmpty } = firebaseAuth;
    if (isEmpty) {
      return <Redirect to={routes.Main} />
    }
    return (
      <ProfileSettings />
    );
  }
}

const mapStateToProps = state => ({
  firebaseAuth: state.firebase.auth,
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileSettingsContainer);

