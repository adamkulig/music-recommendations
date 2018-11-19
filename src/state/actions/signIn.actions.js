const ACTIONS = {
	SIGN_IN: 'SIGN_IN'
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const signIn = credentials => (dispatch, getState, { getFirebase, getFirestore }) => {
  // place for async call to database
  dispatch({
    type: ACTIONS.SIGN_IN,
    payload: credentials
  })
}

export { ACTIONS, signIn };
