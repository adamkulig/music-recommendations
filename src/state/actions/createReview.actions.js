const ACTIONS = {
    CREATE_REVIEW: 'CREATE_REVIEW',
    CREATE_REVIEW_ERROR: 'CREATE_REVIEW_ERROR'
  }
  
  // { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
  const createReview = data => (dispatch, getState, { getFirebase, getFirestore }) => {
    // place for async call to database
    const firestore = getFirestore();
    const { nickname } = getState().firebase.profile
    firestore.collection('recommendations').add({
      ...data,
      user: nickname,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: ACTIONS.CREATE_REVIEW,
        payload: data
      })
    }).catch((error) => {
      dispatch({
        type: ACTIONS.CREATE_REVIEW_ERROR,
        error
      })
    })
  }
  
  export { ACTIONS, createReview };
  