// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  app: {
    head: {
      title: 'Abraão Reis - Personal Resume',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/projects']
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  components: true
})
