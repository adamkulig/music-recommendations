import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'
import authReducer from './auth.reducers';
import votingReducer from './voting.reducers';

const rootReducer = combineReducers ({
  auth: authReducer,
  voting: votingReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
