import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav.component';
import { signOut } from 'state/actions/auth.actions';
import { getAuth, getProfile } from 'state/selectors/firebase.selectors';

class NavContainer extends Component {
  state = {
    navIsOpen: false,
    dropdownIsOpen: false
  };
 
  toggleNavbar = () => this.setState({ navIsOpen: !this.state.navIsOpen });

  toggleDropdown = () => this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen });
  
  closeNavbar = () => this.setState({ navIsOpen: false });

  onSignOut = () => {
    this.props.onSignOut();
  }

  render() {
    const { isEmpty } = this.props.auth;
    const { displayName } = this.props.profile;
     return (
      <Nav
        onToggleNavbar={this.toggleNavbar}
        onToggleDropdown={this.toggleDropdown}
        onCloseNavbar={this.closeNavbar}
        onSignOut={this.onSignOut} 
        navIsOpen={this.state.navIsOpen}
        dropdownIsOpen={this.state.dropdownIsOpen}
        isLoggedIn={!isEmpty}
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
  onSignOut: signOut 
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
