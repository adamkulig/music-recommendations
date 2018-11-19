const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR'
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const signIn = credentials => (dispatch, getState, { getFirebase, getFirestore }) => {
  // place for async call to database
  const firestore = getFirestore();
  // const recommendations = firestore.collection('recommendations');
  firestore.collection('users').add({
    ...credentials,
    userEmail: 'userEmail',
    createdAt: new Date()
  }).then(() => {
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

export { ACTIONS, signIn };
