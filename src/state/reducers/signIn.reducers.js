import { ACTIONS } from '../actions/signIn.actions';

const initialState = {
  email: '',
  password: '',
}

const signInReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN: {
      const { email, password } = action.payload;
      return {
        email,
        password
      }
    }
    case ACTIONS.SIGN_IN_ERROR: {
      console.log(action.error);
      return state;
    }
    default:
      return state;
  }
}

export default signInReducer;
