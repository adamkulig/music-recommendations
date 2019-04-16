import { ACTIONS } from '../actions/recs.actions';
import asyncReducerFactory from '../reducers/generic/async.reducer';
import initialState from '../reducers/generic/initialState';

const allRecsInitialState = {
	...initialState,
	data: {
    recs: []
  }
};

const allRecsReducer = asyncReducerFactory({ 
  baseActionName: ACTIONS.FETCH_ALL_RECS,
  baseInitialState: allRecsInitialState
})

export default allRecsReducer;
