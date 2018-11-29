import { ACTIONS } from '../actions/voting.actions';

const initialState = {
  likes: []
}

const votingReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.ADD_VOTE: {
      return {
        ...state,
        likes: [...state.likes, action.payload]
      }
    }
    default:
      return state;
  }
}

export default votingReducer;
