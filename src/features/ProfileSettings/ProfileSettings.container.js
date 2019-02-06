import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileSettings from './ProfileSettings.component';
import { Redirect } from 'react-router-dom';
import routes from 'variables/routes';
import { getAuth } from 'state/selectors/firebase.selectors'

class ProfileSettingsContainer extends Component {
  render() {
    const { auth } = this.props;
    const { isEmpty } = auth;
    if (isEmpty) {
      return <Redirect to={routes.Main} />
    }
    return (
      <ProfileSettings />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(ProfileSettingsContainer);

