import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Modules from './modules';
import AppProvider from 'commons/providers/AppProvider';
import GlobalStyles from 'commons/styles/global';

function App() {
  return (
    <Router>
      <AppProvider>
        <Modules />
      </AppProvider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
