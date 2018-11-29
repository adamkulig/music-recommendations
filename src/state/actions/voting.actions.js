import * as firebase from 'firebase';

const ACTIONS = {
  ADD_VOTE: 'ADD_VOTE',
  ADD_VOTE_ERROR: 'ADD_VOTE_ERROR',
  DELETE_VOTE: 'DELETE_VOTE',
  DELETE_VOTE: 'DELETE_VOTE',
}

// { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
const addVote = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const review = firestore.collection('recommendations').doc(data.reviewId)
  review.update({
    likes: firebase.firestore.FieldValue.arrayUnion({
      userId: data.userId,
      like: data.like
    })
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

const deleteVote = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const review = firestore.collection('recommendations').doc(data.reviewId)
  review.update({
    likes: firebase.firestore.FieldValue.arrayRemove({
      userId: data.userId,
      like: data.like
    })
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

export { ACTIONS, addVote, deleteVote };
