import { ACTIONS } from '../actions/recs.actions';
import asyncReducerFactory from '../reducers/generic/async.reducer';

const allRecsReducer = asyncReducerFactory(ACTIONS.FETCH_ALL_RECS)

export default allRecsReducer;
