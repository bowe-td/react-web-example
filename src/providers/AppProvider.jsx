import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './AuthProvider';
import { theme } from 'styles/theme';

const AppProvider = props => {
  const { children } = props;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
