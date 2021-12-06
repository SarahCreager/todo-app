import React from 'react';
import ReactDOM from 'react-dom';
import SettingsProvider from './context/settings.js';
import AuthProvider from './context/auth.js';
import App from './app.js';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

