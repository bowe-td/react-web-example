import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getToken, localSetToken, logout } from 'services/auth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const localToken = getToken();

    if (localToken) {
      return localToken;
    }

    return null;
  });

  useEffect(() => {
    if (token) {
      localSetToken(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('There is no context in auth hook.');
  }

  return context;
}

export { useAuth };

export default AuthProvider;
