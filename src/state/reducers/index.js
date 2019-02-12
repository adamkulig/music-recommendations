import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import modalsReducer from './modals.reducers';
import recsReducer from './recs.reducers';

const rootReducer = combineReducers ({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer,
  toastr: toastrReducer,
  modals: modalsReducer,
  recs: recsReducer
});

export default rootReducer;
