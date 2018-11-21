import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import routes from '../../config/routes';

class NavComponent extends Component {
  state = {
    isOpen: false
  };
  
  toggleNavbar = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="primary" dark expand="sm">
        <Container>
          <LinkContainer to={routes.Main}>
            <NavbarBrand >Music Recommendations</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkContainer to={routes.ReviewNew}>
                  <NavLink>New</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to={routes.SignIn}>
                  <NavLink>Sign In</NavLink>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to={routes.SignUp}>
                  <NavLink>Sign Up</NavLink>
                </LinkContainer>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default NavComponent;
