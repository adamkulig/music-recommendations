import { SubmissionError, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import messages from 'variables/messages';

const ACTIONS = {};

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

const changePassword = creds => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  try {
    await user.updatePassword(creds.password);
    // console.log(reset)
    await dispatch(reset('changePassword'));
    toastr.success(messages.toastrSuccess, messages.toastrSuccessUpdatePassword);
  } catch(error) {
    console.log(error);
    // if (error.code === 'auth/user-not-found') {
    //   throw new SubmissionError({
    //     email: messages.emailNotFound
    //   });
    // }
    //https://medium.com/@ericmorgan1/change-user-email-password-in-firebase-and-react-native-d0abc8d21618
    //https://github.com/firebase/firebaseui-web/issues/52
  }
}

export { 
  ACTIONS, 
  signIn, 
  signOut, 
  signUp, 
  resetPassword, 
  changePassword 
};
