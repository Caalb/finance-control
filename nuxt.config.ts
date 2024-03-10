export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  ui: { icons: ['mdi'] },
  app: { head: { title: "Login Page" } },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },

  runtimeConfig: {
    public: {
      MOBULA_API_KEY: process.env.MOBULA_API_KEY,
    }
  }
})