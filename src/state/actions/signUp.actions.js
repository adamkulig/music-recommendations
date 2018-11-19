const ACTIONS = {
	SIGN_UP: 'SIGN_UP'
}

const signUp = credentials => {
  return {
    type: ACTIONS.SIGN_UP,
    payload: credentials
  }
}

export { ACTIONS, signUp };
