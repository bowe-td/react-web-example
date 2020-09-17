import React from 'react';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t } = useTranslation('auth');
  return (
    <div>
      <h1>{t('auth:signup.title')}</h1>
    </div>
  );
};

export default SignUp;
