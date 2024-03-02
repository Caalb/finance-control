export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/ui',
    '@nuxt/image'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})