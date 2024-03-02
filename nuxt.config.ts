export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})