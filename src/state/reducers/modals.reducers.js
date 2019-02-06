import { ACTIONS } from '../actions/modals.actions';

const initialState = {
  resetPasswordModalIsOpen: false
}

const modalsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_RESET_PASSWORD_MODAL: {
      return {
        ...state,
        resetPasswordModalIsOpen: !state.resetPasswordModalIsOpen
      };
    }
    default:
      return state;
  }
}

export default modalsReducer;
