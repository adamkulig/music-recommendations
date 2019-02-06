import React from 'react';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
} from 'reactstrap';

import FormChangePassword from './components/FormChangePassword.container';

const ProfileSettingsComponent = () => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className="my-3 mx-auto">
          <CardHeader>Settings</CardHeader>
          <CardBody>
            <FormChangePassword />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ProfileSettingsComponent;
