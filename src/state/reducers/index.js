import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import signInReducer from './signIn.reducers';
import signUpReducer from './signUp.reducers';

const rootReducer = combineReducers ({
  signIn: signInReducer,
  signUp: signUpReducer,
  firestore: firestoreReducer
});

export default rootReducer;