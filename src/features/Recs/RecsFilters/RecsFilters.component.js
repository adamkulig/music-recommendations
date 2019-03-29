
import React from 'react';
import { Field } from 'redux-form';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  Button, 
  Form, 
} from 'reactstrap';

import InputField from 'components/InputField/InputField.component';
import SelectField from 'components/SelectField/SelectField.component';
// import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
// import history from 'history.js';
import { GENRES, RATING } from 'variables/recs';
// import routes from 'variables/routes';

const RecsFiltersComponent = ({ handleSubmit, submitting }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card>
           <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Field
                name="band" 
                type="text" 
                component={InputField} 
                label="Band*" 
              />
              <Field
                name="rating"
                component={SelectField} 
                label="Rating*" 
                options={RATING}
                placeholder='your rating...'
              />
              <Field
                isMulti
                name="genres"
                component={SelectField} 
                label="Genres*" 
                options={GENRES}
                placeholder='choose genres...'
              />
              
             <Button disabled={submitting} >Filter</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

export default RecsFiltersComponent;
