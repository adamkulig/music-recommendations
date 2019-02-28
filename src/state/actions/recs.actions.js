import { toastr } from 'react-redux-toastr';
import { inRange, get } from 'lodash';

import history from 'history.js';
import routes from 'variables/routes';
import messages from 'variables/messages';
import { RECS } from 'variables/recs';
import { snapshotsToArray } from 'helpers/firestore.helpers';
import {   
  asyncActionPending,
  asyncActionFulfilled,
  asyncActionRejected,
  asyncActionCancelled,
} from './generic/async.actions';

const ACTIONS = {
  FETCH_RECS: 'FETCH_RECS',
  FETCH_ALL_RECS: 'FETCH_ALL_RECS'
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

const fetchPage = params => async (dispatch, getState, { getFirestore }) => {
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
    if (inRange(params.currentPage, totalPages + 1)) {
      const recsQuery = await recsRef.startAt(lastRecRef).limit(RECS.pageSize);
      const querySnap = await recsQuery.get();
      const recs = snapshotsToArray(querySnap.docs);
      console.log('recs :', recs);
      dispatch(asyncActionFulfilled(ACTIONS.FETCH_RECS, {
        recs,
        totalRecs,
        totalPages,
        currentPage: params.currentPage
      }))
    } else {
      history.push(routes.Main)
      toastr.error(messages.toastrError, messages.toastrErrorPage)
    }
  } catch(error){
    dispatch(asyncActionRejected(ACTIONS.FETCH_RECS, error));
  }
}


const fetchAllRecs = (appIsMounting = false) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const state = getState();
  try {
    dispatch(asyncActionPending(ACTIONS.FETCH_ALL_RECS))
    const permissionToGetAllRecs = appIsMounting || await checkIfAreNewRecs(firestore, state);
    if (permissionToGetAllRecs) {
      const allRecsRef = await firestore
        .collection('recommendations')
        .orderBy('createdAt', 'desc')
        .get();
        const allRecs = snapshotsToArray(allRecsRef.docs);
        dispatch(asyncActionFulfilled(ACTIONS.FETCH_ALL_RECS, {
          allRecs,
      }))
    console.log('fetched');
    } else {
      dispatch(asyncActionCancelled(ACTIONS.FETCH_ALL_RECS));
    }
  } catch(error){
    dispatch(asyncActionRejected(ACTIONS.FETCH_ALL_RECS, error));
  }
}

const checkIfAreNewRecs = async (firestore, state) => {
  const lastRecRef = await firestore
    .collection('recommendations')
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get()
  const lastRec = snapshotsToArray(lastRecRef.docs);
  const lastRecFirestoreTimestamp = get(lastRec[0], 'createdAt.seconds');
  const lastRecStateTimestamp = get(state, 'allRecs.data.allRecs[0].createdAt.seconds', null)
  return lastRecStateTimestamp !== lastRecFirestoreTimestamp;
}

export { ACTIONS, createRec, vote, fetchPage, fetchAllRecs };
