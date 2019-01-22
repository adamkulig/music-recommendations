import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './features/App';
import * as serviceWorker from './serviceWorker.js';
import './styles/base.scss';
//redux
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import store from './state/store';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
})

serviceWorker.unregister();
