import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducers';
import votingReducer from './voting.reducers';

const rootReducer = combineReducers ({
  auth: authReducer,
  voting: votingReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  form: formReducer
});

export default rootReducer;
