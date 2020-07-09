import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components';
import { useAuth } from '../../providers/AuthProvider';

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

Login.propTypes = {};

export default Login;