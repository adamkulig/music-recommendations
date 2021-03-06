import React from 'react';
import { 
  FormGroup, 
  FormFeedback, 
  Label, 
  Input
} from 'reactstrap';
import { object, string, bool } from 'prop-types';

const InputField = ({ 
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, valid },
  noValidate,
  additionalClasses
}) => {
  const isValid = touched && valid && !noValidate;
  const isInvalid = touched && !valid && !noValidate;
  return (
    <FormGroup className={additionalClasses}>
      <Label>{label}</Label>
      <Input 
        {...input} 
        type={type}
        valid={isValid}
        invalid={isInvalid}
        placeholder={placeholder}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  )
};

InputField.propTypes = {
  input: object,
  label: string,
  type: string,
  placeholder: string,
  touched: bool,
  error: string,
  valid: bool,
  noValidate: bool,
  additionalClasses: string
}

InputField.defaultProps = {
  placeholder: '',
  noValidate: false,
  additionalClasses: ''
}

export default InputField;
