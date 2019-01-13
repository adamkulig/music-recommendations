import messages from '../../variables/messages';
import { isEmailInvalid } from '../../helpers/regex.helpers';

const syncValidate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = messages.emptyEmail;
    } else if (isEmailInvalid(values.email)) {
        errors.email = messages.invalidEmail;
    }

    if (!values.password) {
        errors.password = messages.emptyPassword
    } 

    return errors;
  }

export default syncValidate;
