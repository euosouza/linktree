// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/linktree/'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  icon: {
    // 1. Força o download de todas as coleções usadas durante o build
    serverBundle: 'remote',

    // 2. Garante que o bundle de cliente contenha os ícones para uso offline/estático
    clientBundle: {
      // Liste explicitamente os ícones que falharam
      includeCustomCollections: true,
      icons: [
        'ph:instagram-logo',
        'ph:envelope-simple',
        'ph:house-fill',
        'ph:first-aid-fill',
        'ph:star-fill',
        'ph:question-fill',
        'ph:caret-down-bold',
        'ph:first-aid',
        'ph:syringe',
        'ph:stethoscope',
        'ph:check-circle',
        'ph:star',
        'ph:smiley-wink'
      ],
      scan: true, // Escaneia automaticamente seus arquivos .vue
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})
