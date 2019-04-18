import React from 'react';
import { Card, CardBody } from 'reactstrap';

import RecsFiltersForm from './components/RecsFiltersForm.component';
import RecsFiltersFormMobile from './components/RecsFiltersFormMobile.component';

const RecsFiltersComponent = ({ handleSubmit, submitting, isOpen, toggle }) => {
  return (
    <Card className='mb-3'>
      <CardBody>
        <div className='d-md-none'>
          <RecsFiltersFormMobile 
            handleSubmit={handleSubmit}
            submitting={submitting}
            isOpen={isOpen}
            toggle={toggle}
          />
        </div>
        <div className='d-none d-md-block'>
          <RecsFiltersForm handleSubmit={handleSubmit} submitting={submitting} />
        </div>
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