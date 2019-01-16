// import messages from '../../variables/messages';
// import { find } from 'lodash';
  
// const asyncValidateSignUp = (values, dispatch, props) => {
//   const { users } = props;
//   return new Promise((resolve,reject) => {
//     const user = find(users, user => user.email === values.email)
//     if (!user) {
//       reject({ email: messages.emailIsUsed });
//     } else if (user.password !== values.password) {
//       reject({ email: messages.wrongPassword });
//     } else {
//       resolve();
//     }
//   })
// }

// export default asyncValidateSignUp;
