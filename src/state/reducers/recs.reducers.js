import { ACTIONS } from '../actions/recs.actions';

const initialState = {
  recs: []
}

const recsReducer = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIONS.FETCH_RECS: {
      return {
        ...state,
        recs: action.payload.recs
      };
    }
    default:
      return state;
  }
}

export default recsReducer;
