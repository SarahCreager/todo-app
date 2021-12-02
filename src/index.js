import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './context/settings.js';
import App from './app.js';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
  <React.StrictMode>
    <Settings>
      <App />
    </Settings>
  </React.StrictMode>,
  document.getElementById('root'),
);

