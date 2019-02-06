import { ACTIONS } from '../actions/modals.actions';

const initialState = {
  resetPasswordModalIsOpen: false,
  error: null,
  message: null
}

const modalsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_RESET_PASSWORD_MODAL: {
      console.log('TOGGLE_RESET_PASSWORD_MODAL')
      return {
        ...state,
        resetPasswordModalIsOpen: !state.resetPasswordModalIsOpen
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
    default:
      return state;
  }
}

export default modalsReducer;
