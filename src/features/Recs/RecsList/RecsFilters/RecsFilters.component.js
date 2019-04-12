
import React from 'react';
import { Field } from 'redux-form';
import { Card, CardBody, Button, Form } from 'reactstrap';
import { IoIosSearch } from "react-icons/io";

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
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
            noValidate
            placeholder='choose genres...'
          />
          <Field
            isMulti
            name="genres"
            component={SelectField} 
            options={GENRES}
            placeholder='choose genres...'
          />
          <Button disabled={submitting}><IoIosSearch size={20}/></Button>
        </Form>
      </CardBody>
    </Card>
  )
};

export default RecsFiltersComponent;
