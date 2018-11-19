import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer, 
//   compose(
//     applyMiddleware(thunk),
//     devTools 
//   )
// );

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
      getFirestore
    }))
  ),
);

export default store;
