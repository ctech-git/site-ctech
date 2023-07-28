// next-i18next.config.js

import { i18n } from 'next-i18next';
const enTranslation = require('./public/locales/pt.json');

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt', 'es'], // inclua outros idiomas que deseja suportar
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        common: enTranslation,
      },
      en: {
        common: require('./public/locales/en.json'),
      },
      es: {
        common: require('./public/locales/es.json'),
      },
    },
  },
};
