import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getToken, setToken, logout } from '../services/auth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = getToken();

    if (token) {
      return { token };
    }

    return {};
  });

  useEffect(() => {
    setToken(data.token);
  }, [data]);

  return (
    <AuthContext.Provider value={{ ...data, setData, logout }}>{children}</AuthContext.Provider>
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
