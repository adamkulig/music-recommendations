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
        name="currentPassword" 
        type="password" 
        component={InputField} 
        label="Current password" 
      />
      <Field
        name="newEmail" 
        type="email" 
        component={InputField} 
        label="New e-mail" 
      />
      <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Recs)}/>
    </Form>
  )
}

export default ChangeEmailForm;
