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

import InputField from 'components/InputField/InputField.component'
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import routes from 'variables/routes';

const SignInComponent = ({ handleSubmit, submitting, handleOpenModal, history }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className="mx-auto">
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
              <Button color="link" disabled={submitting} onClick={handleOpenModal} className='px-0'>
                Forgot your password?
              </Button>
              <SubmitCancelButtons disabled={submitting} onCancel={() => history.push(routes.Main)} />
            </Form>
            {/* <div className=" my-2 text-center">
              <span className="text-success">{message}</span>
            </div> */}
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
