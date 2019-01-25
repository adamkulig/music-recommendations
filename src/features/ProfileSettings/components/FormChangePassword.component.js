import React from 'react';
import { Field } from 'redux-form';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Button,
  ButtonGroup,
  Form
} from 'reactstrap';
import InputField from '../../../components/InputField/InputField.component'

const FormChangePassword = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
      <Button color="primary" type="submit" disabled={submitting}>
        Submit
      </Button>
    </Form>
  )
}

export default FormChangePassword;
