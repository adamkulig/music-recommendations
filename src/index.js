import React from 'react';
import ReactDOM from 'react-dom';
import App from './features/App';
import * as serviceWorker from './helpers/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
