import React from 'react';
import { Field } from 'redux-form';
import { Card, CardBody, CardHeader, Form } from 'reactstrap';
import { func, bool, array } from 'prop-types';

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
import SubmitCancelButtons from 'components/SubmitCancelButtons/SubmitCancelButtons.component'
import history from 'history.js';
import { GENRES, RATING } from 'variables/recs';
import routes from 'variables/routes';

const RecComponent = ({ handleSubmit, submitting, countries }) => {
  return (
    <Card>
      <CardHeader>New rec</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Field
            name="band" 
            type="text" 
            component={InputField} 
            label="Band*" 
            placeholder="write the band's name..."
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
            openMenuOnClick
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
          <p className='small text-muted'>* fields are required.</p>
          <Field
            name="similar" 
            type="text" 
            component={InputField} 
            label="Similar**"
            placeholder='separate band names with a comma...' 
          />
          <Field
            name="facebookLink" 
            type="text" 
            component={InputField} 
            label="FB link**"
            placeholder='paste facebook link...'
          />
          <Field
            name="opinion" 
            type="textarea" 
            component={InputField} 
            label="Opinion**"
            placeholder='your opinion...'
            rows="5"
          />
          <p className='small text-muted'>** optional fields.</p>
          <SubmitCancelButtons submitting={submitting} onCancel={() => history.push(routes.Main)}/>
        </Form>
      </CardBody>
    </Card>
  )
};

RecComponent.propTypes = {
  handleSubmit: func,
  submitting: bool,
  countries: array
}

export default RecComponent;
