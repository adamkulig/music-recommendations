import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm.container';

const ProfileSettingsComponent = () => {
  return (
    <Card className="my-3 mx-auto">
      <CardHeader>Settings</CardHeader>
      <CardBody>
        <ChangePasswordForm />
      </CardBody>
    </Card>
  )
}

export default ProfileSettingsComponent;
