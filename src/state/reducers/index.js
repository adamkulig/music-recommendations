import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import modalsReducer from './modals.reducers';

const rootReducer = combineReducers ({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  modals: modalsReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
