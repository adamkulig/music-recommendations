import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap';

import NavForLoggedIn from './components/NavForLoggedIn.component';
import NavForNotLoggedIn from './components/NavForNotLoggedIn.component';
import routes from 'variables/routes';

const AppNavComponent = ({ 
  dropdownIsOpen,
  navIsOpen,
  onToggleDropdown,
  onToggleNavbar,
  onCloseNavbar,
  onSignOut,
  isLoggedIn,
  displayName
}) => {
  return (
    <Navbar color="primary" dark expand="sm" className='mb-3'>
      <Container>
        <NavbarBrand href={routes.Main}>Brutal RECs</NavbarBrand>
        <NavbarToggler onClick={onToggleNavbar} />
        <Collapse isOpen={navIsOpen} navbar>
          <Nav className='ml-auto' navbar>
            {isLoggedIn && (
              <NavForLoggedIn
              onToggleDropdown={onToggleDropdown}
              onSignOut={onSignOut}
              dropdownIsOpen={dropdownIsOpen}
              displayName={displayName}
              />
            )}
            {!isLoggedIn && (
              <NavForNotLoggedIn
                onCloseNavbar={onCloseNavbar}
              />
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavComponent;
