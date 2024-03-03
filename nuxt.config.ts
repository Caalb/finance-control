export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  ui: { icons: ['mdi'] },
  app: { head: { title: "Login Page" } },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
})