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

const SignUpComponent = ({ onSubmit, onTextChange, data }) => {
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
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="devil@hell.com" 
                  onChange={onTextChange} 
                  value={data.email}
                  invalid 
                />
                <FormFeedback>This e-mail already exists.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="must have at least 6 characters" 
                  onChange={onTextChange} 
                  value={data.password}
                />
                <FormFeedback>To weak password.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input 
                  type="password" 
                  name="confirmPassword" 
                  id="confirmPassword" 
                  onChange={onTextChange} 
                  value={data.confirmPassword}
                />
                <FormFeedback>Passwords don't match.</FormFeedback>
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
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string
  })
}

export default SignUpComponent;
