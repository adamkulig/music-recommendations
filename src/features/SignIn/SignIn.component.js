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


const SignInComponent = ({ handleSubmit, submitting, handleOpenModal, message }) => {
  return (
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <Card className="my-3 mx-auto">
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
              <Button color="link" disabled={submitting} onClick={handleOpenModal}>
                Forgot your password?
              </Button>
              <Button color="primary" className="float-right" type="submit" disabled={submitting}>
                Submit
              </Button>
            </Form>
            <div className=" my-2 text-center">
              <span className="text-success">{message}</span>
            </div>
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
