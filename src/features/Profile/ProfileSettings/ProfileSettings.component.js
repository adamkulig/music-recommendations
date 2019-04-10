import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import { number, func } from 'prop-types';

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
    <Fragment>
      <Card className="my-3">
        <CardHeader>Settings</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="button" action active={activeId === 1} onClick={() => switchForm(1)}>Reset Password</ListGroupItem>
            <ListGroupItem tag="button" action active={activeId === 2} onClick={() => switchForm(2)}>Change E-mail</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          {desiredForm(activeId)}
        </CardBody>
      </Card>
    </Fragment>
  )
}

ProfileSettingsComponent.propTypes = {
  activeId: number,
  switchForm: func
}

export default ProfileSettingsComponent;
