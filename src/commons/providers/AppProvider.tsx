import React from 'react';
import { ThemeProvider } from 'styled-components';
import AuthProvider from './AuthProvider';
import { theme } from 'commons/styles/theme';

interface Props {
  children: React.ReactNode;
}

const AppProvider = (props: Props) => {
  const { children } = props;

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default AppProvider;
