import { map } from 'lodash';

import messages from 'variables/messages';
  
const asyncValidateSignUp = (values, dispatch, props) => {
  const { users } = props;
  return new Promise((resolve,reject) => {
    map(users, user => {
      if (user.email === values.email) {
        reject({ email: messages.emailIsUsed });
      } else if (user.displayName === values.nickname) {
        reject({ nickname: messages.nicknameIsUsed });
      }
    })
    resolve();
  })
}

export default asyncValidateSignUp;
