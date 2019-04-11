
import React from 'react';
import { Field } from 'redux-form';
import { Card, CardBody, Button, Form } from 'reactstrap';

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
import { GENRES } from 'variables/recs';

const RecsFiltersComponent = ({ handleSubmit, submitting }) => {
  return (
    <Card className='container-narrow'>
        <CardBody>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Field
            name="band" 
            type="text" 
            component={InputField} 
            label="Band*"
            noValidate
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
