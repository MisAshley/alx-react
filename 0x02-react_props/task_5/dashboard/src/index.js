import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root_notifications = ReactDOM.createRoot(
  document.getElementById('root-notifications')
);
root.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
