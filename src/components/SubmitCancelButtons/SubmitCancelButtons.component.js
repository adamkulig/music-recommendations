import React from 'react';
import { bool, func } from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

import LaddaButtonWrapper from '../LaddaButtonWrapper/LaddaButtonWrapper.component';

const SubmitCancelButtons = ({ submitting, onCancel }) => {
  return (
    <ButtonGroup className='float-right'>
      <Button color='secondary' className='mr-1' type='reset' disabled={submitting} onClick={onCancel}>
        Cancel
      </Button>
      <LaddaButtonWrapper type='submit' loading={submitting} additionalClasses='btn-primary'>>
        Submit
      </LaddaButtonWrapper>
    </ButtonGroup>
  )
}

SubmitCancelButtons.propTypes = {
  submitting: bool,
  onCancel: func
}

export default SubmitCancelButtons;
