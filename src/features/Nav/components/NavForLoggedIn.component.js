import React from 'react';
import {
  UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../../../variables/routes';

const NavForLoggedIn = ({ onSignOut, displayName }) => {
  return (
    <UncontrolledDropdown nav inNavbar justified='true'>
      <DropdownToggle nav caret>
        {displayName}
      </DropdownToggle>
      <DropdownMenu right className='text-center'>
        <DropdownItem header>{displayName}</DropdownItem>
        <DropdownItem>
          <Link to={routes.NewRecoForm} className='d-block nav-link'>New Reco</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to={routes.ProfileSettings} className='d-block nav-link'>Settings</Link>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={onSignOut}>
          <Link to={routes.Main} className='d-block nav-link'>Sign Out</Link>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default NavForLoggedIn;
