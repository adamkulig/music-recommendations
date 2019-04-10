import React from 'react';
import { Field } from 'redux-form';
import { Form } from 'reactstrap';

import InputField from 'components/Forms/InputField/InputField.component'
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import routes from 'variables/routes';
import history from 'history.js';

const ChangeEmailForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field
        name="email" 
        type="email" 
        component={InputField} 
        label="Email" 
      />
      <Field
        name="confirmEmail" 
        type="email" 
        component={InputField} 
        label="Confirm Email" 
      />
      <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Main)}/>
    </Form>
  )
}

export default ChangeEmailForm;
