import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Button, 
  Form
} from 'reactstrap';
import InputField from '../../components/InputField/InputField.component'


const SignInComponent = ({ handleSubmit, submitting, handleResetPassword }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-5 mx-auto">
          <CardHeader>Sign In</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Field
                name="email" 
                type="text" 
                component={InputField} 
                label="Email" 
              />
              <Field
                name="password" 
                type="password" 
                component={InputField} 
                label="Password" 
              />
              <Button color="link" type="submit" disabled={submitting} onClick={handleResetPassword}>
                Forgot your password?
              </Button>
              <Button color="primary" className="float-right" type="submit" disabled={submitting}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

SignInComponent.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default SignInComponent;
