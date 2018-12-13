import { ACTIONS } from '../actions/auth.actions';

const initialState = {
  authErrorMessage: null
}

const authReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN: {
      console.log('SIGN_IN')
      return initialState;
    }
    case ACTIONS.SIGN_IN_ERROR: {
      return {
        ...state,
        authErrorMessage: action.error
      }
    }
    case ACTIONS.SIGN_OUT: {
      console.log('SIGN_OUT')
      return initialState;
    }
    case ACTIONS.SIGN_OUT_ERROR: {
      return {
        ...state,
        authErrorMessage: action.error
      }
    }
    case ACTIONS.SIGN_UP: {
      console.log('SIGN_UP')
      return initialState;
    }
    case ACTIONS.SIGN_UP_ERROR: {
      return {
        ...state,
        authErrorMessage: action.error
      }
    }
    default:
      return state;
  }
}

export default authReducer;
