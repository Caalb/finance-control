export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: { head: { title: "Login Page" } },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  ui: {
    primary: 'sky',
    icons: ['mdi']
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
})
