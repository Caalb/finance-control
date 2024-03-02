import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
      legacy: false,
      globalInjection: true,
      locale: 'pt-br',
      messages: {
          en: {
              hello: 'Hello, {name}!',
              locales: {
                  en: 'English',
                  'pt-br': 'Portuguese'
              }
          },

          'pt-br': {
              hello: 'Olá, {name}!',
              locales: {
                  en: 'Inglês',
                  'pt-br': 'Português'
              }
          }
      }
  })

  vueApp.use(i18n)
})