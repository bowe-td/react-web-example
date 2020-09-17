import React from 'react';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const { t } = useTranslation('auth');
  return (
    <div>
      <h1>{t('auth:forgot-password.title')}</h1>
      <input />
      <input />
    </div>
  );
};

export default ForgotPassword;
