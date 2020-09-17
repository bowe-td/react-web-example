import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'commons/components';
import { useAuth } from 'commons/providers/AuthProvider';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const history = useHistory();
  const { setToken } = useAuth();
  const { t } = useTranslation('auth');

  const loginApp = () => {
    setToken('asdad');
    history.push('/home');
  };

  return (
    <div>
      <h1>{t('auth:login.title')}</h1>
      <input />
      <input />
      <Button onClick={loginApp} />
    </div>
  );
};

export default Login;
