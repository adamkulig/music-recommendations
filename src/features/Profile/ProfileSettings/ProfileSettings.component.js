import React from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { number, func } from 'prop-types';
import { isNil } from 'lodash';

import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm.container';
import ChangeEmailForm from './ChangeEmailForm/ChangeEmailForm.container';

const ProfileSettingsComponent = ({ activeId, switchForm }) => {
  const desiredForm = activeId => {
    switch(activeId) {
      case 1:
        return <ChangePasswordForm />;
      case 2:
        return <ChangeEmailForm />;
      default:
        return null;
    }
  }

  return (
    <div className='container-narrow'>
      <Card className="my-3">
        <CardHeader>Settings</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="button" action active={activeId === 1} onClick={() => switchForm(1)}>Change password</ListGroupItem>
            <ListGroupItem tag="button" action active={activeId === 2} onClick={() => switchForm(2)}>Change e-mail</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
      {!isNil(activeId) && (
        <Card>
          <CardBody>
            {desiredForm(activeId)}
          </CardBody>
        </Card>
      )}
    </div>
  )
}

ProfileSettingsComponent.propTypes = {
  activeId: number,
  switchForm: func
}

export default ProfileSettingsComponent;
