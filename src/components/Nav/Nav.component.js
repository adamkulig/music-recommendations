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

const NavComponent = ({ onToggleNavbar, onSignOut, navIsOpen }) => {
  
  return (
    <Navbar color="primary" dark expand="sm">
      <Container>
        <LinkContainer to={routes.Main}>
          <NavbarBrand >Music Recommendations</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={onToggleNavbar} />
        <Collapse isOpen={navIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LinkContainer to={routes.ReviewNew}>
                <NavLink>New</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={routes.ReviewList}>
                <NavLink>Reviews</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={routes.SignIn}>
                <NavLink>Sign In</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer exact to={routes.Main}>
                <NavLink onClick={onSignOut}>Sign Out</NavLink>
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
};

export default NavComponent;
