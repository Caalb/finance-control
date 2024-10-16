import { createI18n } from 'vue-i18n';
import type { I18nOptions } from 'vue-i18n';

import en from '@/lang/en';
import pt_br from '@/lang/pt-br/';

const messages: I18nOptions['messages'] = Object.assign({
  en: en,
  'pt-br': pt_br,
});

const i18n = createI18n({
  legacy: false,
  locale: 'pt-br',
  availableLocales: ['en', 'pr-bt'],
  messages,
});

export const { t, locale } = i18n.global;
