import React from 'react';
import Select from 'react-select';
import { 
  FormGroup, 
  Label
} from 'reactstrap';

const WrappedSelectField = ({ 
  name,
  label,
  meta: { touched, error, valid },
  options,
  placeholder,
  isMulti,
  input
}) => {
  const isInvalid = touched && !valid;
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Select
        {...input}
        isClearable
        name={name}
        options={options}
        placeholder={placeholder}
        className='select'
        classNamePrefix="select__item"
        isMulti={isMulti}
        value={input.value}
        onChange={(value) => input.onChange(value)}
        onBlur={() => input.onBlur(input.value)}
        openMenuOnClick={false}
      />
      <div className={`select-feedback ${isInvalid ? 'select-feedback--is-invalid' : '' }`}>{error}</div>
    </FormGroup>
  )
};

WrappedSelectField.defaultProps = {
  isMulti: false,
  placeholder: ''
}

export default WrappedSelectField;
