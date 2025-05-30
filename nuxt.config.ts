// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: 'Abraão Reis - Portfólio Profissional'
    }
  },
  css: [
    '~/assets/css/main.css'
  ]
})
