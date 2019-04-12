import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { toggleResetPasswordModal } from './modals.actions';

import messages from 'variables/messages';
import history from 'history.js';
import routes from 'variables/routes';

const ACTIONS = {};

const signIn = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const { signInWithEmailAndPassword, currentUser, signOut } = firebase.auth();
  const { email, password } = creds;
  try {
    await signInWithEmailAndPassword(
      email,
      password
    )
    if (currentUser.emailVerified) {
      toastr.success(messages.toastrSuccess, messages.toastrSuccessSignIn)
    } else {
      await currentUser.sendEmailVerification();
      await signOut();
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
      throw new SubmissionError({
        email: messages.unknownProblem
      });
    }
  }
}

const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const { signOut } = firebase.auth();
  try {
    await signOut();
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignOut);
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const signUp = creds => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const { createUserWithEmailAndPassword, currentUser, signOut } = firebase.auth();
  const { email, password, nickname } = creds;
  try {
    let createdUser = await createUserWithEmailAndPassword(
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
    await currentUser.sendEmailVerification();
    await signOut();
    dispatch(reset('signUp'));
    history.push(routes.Recs);
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignUp);
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const resetPassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const { sendPasswordResetEmail } = firebase.auth();
  const { email } = creds;
  try {
    await sendPasswordResetEmail(email);
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
  const { currentUser } = firebase.auth();
  const { currentPassword, newPassword } = creds;
  try {
    await dispatch(reauthenticate(currentPassword));
    await currentUser.updatePassword(newPassword);
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
  const { currentUser, signOut } = firebase.auth();
  const { currentPassword, newEmail } = creds;
  try {
    await dispatch(reauthenticate(currentPassword));
    await currentUser.updateEmail(newEmail);
    await firestore.collection('users').doc(currentUser.uid).update({
      email: newEmail
    })
    await currentUser.sendEmailVerification();
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
  const { currentUser } = firebase.auth();
  const credential = firebase.auth.EmailAuthProvider.credential(
    currentUser.email, 
    currentPassword
  );
  return currentUser.reauthenticateWithCredential(credential);
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
