// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/linktree/',
    buildAssetsDir: 'assets'
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
    // Força os ícones a serem gerados como CSS, evitando chamadas de API 404
    mode: 'css',
    clientBundle: {
      scan: true
    }
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
