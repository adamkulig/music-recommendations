import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebaseConfig from '../config/firebase.config';

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

// export default configureStore;


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
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

export default store;
