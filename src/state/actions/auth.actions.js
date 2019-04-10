import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import messages from 'variables/messages';
import { toggleResetPasswordModal } from './modals.actions';

const ACTIONS = {};

const signIn = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(
      creds.email,
      creds.password
    )
    const user = firebase.auth().currentUser;
    if (user.emailVerified) {
      toastr.success(messages.toastrSuccess, messages.toastrSuccessSignIn)
    } else {
      await firebase.auth().currentUser.sendEmailVerification();
      await firebase.auth().signOut();
      dispatch(reset('signIn'));
      toastr.warning(messages.toastrVerifyEmailWasSend);
    }
  } catch(error) {
    if(error.code === 'auth/wrong-password') {
      throw new SubmissionError({
        password: messages.wrongPassword
      });
    } else if (error.code === 'auth/user-not-found') {
      throw new SubmissionError({
        email: messages.emailNotFound
      });
    } else {
      throw new SubmissionError({
        email: messages.unknownProblem
      });
    }
  }
}

const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignOut)
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const signUp = creds => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(
        creds.email,
        creds.password
    )
    await createdUser.user.updateProfile({
      displayName: creds.nickname
    })
    await firestore.collection('users').doc(createdUser.user.uid).set({
      displayName: creds.nickname,
      email: creds.email
    })
    await firebase.auth().currentUser.sendEmailVerification();
    firebase.auth().signOut();
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignUp);
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

// const sendVerificationMail = () => async (dispatch, getState, { getFirebase, getFirestore }) => {
//   const firebase = getFirebase();
//   try {
//     const user = firebase.auth().currentUser;
//     await user.sendEmailVerification();
//     console.log('sendVerificationMail success')
//   } catch(error) {
//     console.log('sendVerificationMail error')
//   }
// }

const resetPassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().sendPasswordResetEmail(creds.email);
    dispatch(toggleResetPasswordModal());
    dispatch(reset('resetPassword'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessResetPassword);
  } catch(error) {
    console.log(error);
    if (error.code === 'auth/user-not-found') {
      throw new SubmissionError({
        email: messages.emailNotFound
      });
    }
  }
}

const changePassword = passwords => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const { currentPassword, newPassword } = passwords;
  try {
    await dispatch(reauthenticate(currentPassword));
    await user.updatePassword(newPassword);
    dispatch(reset('changePassword'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessUpdatePassword);
  } catch(error) {
    dispatch(reset('changePassword'));
    console.log(error);
    if (error.code === 'auth/wrong-password') {
      throw new SubmissionError({
        currentPassword: messages.wrongPassword
      }); 
    }
    //https://medium.com/@ericmorgan1/change-user-email-password-in-firebase-and-react-native-d0abc8d21618
    //https://github.com/firebase/firebaseui-web/issues/52
  }
}

const reauthenticate = currentPassword => (dispatch, getState, { getFirebase }) => {
  console.log('reauthenticate', currentPassword);
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email, currentPassword);
  return user.reauthenticateWithCredential(credential);
}

export { 
  ACTIONS, 
  signIn, 
  signOut, 
  signUp, 
  resetPassword, 
  changePassword 
};
