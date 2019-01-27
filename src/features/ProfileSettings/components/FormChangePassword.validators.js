import messages from '../../../variables/messages';
import { isPasswordInvalid } from '../../../helpers/regex.helpers';

const syncValidate = values => {
  const errors = {};

  if (!values.password) {
      errors.password = messages.emptyField
  } else if (isPasswordInvalid(values.password)) {
      errors.password = messages.invalidPassword;
  } 

  if (!values.confirmPassword) {
      errors.confirmPassword = messages.emptyField
  } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = messages.invalidConfirmPassword
  } 

  return errors;
}

export default syncValidate;
