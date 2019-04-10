import messages from 'variables/messages';
import { isPasswordInvalid } from 'helpers/regex.helpers';

const syncValidate = values => {
  const errors = {};

  if (!values.currentPassword) {
      errors.currentPassword = messages.emptyField
  } else if (isPasswordInvalid(values.currentPassword)) {
    errors.currentPassword = messages.invalidPassword;
  } 

  if (!values.newPassword) {
      errors.newPassword = messages.emptyField
  } else if (isPasswordInvalid(values.newPassword)) {
      errors.newPassword = messages.invalidPassword;
  } 

  if (!values.confirmNewPassword) {
      errors.confirmNewPassword = messages.emptyField
  } else if (values.newPassword !== values.confirmNewPassword) {
      errors.confirmNewPassword = messages.invalidConfirmPassword
  } 

  return errors;
}

export default syncValidate;
