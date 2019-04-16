import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { toggleResetPasswordModal } from './modals.actions';

import messages from 'variables/messages';
import history from 'history.js';
import routes from 'variables/routes';

const ACTIONS = {};

const signIn = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const auth = firebase.auth();
  const { email, password } = creds;
  try {
    await auth.signInWithEmailAndPassword(
      email,
      password
    )
    if (auth.currentUser.emailVerified) {
      toastr.success(messages.toastrSuccess, messages.toastrSuccessSignIn)
    } else {
      await auth.currentUser.sendEmailVerification();
      await auth.signOut();
      dispatch(reset('signIn'));
      // bug: if you submit by enter click, focuses field is still focused and syncError is shown 
      history.push(routes.Recs)
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
      toastr.error(messages.toastrError, messages.unknownError);
    }
  }
}

const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const auth = firebase.auth();
  try {
    await auth.signOut();
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignOut);
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const signUp = creds => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const auth = firebase.auth();
  const { email, password, nickname } = creds;
  try {
    let createdUser = await auth.createUserWithEmailAndPassword(
      email,
      password
    )
    await createdUser.user.updateProfile({
      displayName: nickname
    })
    await firestore.collection('users').doc(createdUser.user.uid).set({
      displayName: nickname,
      email: email
    })
    await auth.currentUser.sendEmailVerification();
    await auth.signOut();
    dispatch(reset('signUp'));
    history.push(routes.Recs);
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignUp);
  } catch(error) {
    console.log(error);
    if(error.code === 'auth/email-already-in-use') {
      throw new SubmissionError({
        email: messages.emailIsUsed
      });
    } else {
      toastr.error(messages.toastrError, messages.unknownError);
    }
  }
}

const resetPassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const auth = firebase.auth();
  const { email } = creds;
  try {
    await auth.sendPasswordResetEmail(email);
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

const changePassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const auth = firebase.auth();
  const { currentPassword, newPassword } = creds;
  try {
    await dispatch(reauthenticate(currentPassword));
    await auth.currentUser.updatePassword(newPassword);
    dispatch(reset('changePassword'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessUpdatePassword);
  } catch(error) {
    console.log(error);
    if (error.code === 'auth/wrong-password') {
      throw new SubmissionError({
        currentPassword: messages.wrongPassword
      }); 
    }
  }
}

const changeEmail = creds => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const auth = firebase.auth();
  const { currentPassword, newEmail } = creds;
  try {
    await dispatch(reauthenticate(currentPassword));
    await auth.currentUser.updateEmail(newEmail);
    await firestore.collection('users').doc(auth.currentUser.uid).update({
      email: newEmail
    })
    await auth.currentUser.sendEmailVerification();
    await signOut();
    dispatch(reset('changeEmail'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessUpdateEmail);
  } catch(error) {
    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      throw new SubmissionError({
        currentEmail: messages.emailIsUsed
      }); 
    }
  }
}

const reauthenticate = currentPassword => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const auth = firebase.auth();
  const credential = firebase.auth.EmailAuthProvider.credential(
    auth.currentUser.email, 
    currentPassword
  );
  return auth.currentUser.reauthenticateWithCredential(credential);
}

export { 
  ACTIONS, 
  signIn, 
  signOut, 
  signUp, 
  resetPassword, 
  changePassword,
  changeEmail
};
