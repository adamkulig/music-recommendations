import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import signInReducer from './signIn.reducers';
import signUpReducer from './signUp.reducers';

const rootReducer = combineReducers ({
  signIn: signInReducer,
  signUp: signUpReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;