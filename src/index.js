import React from 'react';
import ReactDOM from 'react-dom';

import App from './features/App';
import * as serviceWorker from './serviceWorker.js';
import "bootstrap/scss/bootstrap.scss";
import './index.css';
//redux
import { Provider } from 'react-redux'
import store from './state/store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})

serviceWorker.unregister();
