import React from 'react';
import { Field } from 'redux-form';
import { Form } from 'reactstrap';

import InputField from 'components/Forms/InputField/InputField.component'
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import routes from 'variables/routes';
import history from 'history.js';

const ChangePasswordForm = ({ handleSubmit, submitting }) => {
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
      <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Main)}/>
    </Form>
  )
}

export default ChangePasswordForm;
