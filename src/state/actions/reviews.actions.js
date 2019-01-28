const ACTIONS = {
    CREATE_RECOMMENDATION: 'CREATE_RECOMMENDATION',
    CREATE_RECOMMENDATION_ERROR: 'CREATE_RECOMMENDATION_ERROR'
  }
  
  // { getFirebase, getFirestore } are available thanks for thunk.withExtraArgument({...})
  const createRecommendation = data => (dispatch, getState, { getFirebase, getFirestore }) => {
    // place for async call to database
    const firestore = getFirestore();
    const { displayName } = getState().firebase.profile
    console.log(data);
    console.log(displayName);
    const newReco = {
      ...data,
      country: data.country.label,
      rating: data.country.label,
      genres: Object.assign({}, ...data.genres.map(item => ({[item.label]: item.value }))),
      likes: {},
      user: displayName,
      createdAt: new Date()
    }
    console.log(newReco)
    firestore.collection('recommendations').add(newReco).then(() => {
      dispatch({
        type: ACTIONS.CREATE_RECOMMENDATION,
        payload: data
      })
    }).catch((error) => {
      dispatch({
        type: ACTIONS.CREATE_RECOMMENDATION_ERROR,
        error
      })
    })
  }
  
  export { ACTIONS, createRecommendation };
  