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

const SignInComponent = ({ onSubmit, onTextChange, email, password }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-5 mx-auto">
          <CardHeader>Sign In</CardHeader>
          <CardBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input invalid type="email" name="email" id="email" placeholder="devil@hell.com" onChange={onTextChange} value={email}/>
                <FormFeedback>This e-mail doesn't exists.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input invalid type="password" name="password" id="password" placeholder="must have at least 6 characters" onChange={onTextChange} value={password}/>
                <FormFeedback>Wrong password.</FormFeedback>
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
  email: PropTypes.string,
  password: PropTypes.string
}

export default SignInComponent;
