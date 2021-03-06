import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import modalsReducer from './modals.reducers';
import recsReducer from './recs.reducers';
import allRecsReducer from './allRecs.reducers';
import recReducer from './rec.reducers';

const rootReducer = combineReducers ({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer,
  toastr: toastrReducer,
  modals: modalsReducer,
  recs: recsReducer,
  allRecs: allRecsReducer,
  rec: recReducer,
});

export default rootReducer;
