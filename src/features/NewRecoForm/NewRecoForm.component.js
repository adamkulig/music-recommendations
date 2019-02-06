import React from 'react';
import { Field } from 'redux-form';
import { 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardHeader, 
  Form, 
} from 'reactstrap';

import InputField from 'components/InputField/InputField.component';
import SelectField from 'components/SelectField/SelectField.component';
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import history from 'history.js';
import { GENRES, RATING } from 'variables/recos';
import routes from 'variables/routes';

const NewRecoComponent = ({ handleSubmit, submitting, countries }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card>
          <CardHeader>New recommendation</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Field
                name="band" 
                type="text" 
                component={InputField} 
                label="Band*" 
              />
              <Field
                name="country"
                component={SelectField} 
                label="Country*" 
                options={countries}
                placeholder='choose country...'
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
              <Field
                name="youtubeLink" 
                type="text" 
                component={InputField} 
                label="YT link*" 
                placeholder='paste youtube link...'
              />
              <Field
                name="similar" 
                type="text" 
                component={InputField} 
                label="Similar"
                placeholder='separate band names with a comma...' 
              />
              <Field
                name="facebookLink" 
                type="text" 
                component={InputField} 
                label="FB link"
                placeholder='paste facebook link...'
              />
              <Field
                name="opinion" 
                type="textarea" 
                component={InputField} 
                label="Opinion"
                placeholder='your opinion...'
                rows="5"
              />
              <p className='small text-muted'>* fields are required.</p>
             <SubmitCancelButtons disabled={submitting} onCancel={() => history.push(routes.Main)}/>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};

export default NewRecoComponent;
