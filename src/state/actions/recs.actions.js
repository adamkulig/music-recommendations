import { toastr } from 'react-redux-toastr';

import history from 'history.js';
import routes from 'variables/routes';
import messages from 'variables/messages';

const ACTIONS = {
  FETCH_RECS: 'FETCH_RECS'
}
  
const createRec = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  // const user = firestore.auth().currentUser;
  const { displayName } = getState().firebase.profile;
  const { country, rating, genres } = data;
  const newRec = {
    ...data,
    country: country.label,
    rating: rating.label,
    genres: Object.assign({}, ...genres.map(item => ({[item.label]: item.value }))),
    likes: {},
    user: displayName,
    createdAt: new Date()
  }
  try {
    await firestore.collection('recommendations').add(newRec)
    history.push(routes.Main)
    toastr.success(messages.toastrSuccess, messages.toastrSuccessNewRecAdded)
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const vote = data => (dispatch, getState, { getFirebase, getFirestore }) => {
  const { recId, userId, like } = data;
  const firestore = getFirestore();
  const rec = firestore.collection('recommendations').doc(recId);
  try {
    rec.update({
      likes: {
        [userId]: like
      }
    })
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const fetchFirstPage = items => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const recsQuery = firestore.collection('recommendations').orderBy('createdAt', 'desc').limit(items);
  try {
    const querySnap = await recsQuery.get();
    console.log(querySnap);
    const recs = querySnap.docs.reduce((acc, rec, i) => (
      [...acc, {...rec.data(), id: rec.id }]
    ), [])
    dispatch({
      type: ACTIONS.FETCH_RECS,
      payload: {recs}
    })
    console.log(recs)
  } catch(error){
    console.log(error);
  }
}

export { ACTIONS, createRec, vote, fetchFirstPage };
  