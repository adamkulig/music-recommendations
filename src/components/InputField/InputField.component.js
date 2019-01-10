import React from 'react';
import { 
  FormGroup, 
  FormFeedback, 
  Label, 
  Input
} from 'reactstrap';

const InputField = ({ 
  input,
  label,
  type,
  meta: { touched, error, valid, asyncValidating }
}) => {
  const isValid = touched && valid;
  const isInvalid = touched && !valid;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input 
        {...input} 
        type={type}
        valid={isValid}
        invalid={isInvalid}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  )
};

export default InputField;
