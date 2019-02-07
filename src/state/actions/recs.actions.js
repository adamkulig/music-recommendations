import { toastr } from 'react-redux-toastr';

import history from 'history.js';
import routes from 'variables/routes';
import messages from 'variables/messages';

const ACTIONS = {}
  
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

export { ACTIONS, createRec, vote };
  