import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { getToken, localSetToken, logout } from 'commons/services/auth';

interface Props {
  children: React.ReactNode;
}

interface AuthContext {
  token?: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  logout?: () => void;
}

const AuthContext = createContext<AuthContext>({
  setToken: () => null,
});

const AuthProvider = (props: Props) => {
  const { children } = props;
  const [token, setToken] = useState(() => {
    const localToken = getToken();

    if (localToken) {
      return localToken;
    }

    return null;
  });

  useEffect(() => {
    localSetToken(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('There is no context in auth hook.');
  }

  return context;
}

export { useAuth };

export default AuthProvider;
