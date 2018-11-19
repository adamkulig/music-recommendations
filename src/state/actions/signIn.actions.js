const ACTIONS = {
	SIGN_IN: 'SIGN_IN'
}

const signIn = credentials => dispatch => {
  dispatch({
    type: ACTIONS.SIGN_IN,
    payload: credentials
  })
}

export { ACTIONS, signIn };
