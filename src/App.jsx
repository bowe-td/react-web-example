import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import AppProvider from 'providers/AppProvider';
import GlobalStyles from 'styles/global';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
