import { cloneDeep } from 'lodash';

import initialState from './initialState';

const asyncReducerFactory = ({ 
  baseActionName, 
  additionalActions = {},
  baseInitialState = cloneDeep(initialState),
}) => {
  const actions = {};

  actions[`${baseActionName}_PENDING`] = (state, action) => ({
		...state,
		intact: false,
		fetching: true
  });
  
  actions[`${baseActionName}_FULFILLED`] = (state, action) => ({
    ...state,
    fetching: false,
    error: null,
    data: action.payload
  });
  
  actions[`${baseActionName}_REJECTED`] = (state, action) => ({
    ...state,
    fetching: false,
    error: action.error
  });
  
  actions[`${baseActionName}_CANCELLED`] = (state, action) => ({
    ...state,
    fetching: false
  });
  
  const allActions = { ...actions, ...additionalActions }

  return (state = baseInitialState, action) => {
		let result;

		if (action.type in allActions) {
			result = allActions[action.type](state, action);
		} else {
			result = { ...state };
		}

		return result;
	};
}

export default asyncReducerFactory;
