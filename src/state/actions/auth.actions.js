const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_ERROR: 'SIGN_OUT_ERROR',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR'
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  ).then(() => {
    dispatch({
      type: ACTIONS.SIGN_IN,
      payload: credentials
    })
  }).catch((error) => {
    dispatch({
      type: ACTIONS.SIGN_IN_ERROR,
      error
    })
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

const signUp = registrationData => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  firebase.auth().createUserWithEmailAndPassword(
    registrationData.email,
    registrationData.password
  ).then(resp => firestore.collection('users').doc(resp.user.uid).set({
    nickname: registrationData.nickname
  })).then(() => {
    dispatch({
      type: ACTIONS.SIGN_UP,
      payload: registrationData
    })
  }).catch((error) => {
    dispatch({
      type: ACTIONS.SIGN_UP_ERROR,
      error
    })
  })
}

export { ACTIONS, signIn, signOut, signUp };
