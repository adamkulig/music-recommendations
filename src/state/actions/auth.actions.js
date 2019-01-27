import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import messages from '../../variables/messages';

const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  TOGGLE_RESET_PASSWORD_MODAL: 'TOGGLE_RESET_PASSWORD_MODAL',
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR',
}

const signIn = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(
      creds.email,
      creds.password
    )
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignIn)
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
    toastr.success(messages.toastrSuccess, messages.toastrSuccessSignUp);
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const resetPassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().sendPasswordResetEmail(creds.email);
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

const toggleResetPasswordModal = () => ({
  type: ACTIONS.TOGGLE_RESET_PASSWORD_MODAL
})

const changePassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  try {
    await user.updatePassword(creds.password);
    // console.log(reset)
    await dispatch(reset('changePassword'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessUpdatePassword)
  } catch(error) {
    console.log(error);
    // if (error.code === 'auth/user-not-found') {
    //   throw new SubmissionError({
    //     email: messages.emailNotFound
    //   });
    // }
  }
}

export { 
  ACTIONS, 
  signIn, 
  signOut, 
  signUp, 
  resetPassword, 
  toggleResetPasswordModal, 
  changePassword 
};
