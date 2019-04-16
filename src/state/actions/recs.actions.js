import { toastr } from 'react-redux-toastr';
import { inRange, get, slice, isNil, values, orderBy } from 'lodash';

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
  FETCH_ALL_RECS: 'FETCH_ALL_RECS',
  FILTER_RECS: 'FILTER_RECS',
  UPDATE_REC: 'UPDATE_REC',
  FETCH_REC: 'FETCH_REC'
}
  
const createRec = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const { displayName } = getState().firebase.profile;
  const { country, rating, genres } = data;
  const newRec = {
    ...data,
    country: country.label,
    rating: rating.label,
    genres: Object.assign({}, ...genres.map(item => ({[item.label]: item.value }))),
    likes: {},
    user: displayName,
    createdAt: new Date(),
    modifiedAt: new Date()
  }
  try {
    await firestore.collection('recommendations').add(newRec)
    history.push(routes.Recs)
    toastr.success(messages.toastrSuccess, messages.toastrSuccessNewRecAdded)
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const vote = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
  const { recId, userId, like } = data;
  const firestore = getFirestore();
  const rec = firestore.collection('recommendations').doc(recId);
  const modifiedAt = new Date();
  try {
    await rec.update({
      likes: {
        [userId]: like
      },
      modifiedAt
    })
    dispatch(updateRec({ recId, userId, like }));
  } catch(error) {
    console.log(error);
    toastr.error(messages.toastrError, messages.unknownError);
  }
}

const fetchPage = params => async (dispatch, getState) => {
  const { page, genres, band } = params;
  const state = getState();
  const allRecs = get(state, 'allRecs.data.allRecs', []);
  const isFiltered = !isNil(genres) || !isNil(band);
  const desiredRecs = isFiltered ? filterRecs(allRecs, params) : allRecs;
 
  const totalRecs = desiredRecs.length;
  const totalPages = Math.ceil(totalRecs / RECS.pageSize);
  if (inRange(page, 1, totalPages + 1)) {
    const startIndex = page * RECS.pageSize - RECS.pageSize;
    const endIndex = page * RECS.pageSize;
    const recs = slice(desiredRecs, startIndex, endIndex)
    dispatch({
      type: ACTIONS.FETCH_RECS,
      payload: {
        recs,
        totalRecs,
        totalPages,
        page
      }
    })
  } else {
    history.push(routes.Recs)
    toastr.error(messages.toastrError, messages.toastrErrorPage)
  }
}

const filterRecs = (recs, params) => {
  const { genres, band } = params;
  let filteredRecs = recs;
  if(!isNil(band)){
    filteredRecs = filteredRecs.filter(rec => rec.band.toLowerCase().includes(band))
  }
  if(!isNil(genres)){
    genres.map(genre => filteredRecs = filteredRecs.filter(rec => rec.genres.includes(genre)))
  }
  return filteredRecs;
} 

const fetchAllRecs = (appIsMounting = false) => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const state = getState();
  const localRecs = get(state, 'allRecs.data.allRecs', [])
  try {
    dispatch(asyncActionPending(ACTIONS.FETCH_ALL_RECS))
    const permissionToGetAllRecs = appIsMounting || await checkIfRecsAreUpdated(firestore, localRecs);
    if (permissionToGetAllRecs) {
      const allRecsRef = await firestore
        .collection('recommendations')
        .orderBy('createdAt', 'desc')
        .get();
        const allRecs = snapshotsToArray(allRecsRef.docs)
          .map(rec => ({...rec, genres: values(rec.genres)}));

        dispatch(asyncActionFulfilled(ACTIONS.FETCH_ALL_RECS, {
          allRecs,
      }))
    } else {
      dispatch(asyncActionCancelled(ACTIONS.FETCH_ALL_RECS));
    }
  } catch(error){
    dispatch(asyncActionRejected(ACTIONS.FETCH_ALL_RECS, error));
  }
}

const checkIfRecsAreUpdated = async (firestore, localRecs) => {
  const lastRecRef = await firestore
  .collection('recommendations')
  .orderBy('modifiedAt', 'desc')
  .limit(1)
  .get()
  const lastRec = snapshotsToArray(lastRecRef.docs);
  const lastRecFirestoreTimestamp = get(lastRec[0], 'modifiedAt.seconds');
  const lastRecStateTimestamp = orderBy(localRecs, ['modifiedAt.seconds'], ['desc'])[0]
  return lastRecStateTimestamp !== lastRecFirestoreTimestamp;
}

const updateRec = data => ({
  type: ACTIONS.UPDATE_REC,
  payload: data
})

const fetchRec = id => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  try {
    dispatch(asyncActionPending(ACTIONS.FETCH_REC))
    const recRef = await firestore.collection('recommendations').doc(id).get();
    if (recRef.exists) {
      const rec = recRef.data();
      dispatch(asyncActionFulfilled(ACTIONS.FETCH_REC, {rec: {
        ...rec,
        id
      }}))
    } else {
      dispatch(asyncActionCancelled(ACTIONS.FETCH_REC));
      history.push(routes.Recs);
      toastr.error(messages.toastrError, messages.toastrSuccessRecDoesNotExist);
    }
  } catch(error){
    dispatch(asyncActionRejected(ACTIONS.FETCH_REC, error));
  }
}

export { ACTIONS, createRec, vote, fetchPage, fetchAllRecs, filterRecs, fetchRec };
