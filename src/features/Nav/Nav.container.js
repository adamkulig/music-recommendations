import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import Nav from './Nav.component';
import { signOut } from '../../state/actions/auth.actions';

class NavContainer extends Component {
  state = {
    isOpen: false
  };
 
  toggleNavbar = () => this.setState({ isOpen: !this.state.isOpen });

  closeNavbar = () => this.setState({ isOpen: false });

  onSignOut = () => {
    this.props.onSignOut();
  }

  render() {
    const { isEmpty } = this.props.auth;
    const { nickname } = this.props.profile;
     return (
      <Nav
        onToggleNavbar={this.toggleNavbar} 
        onCloseNavbar={this.closeNavbar}
        onSignOut={this.onSignOut} 
        navIsOpen={this.state.isOpen}
        isLoggedIn={!isEmpty}
        nickname={nickname}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

const mapDispatchToProps = {
  onSignOut: signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
