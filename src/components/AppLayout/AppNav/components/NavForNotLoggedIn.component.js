import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

import routes from 'variables/routes';

const NavForNotLoggedIn = ({ onCloseNavbar }) => {
  return (
    <>
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
    </>
  );
};

export default NavForNotLoggedIn;
