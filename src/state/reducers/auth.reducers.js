import { ACTIONS } from '../actions/auth.actions';

const initialState = {
  modalIsOpen: false,
  error: null,
  message: null
}

const authReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_RESET_PASSWORD_MODAL: {
      console.log('TOGGLE_RESET_PASSWORD_MODAL')
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };
    }
    case ACTIONS.RESET_PASSWORD: {
      console.log('RESET_PASSWORD')
      return {
        ...state,
        message: 'Message was sent. Check your email.',
        modalIsOpen: false
      };
    }
    case ACTIONS.RESET_PASSWORD_ERROR: {
      console.log('RESET_PASSWORD_ERROR')
      return {
        ...state,
        error: action.error
      }
    }
    case ACTIONS.SIGN_IN: {
      console.log('SIGN_IN')
      return initialState;
    }
    case ACTIONS.SIGN_IN_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    case ACTIONS.SIGN_OUT: {
      console.log('SIGN_OUT')
      return initialState;
    }
    case ACTIONS.SIGN_OUT_ERROR: {
      return state;
    }
    case ACTIONS.SIGN_UP: {
      console.log('SIGN_UP')
      return initialState;
    }
    case ACTIONS.SIGN_UP_ERROR: {
      return state;
    }
    default:
      return state;
  }
}

export default authReducer;
