import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import zh from './zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang',
      caches: ['localStorage', 'cookie'],
    },
    fallbackLng: 'en',
    resources: {
      en: en,
      zh: zh,
    },
    ns: ['meta'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
