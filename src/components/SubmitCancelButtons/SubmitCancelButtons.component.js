import React from 'react';
import { bool, func } from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

import LaddaButtonWrapper from '../LaddaButtonWrapper/LaddaButtonWrapper.component'

const SubmitCancelButtons = ({ submitting, onCancel }) => {
  return (
    <ButtonGroup className='float-right'>
      <Button color='secondary' disabled={submitting} className='mr-2' type='reset' onClick={onCancel}>
        Cancel
      </Button>
      <LaddaButtonWrapper color='primary' type='submit' disabled={submitting} loading={submitting} >
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
