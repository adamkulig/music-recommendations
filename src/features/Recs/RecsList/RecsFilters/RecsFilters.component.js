
import React from 'react';
import { Field } from 'redux-form';
import { Card, CardBody, Button, Form } from 'reactstrap';

import InputField from 'components/InputField/InputField.component';
import SelectField from 'components/SelectField/SelectField.component';
import { GENRES } from 'variables/recs';

const RecsFiltersComponent = ({ handleSubmit, submitting }) => {
  return (
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
  )
};

export default RecsFiltersComponent;
