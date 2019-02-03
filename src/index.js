import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import App from './features/App';
import * as serviceWorker from './serviceWorker.js';
import history from './history';
import './styles/base.scss';
//redux
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './state/store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Fragment>
          <ReduxToastr
            position='bottom-right'  
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar
            closeOnToastrClick
            timeOut={3000}
          />
          <App />
        </Fragment>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})

serviceWorker.unregister();
