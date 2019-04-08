import { ACTIONS } from '../actions/recs.actions';

const initialState = {
  intact: true,
  data: {
    recs: [],
    totalRecs: null,
    totalPages: null,
    page: null,
    filters: []
  }
};

const recsReducer = (state = initialState, action ) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.FETCH_RECS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload
        },
        intact: false
      };
    }
    case ACTIONS.UPDATE_REC: {
      const { payload } = action;
      const updatedRecs = state.data.recs.map(rec => {
        if (payload.recId === rec.id) {
          return {
            ...rec,
            likes: {
              ...rec.likes,
              [payload.userId]: payload.like  //do zmiany gdy nie ma like
            }
          }
        } else {
          return rec;
        }
      })
      return {
        ...state,
        data: {
          ...state.data,
          recs: updatedRecs
        }
      }
    }
    default:
      return state;
  }
}

export default recsReducer;
