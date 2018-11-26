const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_ERROR: 'SIGN_IN_ERROR'
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

export { ACTIONS, signIn, signOut };
