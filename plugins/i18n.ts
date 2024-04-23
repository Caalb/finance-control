import { createI18n } from 'vue-i18n';

import EN from '@/lang/en';
import PT_BR from '@/lang/pt-br';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pt-br',
    messages: {
      en: {
        ...EN
      },

      'pt-br': {
        ...PT_BR
      }
    }
  });

  vueApp.use(i18n);
});
