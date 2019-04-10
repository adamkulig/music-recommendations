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
        name="currentPassword" 
        type="password" 
        component={InputField} 
        label="Current password" 
      />
      <Field
        name="newPassword" 
        type="password" 
        component={InputField} 
        label="New password" 
      />
      <Field
        name="confirmNewPassword" 
        type="password" 
        component={InputField} 
        label="Confirm new password" 
      />
      <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Main)}/>
    </Form>
  )
}

export default ChangePasswordForm;
