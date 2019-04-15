import { ACTIONS } from '../actions/recs.actions';
import asyncReducerFactory from '../reducers/generic/async.reducer';

const additionalActions = {};

additionalActions[ACTIONS.UPDATE_REC] = (state, action) => ({
	...state,
	data: {
    ...state.data,
    likes: {
      ...state.data.likes,
      [action.payload.userId]: action.payload.like  //do zmiany gdy nie ma like
    }
  }
});

const recReducer = asyncReducerFactory({
  baseActionName: ACTIONS.FETCH_REC,
  additionalActions
})
  
export default recReducer;
