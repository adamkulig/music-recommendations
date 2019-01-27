import messages from '../../variables/messages';
// import { isPasswordInvalid } from '../../../helpers/regex.helpers';

const syncValidate = values => {
  const errors = {};

  if (!values.band) {
      errors.band = messages.emptyField
  } 

  if (!values.country) {
      errors.country = messages.emptyField
  }

  if (!values.rating) {
      errors.rating = messages.emptyField
  }

  if (!values.genres) {
      errors.genres = messages.emptyField
  }

  return errors;
}

export default syncValidate;
