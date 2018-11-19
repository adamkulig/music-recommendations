import { combineReducers } from 'redux';
import signInReducer from './signIn.reducers';
import signUpReducer from './signUp.reducers';

const rootReducer = combineReducers ({
  signIn: signInReducer,
  signUp: signUpReducer
});

export default rootReducer;