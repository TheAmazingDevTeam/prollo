import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Wrap App Component with router
 */
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/**
 * Mount App Component to DOM
 */
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
