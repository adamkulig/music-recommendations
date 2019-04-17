import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';
import { object, string, bool, array } from 'prop-types';

const WrappedSelectField = ({ 
  name,
  label,
  input,
  placeholder,
  meta: { touched, error, valid },
  options,
  isMulti,
  openMenuOnClick,
  additionalClasses
}) => {
  const isInvalid = touched && !valid;
  return (
    <FormGroup className={additionalClasses}>
      <Label>{label}</Label>
      <Select
        {...input}
        isClearable
        name={name}
        options={options}
        placeholder={placeholder}
        className={`select ${isInvalid ? 'select--is-invalid' : ''}`}
        classNamePrefix="select__item"
        isMulti={isMulti}
        value={input.value}
        onChange={input.onChange}
        onBlur={event => event.preventDefault()}
        openMenuOnClick={openMenuOnClick}
      />
      <div className={`select-feedback ${isInvalid ? 'select-feedback--is-invalid' : '' }`}>{error}</div>
    </FormGroup>
  )
};

WrappedSelectField.propTypes = {
  input: object,
  label: string,
  tyle: string,
  placeholder: string,
  name: string,
  touched: bool,
  error: string,
  valid: bool,
  noValidate: bool,
  options: array,
  isMulti: bool,
  additionalClasses: string
}

WrappedSelectField.defaultProps = {
  isMulti: false,
  placeholder: '',
  openMenuOnClick: false,
  additionalClasses: ''
}

export default WrappedSelectField;
