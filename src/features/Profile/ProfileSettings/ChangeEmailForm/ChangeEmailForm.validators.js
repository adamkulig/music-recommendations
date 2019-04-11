import messages from 'variables/messages';
import { isPasswordInvalid, isEmailInvalid } from 'helpers/regex.helpers';

const syncValidate = values => {
  const errors = {};

  if (!values.currentPassword) {
    errors.currentPassword = messages.emptyField
  } else if (isPasswordInvalid(values.currentPassword)) {
  errors.currentPassword = messages.invalidPassword;
  } 

  if (!values.newEmail) {
    errors.newEmail = messages.emptyField;
  } else if (isEmailInvalid(values.newEmail)) {
    errors.newEmail = messages.invalidEmail;
  } 

  return errors;
}

export default syncValidate;
