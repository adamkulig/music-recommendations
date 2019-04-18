import React from 'react';
import { Form, Row, Col, Button, Collapse } from 'reactstrap';
import { Field } from 'redux-form';
import { IoIosSearch, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import InputField from 'components/Forms/InputField/InputField.component';
import SelectField from 'components/Forms/SelectField/SelectField.component';
import { GENRES } from 'variables/recs';

const RecsFiltersFormMobile = ({ handleSubmit, submitting, isOpen, toggle }) => (
  <>
    <div className='d-flex justify-content-between'>
      <Button color='primary' onClick={toggle}>
        <span>Filters</span>
        {isOpen ? (
          <IoIosArrowUp size={20} style={{verticalAlign: 'bottom', marginLeft: '5px'}}/>
          ) : (
          <IoIosArrowDown size={20} style={{verticalAlign: 'middle', marginLeft: '5px'}}/>
        )}
      </Button>
    </div>
    <Collapse isOpen={isOpen}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Row className='d-flex align-items-center'>
          <Field
            isMulti
            name="genres"
            component={SelectField} 
            options={GENRES}
            placeholder='choose genres...'
            additionalClasses='col-12 mb-0'
          />
          <Field
            name="band" 
            type="text" 
            component={InputField} 
            noValidate
            placeholder="write band's name..."
            additionalClasses='col mb-0'
          />
          <Col xs='auto' className='pl-0'>
            <Button disabled={submitting} className='btn-filter btn-filter--mobile'><IoIosSearch size={18}/></Button>
          </Col>
        </Row>
      </Form>  
    </Collapse>
  </>
);

export default RecsFiltersFormMobile;
