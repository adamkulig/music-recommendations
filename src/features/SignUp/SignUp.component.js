import React from 'react';
import PropTypes from 'prop-types';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Button, 
  Form, 
  FormGroup, 
  FormFeedback, 
  Label, 
  Input 
} from 'reactstrap';

const SignUpComponent = ({ onSubmit, onTextChange, registrationData, validation }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-5 mx-auto">
          <CardHeader>Sign Up</CardHeader>
          <CardBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                  type="text" 
                  name="email" 
                  id="email" 
                  placeholder="devil@hell.com" 
                  onChange={onTextChange} 
                  value={registrationData.email}
                  valid={validation.email.isValid}
                  invalid={validation.email.isValid === false}
                  />
                <FormFeedback>{validation.email.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="must have at least 6 characters" 
                  onChange={onTextChange} 
                  value={registrationData.password}
                  valid={validation.password.isValid}
                  invalid={validation.password.isValid === false}
                />
                <FormFeedback>{validation.password.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="confirmPassword" 
                  onChange={onTextChange} 
                  value={registrationData.confirmPassword}
                  valid={validation.confirmPassword.isValid}
                  invalid={validation.confirmPassword.isValid === false}
                />
                <FormFeedback>{validation.confirmPassword.message}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="nickname">Nickname</Label>
                <Input 
                  type="text" 
                  name="nickname" 
                  id="nickname" 
                  onChange={onTextChange} 
                  value={registrationData.nickname}
                  valid={validation.nickname.isValid}
                  invalid={validation.nickname.isValid === false}
                />
                <FormFeedback>{validation.nickname.message}</FormFeedback>
              </FormGroup>
              <Button color="primary" className="float-right">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

SignUpComponent.propTypes = {
  onSubmit: PropTypes.func,
  onTextChange: PropTypes.func,
  registrationData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    nickname: PropTypes.string
  }),
  validation: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
    confirmPassword: PropTypes.object,
    nickname: PropTypes.object
  })
}

export default SignUpComponent;
