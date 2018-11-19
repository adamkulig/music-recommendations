import { ACTIONS } from '../actions/signUp.actions';

const initialState = {
  email: '',
  password: '',
}

const signUpReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.SIGN_UP: {
      const { email, password } = action.payload;
      return {
        email,
        password
      }
    }
    default:
      return state;
  }
}

export default signUpReducer;
