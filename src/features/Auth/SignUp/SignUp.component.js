import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';

import InputField from 'components/Forms/InputField/InputField.component'
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import routes from 'variables/routes';

const SignUpComponent = ({ handleSubmit, submitting, history }) => {
  return (
    <Card className="container-narrow">
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
          <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Recs)}/>
        </Form>
      </CardBody>
    </Card>
  )
}

SignUpComponent.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
}

export default SignUpComponent;
