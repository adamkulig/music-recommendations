import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut } from 'state/actions/auth.actions';
import { getAuth, getProfile } from 'state/selectors/firebase.selectors';

import AppNav from './AppNav.component';

class AppNavContainer extends Component {
  state = {
    navIsOpen: false,
    dropdownIsOpen: false
  };
 
  toggleNavbar = () => this.setState({ navIsOpen: !this.state.navIsOpen });

  toggleDropdown = () => this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen });
  
  closeNavbar = () => this.setState({ navIsOpen: false });

  render() {
    const { isEmpty, emailVerified } = this.props.auth;
    const isLoggedIn = !isEmpty && emailVerified;
    const { displayName } = this.props.profile;
     return (
      <AppNav
        onToggleNavbar={this.toggleNavbar}
        onToggleDropdown={this.toggleDropdown}
        onCloseNavbar={this.closeNavbar}
        onSignOut={this.props.signOut} 
        navIsOpen={this.state.navIsOpen}
        dropdownIsOpen={this.state.dropdownIsOpen}
        isLoggedIn={isLoggedIn}
        displayName={displayName}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: getAuth(state),
  profile: getProfile(state)
});

const mapDispatchToProps = {
  signOut 
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavContainer);
