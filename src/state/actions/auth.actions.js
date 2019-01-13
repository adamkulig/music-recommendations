import { SubmissionError } from 'redux-form';
import messages from '../../variables/messages';

const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR'
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const signIn = data => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  return firebase.auth().signInWithEmailAndPassword(
    data.email,
    data.password
  ).then(() => {
    dispatch({
      type: ACTIONS.SIGN_IN,
      payload: data
    })
  }).catch((error) => {
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
        email: 'chuj wie ocb'
      });
    }
  })
}

const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signOut()
    .then(() => {
      dispatch({
        type: ACTIONS.SIGN_OUT
      })
    }).catch((error) => {
      dispatch({
        type: ACTIONS.SIGN_OUT_ERROR,
        error
      })
    })
}

const signUp = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  firebase.auth().createUserWithEmailAndPassword(
    data.email,
    data.password
  ).then(resp => firestore.collection('users').doc(resp.user.uid).set({
    nickname: data.nickname,
    email: data.email
  })).then(() => {
    dispatch({
      type: ACTIONS.SIGN_UP,
      payload: data
    })
  }).catch((error) => {
    dispatch({
      type: ACTIONS.SIGN_UP_ERROR,
      error
    })
  })
}

export { ACTIONS, signIn, signOut, signUp };
