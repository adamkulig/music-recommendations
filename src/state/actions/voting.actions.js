// import * as firebase from 'firebase';

const ACTIONS = {
  ADD_VOTE: 'ADD_VOTE',
  ADD_VOTE_ERROR: 'ADD_VOTE_ERROR',
  DELETE_VOTE: 'DELETE_VOTE',
  DELETE_VOTE_ERROR: 'DELETE_VOTE_ERROR',
}

const vote = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const { reviewId, userId, like } = data;
  const firestore = getFirestore();
  const review = firestore.collection('recommendations').doc(reviewId)
  review.update({
    likes: {
      [userId]: like
    }
  })
}

export { ACTIONS, vote };
