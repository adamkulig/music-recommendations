import React, { Fragment } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

import routes from 'variables/routes';

const NavForNotLoggedIn = ({ onCloseNavbar }) => {
  return (
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
  );
};

export default NavForNotLoggedIn;
