import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './reducers/index';
import firebaseConfig from 'config/firebase.config';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
      getFirestore
    })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, { 
      attachAuthIsReady: true,
      useFirestoreForProfile: true,
      userProfile: 'users'
    })
  ),
);

// { getFirebase, getFirestore } in actions are available thanks for thunk.withExtraArgument({...})

export default store;
