import { ACTIONS } from '../actions/recs.actions';

const initialState = {
  intact: true,
  data: {
    recs: [],
    totalRecs: null,
    totalPages: null,
    currentPage: null
  }
};

const recsReducer = (state = initialState, action ) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.FETCH_RECS: {
      return {
        ...state,
        intact: false,
        data: payload
      };
    }
    default:
      return state;
  }
}

export default recsReducer;
