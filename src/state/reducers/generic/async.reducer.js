const initialState = {
	data: null,
	intact: true,
	fetching: false,
	error: null
};

const asyncReducerFactory = baseActionName => (state = initialState, action ) => {
  const { payload, error } = action;
  switch (action.type) {
    case `${baseActionName}_PENDING`: {
      return {
        ...state,
        intact: false,
        fetching: true
      };
    }
    case `${baseActionName}_FULFILLED`: {
      return {
        ...state,
        fetching: false,
        data: payload
      };
    }
    case `${baseActionName}_REJECTED`: {
      return {
        ...state,
        fetching: false,
        error: error
      };
    }
    default:
      return state;
  }
}

export default asyncReducerFactory;
