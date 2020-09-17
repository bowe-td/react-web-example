import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18n
  .use(languageDetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
