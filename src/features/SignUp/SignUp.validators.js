import messages from '../../variables/messages';
import { isEmailInvalid, isPasswordInvalid, isNicknameInvalid } from '../../helpers/regex.helpers';

const syncValidate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = messages.emptyEmail;
    } else if (isEmailInvalid(values.email)) {
        errors.email = messages.invalidEmail;
    }

    if (!values.password) {
        errors.password = messages.emptyPassword
    } else if (isPasswordInvalid(values.password)) {
        errors.password = messages.invalidPassword;
    } 

    if (!values.confirmPassword) {
        errors.confirmPassword = messages.emptyConfirmPassword
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = messages.invalidConfirmPassword
    } 

    if (!values.nickname) {
        errors.nickname = messages.emptyNickname
    } else if (isNicknameInvalid(values.nickname)) {
        errors.nickname = messages.invalidNickname
    }
    return errors
  }

export default syncValidate;
