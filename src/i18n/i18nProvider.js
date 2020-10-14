import vnMessages from './vn';
import englishMessages from './en';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  vn: vnMessages,
  en: englishMessages,
};

const i18nProvider = polyglotI18nProvider(
  locale => locale === 'en' ? messages.en : messages.vn,
  'vn'
);

export default i18nProvider;