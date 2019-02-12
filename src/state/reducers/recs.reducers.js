import { ACTIONS } from '../actions/recs.actions';
import asyncReducerFactory from '../reducers/generic/async.reducer';

const recsReducer = asyncReducerFactory(ACTIONS.FETCH_RECS)

export default recsReducer;
