import messages from '../../variables/messages';
import { isYoutubeUrlInvalid } from '../../../helpers/regex.helpers';

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

  if (!values.youtubeLink) {
    errors.youtubeLink = messages.emptyField
  } else if (isYoutubeUrlInvalid(values.youtubeLink)) {
    errors.youtubeLink = messages.invalidYoutubeUrl
  }

  return errors;
}

export default syncValidate;
