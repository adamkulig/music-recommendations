
import React from 'react';
import { Field } from 'redux-form';
import { Card, CardBody, Form, Row, Col, Button } from 'reactstrap';
import { IoMdSearch } from "react-icons/io";

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
import { GENRES } from 'variables/recs';

const RecsFiltersComponent = ({ handleSubmit, submitting }) => {
  return (
    <Card className='mb-3'>
      <CardBody>
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
              <Button disabled={submitting} className='btn-filter float-right'><IoMdSearch size={24}/></Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
};

export default RecsFiltersComponent;

/* <LaddaButtonWrapper 
  type='submit'
  loading={submitting}
  additionalClasses='btn-primary float-right'
>
  <IoMdSearch size={20}/>
</LaddaButtonWrapper>
</Col> */