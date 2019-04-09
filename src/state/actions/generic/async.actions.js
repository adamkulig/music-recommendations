const asyncActionPending = actionName => ({
  type: `${actionName}_PENDING`
});

const asyncActionFulfilled = (actionName, payload = null) => ({
  type: `${actionName}_FULFILLED`,
  payload: payload
});

const asyncActionRejected = (actionName, error) => ({
  type: `${actionName}_REJECTED`,
  error: error
});

const asyncActionCancelled = actionName => ({
  type: `${actionName}_CANCELLED`
});

export {
  asyncActionPending,
  asyncActionFulfilled,
  asyncActionRejected,
  asyncActionCancelled
}