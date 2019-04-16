import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAuth } from 'state/selectors/firebase.selectors';

import ProfileSettings from './ProfileSettings.component';

class ProfileSettingsContainer extends Component {
  state = {
    activeId: null 
  }

  switchForm = id => {
    const { activeId } = this.state;
    this.setState({
      activeId: id !== activeId ? id : null  
    })
  }

  render() {
    const { activeId } = this.state;
    return (
      <ProfileSettings activeId={activeId} switchForm={this.switchForm} />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state)
});

export default connect(mapStateToProps)(ProfileSettingsContainer);
