const ACTIONS = {
  ADD_VOTE: 'ADD_VOTE',
  ADD_VOTE_ERROR: 'ADD_VOTE_ERROR'
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const addVote = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  // place for async call to database
  const firestore = getFirestore();
  firestore.collection('recommendations').doc(data.reviewId).doc('likes').add({
    userId: data.userId,
    like: data.like
  }).then(() => {
    dispatch({
      type: ACTIONS.ADD_VOTE,
      payload: data
    })
  }).catch((error) => {
    dispatch({
      type: ACTIONS.ADD_VOTE_ERROR,
      error
    })
  })
}

export { ACTIONS, addVote };