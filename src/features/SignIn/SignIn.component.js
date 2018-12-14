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

const SignInComponent = ({ onSubmit, onTextChange, credentials, validation }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-5 mx-auto">
          <CardHeader>Sign In</CardHeader>
          <CardBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                  type="text" 
                  name="email" 
                  id="email" 
                  onChange={onTextChange} 
                  value={credentials.email}
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
                  onChange={onTextChange} 
                  value={credentials.password}
                  valid={validation.password.isValid}
                  invalid={validation.password.isValid === false}
                />
                <FormFeedback>{validation.password.message}</FormFeedback>
              </FormGroup>
              <Button color="primary" className="float-right">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

SignInComponent.propTypes = {
  onSubmit: PropTypes.func,
  onTextChange: PropTypes.func,
  credentials: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }),
  validation: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  })
}

export default SignInComponent;
