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
import SubmitCancelButtons from '../../../components/SubmitCancelButtons/SubmitCancelButtons.component'
import routes from '../../../variables/routes'

const FormChangePassword = ({ handleSubmit, submitting, history }) => {
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
      <SubmitCancelButtons disabled={submitting} onCancel={() => history.push(routes.Main)}/>
    </Form>
  )
}

export default FormChangePassword;
