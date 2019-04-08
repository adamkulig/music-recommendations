import React from 'react';
import { 
  FormGroup, 
  FormFeedback, 
  Label, 
  Input
} from 'reactstrap';
// import {} from 'prop-types';

const InputField = ({ 
  input,
  label,
  type,
  meta: { touched, error, valid },
  placeholder,
  noValidate,
  ...props
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
        placeholder={placeholder}
        {...props}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  )
};

// InputField.propTypes = {
  
// }

InputField.defaultProps = {
  placeholder: '',
  noValidate: false
}

export default InputField;
