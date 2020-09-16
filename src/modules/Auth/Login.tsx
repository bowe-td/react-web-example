import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'commons/components';
import { useAuth } from 'commons/providers/AuthProvider';

const Login = () => {
  const history = useHistory();
  const { setToken } = useAuth();

  const loginApp = () => {
    setToken('asdad');
    history.push('/home');
  };

  return (
    <div>
      <h1>Login page</h1>
      <input />
      <input />
      <Button onClick={loginApp} />
    </div>
  );
};

export default Login;
