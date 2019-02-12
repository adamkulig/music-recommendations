const asyncActionPending = actionName => ({
  type: `${actionName}_PENDING`
});

const asyncActionFulfilled = (actionName, payload) => ({
  type: `${actionName}_FULFILLED`,
  payload: payload
});

const asyncActionRejected = (actionName, error) => ({
  type: `${actionName}_REJECTED`,
  error: error
});

export {
  asyncActionPending,
  asyncActionFulfilled,
  asyncActionRejected
}