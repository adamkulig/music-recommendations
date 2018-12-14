import { ACTIONS } from '../actions/voting.actions';

const initialState = {
  votingError: null
}

const votingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_VOTE: {
      return initialState;
    }
    case ACTIONS.ADD_VOTE_ERROR: {
      return {
        ...state,
        votingError: action.error
      }
    }
    case ACTIONS.DELETE_VOTE: {
      return initialState;
    }
    case ACTIONS.DELETE_VOTE_ERROR: {
      return {
        ...state,
        votingError: action.error
      }
    }
    default:
      return state;
  }
}

export default votingReducer;
