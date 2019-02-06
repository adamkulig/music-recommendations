import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const SubmitCancelButtons = ({ disabled, onCancel }) => {
  return (
    <ButtonGroup className='float-right'>
      <Button color='secondary' disabled={disabled} className='mr-2' type='reset' onClick={onCancel}>
        Cancel
      </Button>
      <Button color='primary' type='submit' disabled={disabled}>
        Submit
      </Button>
    </ButtonGroup>
  )
}

export default SubmitCancelButtons;
