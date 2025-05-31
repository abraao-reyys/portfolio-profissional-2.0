// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: 'Abraão Reis - Personal Resume',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    }
  },
  css: [
    '~/assets/css/main.css'
  ]
})
