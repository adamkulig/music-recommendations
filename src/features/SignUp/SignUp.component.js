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

const SignUpComponent = ({ handleSubmit, submitting, history }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-3 mx-auto">
          <CardHeader>Sign Up</CardHeader>
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
              <Field
                name="confirmPassword" 
                type="password" 
                component={InputField} 
                label="Confirm Password" 
              />
              <Field
                name="nickname" 
                type="text" 
                component={InputField} 
                label="Nickname" 
              />
              <Button color="primary" className="float-right" type="submit" disabled={submitting}>
                Submit
              </Button>
              <Button color="secondary" className="float-right mr-1" disabled={submitting} onClick={history.goBack}>
                Go Back
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

SignUpComponent.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default SignUpComponent;
