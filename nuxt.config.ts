export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  ui: { icons: ['mdi'] },
  modules: [
    '@nuxt/ui',
    '@nuxt/image'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})