import React, { useEffect } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from './Route';
import { onMessageListener, requestFirebaseNotificationPermission } from './firebase-messaging';

const App = () => {
  let theme = createMuiTheme();

  useEffect(() => {
    requestFirebaseNotificationPermission()
      .then((firebaseToken) => {
        // eslint-disable-next-line no-console
        console.log("Token ---", firebaseToken);
      })
      .catch((err) => {
        return err;
      });
  }, [])

  onMessageListener()
    .then((payload) => {
      const { title, body } = payload.notification;
      console.log(`${title}; ${body}`);
      alert(`Foreground notification :- ${title}; ${body}`)
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider >
  );
}

export default App;