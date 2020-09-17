import React from 'react';
import { useAuth } from 'commons/providers/AuthProvider';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(['commons', 'home']);
  const { setToken } = useAuth();
  return (
    <div>
      <h1>{t('home:main.title')}</h1>
      <button onClick={() => setToken(null)}>{t('commons:button.send')}</button>
    </div>
  );
};

export default Home;
