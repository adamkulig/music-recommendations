import { toastr } from 'react-redux-toastr';

import history from 'history.js';
import routes from 'variables/routes';
import messages from 'variables/messages';
import { RECS } from 'variables/recs';
import { snapshotsToArray } from 'helpers/firestore.helpers';
import {   
  asyncActionPending,
  asyncActionFulfilled,
  asyncActionRejected
} from './generic/async.actions';

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

const fetchPage = params => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const recsRef = firestore
    .collection('recommendations')
    .orderBy('createdAt', 'desc')
  try {
    dispatch(asyncActionPending(ACTIONS.FETCH_RECS))
    const allRecs = await recsRef.get()
    const totalRecs = allRecs.docs.length;
    const lastRecRef = allRecs.docs[params.currentPage * RECS.pageSize - RECS.pageSize];
    const totalPages = Math.ceil(totalRecs / RECS.pageSize);
    const recsQuery = await recsRef.startAt(lastRecRef).limit(RECS.pageSize);
    const querySnap = await recsQuery.get();
    const recs = snapshotsToArray(querySnap.docs);
    dispatch(asyncActionFulfilled(ACTIONS.FETCH_RECS, {
      recs,
      totalRecs,
      totalPages,
      currentPage: Number(params.currentPage)
    }))
  } catch(error){
    dispatch(asyncActionRejected(ACTIONS.FETCH_RECS, error));
  }
}

export { ACTIONS, createRec, vote, fetchPage };
