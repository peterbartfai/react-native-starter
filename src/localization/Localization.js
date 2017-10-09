import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

const en = require('./en.json');
const de = require('./en.json');

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => {
    return Expo.Util.getCurrentLocaleAsync().then((lng) => {
      callback(lng);
    });
  },
  init: () => { },
  cacheUserLanguage: () => { },
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
      de,
    },
    ns: ['translation'],
    defaultNS: 'translation',
    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
