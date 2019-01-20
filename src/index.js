import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './features/App';
import * as serviceWorker from './serviceWorker.js';
import './styles/base.scss';
//redux
import { Provider } from 'react-redux'
import store from './state/store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
})

serviceWorker.unregister();
