import React, { Fragment } from 'react';
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
import routes from '../../variables/routes';

const NavComponent = ({ onToggleNavbar, onCloseNavbar, onSignOut, navIsOpen, isLoggedIn, nickname }) => {
  return (
    <Navbar color="primary" dark expand="sm">
      <Container>
        <LinkContainer to={routes.Main}>
          <NavbarBrand>Music Recommendations</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={onToggleNavbar} />
        <Collapse isOpen={navIsOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <LinkContainer to={routes.ReviewNew} onClick={onCloseNavbar}>
                <NavLink>New</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={routes.ReviewList} onClick={onCloseNavbar}>
                <NavLink>Reviews</NavLink>
              </LinkContainer>
            </NavItem>
            {!isLoggedIn && (
              <Fragment>
                <NavItem>
                  <LinkContainer to={routes.SignIn} onClick={onCloseNavbar}>
                    <NavLink>Sign In</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to={routes.SignUp} onClick={onCloseNavbar}>
                    <NavLink>Sign Up</NavLink>
                  </LinkContainer>
                </NavItem>
              </Fragment>
            )}
            {isLoggedIn && (
              <Fragment> 
                <NavItem>
                  <LinkContainer to='#' onClick={onCloseNavbar}>
                    <NavLink onClick={onSignOut}>Sign Out</NavLink>
                  </LinkContainer>
                </NavItem>
                <NavItem>
                  <LinkContainer to={routes.ProfileDetails} onClick={onCloseNavbar}>
                    <NavLink>{nickname}</NavLink>
                  </LinkContainer>
                </NavItem>
              </Fragment>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
