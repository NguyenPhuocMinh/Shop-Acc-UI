import vnMessages from './vn';
import englishMessages from './en';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { resolveBrowserLocale } from 'react-admin';

const messages = {
  vn: vnMessages,
  en: englishMessages,
};

const i18nProvider = polyglotI18nProvider(
  locale => messages[locale] ? messages[locale] : messages.vn,
  resolveBrowserLocale()
);

export default i18nProvider;