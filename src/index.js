import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Wrap App component with router
 */
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/**
 * Mount App component to DOM
 */
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
