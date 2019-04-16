import { isNil } from 'lodash';

import { ACTIONS } from '../actions/recs.actions';
import asyncReducerFactory from '../reducers/generic/async.reducer';
import initialState from '../reducers/generic/initialState';

const recInitialState = {
	...initialState,
	data: {
    rec: null
  }
};

const additionalActions = {};

additionalActions[ACTIONS.UPDATE_REC] = (state, action) => {
  const { payload } = action;
  if(!isNil(state.data.rec) && state.data.rec.id === action.payload.recId) { 
    return {
      ...state,
      data: {
        ...state.data,
        rec: {
          ...state.data.rec,
          likes: {
            ...state.data.rec.likes,
            [payload.userId]: payload.like  //do zmiany gdy nie ma like
          }
        }
      }
    }
  } else {
    return state
  }
};

const recReducer = asyncReducerFactory({
  baseActionName: ACTIONS.FETCH_REC,
  baseInitialState: recInitialState,
  additionalActions
})
  
export default recReducer;
