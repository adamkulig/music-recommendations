import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getAuth } from 'state/selectors/firebase.selectors';

import ProfileSettings from './ProfileSettings.component';
import routes from 'variables/routes';

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

