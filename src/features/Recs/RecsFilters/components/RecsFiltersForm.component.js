import React from 'react';
import { Form, Row, Col, Button } from 'reactstrap';
import { Field } from 'redux-form';
import { IoIosSearch } from "react-icons/io";

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
import { GENRES } from 'variables/recs';

const RecsFiltersForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit} autoComplete="off">
    <Row className='d-flex align-items-center'>
      <Field
        isMulti
        name="genres"
        component={SelectField} 
        options={GENRES}
        placeholder='choose genres...'
        additionalClasses='col-12 col-md-6'
      />
      <Field
        name="band" 
        type="text" 
        component={InputField} 
        noValidate
        placeholder="write band's name..."
        additionalClasses='col'
      />
      <Col md="auto" >
        <Button disabled={submitting} className='btn-filter'><IoIosSearch size={24}/></Button>
      </Col>
    </Row>
  </Form>  
);

export default RecsFiltersForm;
