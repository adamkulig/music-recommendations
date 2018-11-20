const ACTIONS = {
    CREATE_REVIEW: 'CREATE_REVIEW',
    CREATE_REVIEW_ERROR: 'CREATE_REVIEW_ERROR'
  }
  
  // { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
  const createReview = data => (dispatch, getState, { getFirebase, getFirestore }) => {
    // place for async call to database
    const firestore = getFirestore();
    firestore.collection('recommendations').add({
      ...data,
      user: 'Demon',
      date: new Date()
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