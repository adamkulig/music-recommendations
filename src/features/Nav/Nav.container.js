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

  onSignOut = () => {
    this.props.onSignOut();
  }
  render() {
    const { isEmpty } = this.props.auth;
    return (
      <Nav
        onToggleNavbar={this.toggleNavbar} 
        onSignOut={this.onSignOut} 
        navIsOpen={this.state.isOpen}
        isLoggedIn={!isEmpty}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  onSignOut: signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
