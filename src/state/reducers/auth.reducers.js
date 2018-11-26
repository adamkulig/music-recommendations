import { ACTIONS } from '../actions/auth.actions';

const initialState = {
  email: '',
  password: '',
}

const authReducer = (state = initialState, action ) => {
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
    case ACTIONS.SIGN_OUT: {
      return initialState;
    }
    case ACTIONS.SIGN_OUT_ERROR: {
      console.log(action.error);
      return state;
    }
    default:
      return state;
  }
}

export default authReducer;
