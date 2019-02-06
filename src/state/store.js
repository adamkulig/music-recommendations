import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import rootReducer from './reducers/index';
import firebaseConfig from 'config/firebase.config';

// const reactReduxFirebaseConfig = {
//   attachAuthIsReady: true,
//   useFirestoreForProfile: true,
//   userProfile: 'users'
// }
// const configureStore = preloadedState => {
//   const middlewares = [
//     thunk.withExtraArgument({
//       getFirebase,
//       getFirestore
//     })
//   ]
//   const middlewareEnhancer = applyMiddleware(...middlewares);
//   const storeEnhancers = [middlewareEnhancer];
//   const composeEnhancer = composeWithDevTools(
//     ...storeEnhancers,
//     reduxFirestore(firebaseConfig),
//     reactReduxFirebase(firebaseConfig, reactReduxFirebaseConfig)
//   );
//   const store = createStore(
//     rootReducer,
//     preloadedState,
//     composeEnhancer
//   );
// }
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
