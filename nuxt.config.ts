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
      routes: [
        '/',
        '/servicos/consulta-geral',
        '/servicos/vacinacao',
        '/servicos/exames-laboratoriais',
        '/servicos/ultrassonografia',
        '/servicos/laserterapia',
        '/servicos/eletro-ecocardiograma'
      ]
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
    '/**': { 
      prerender: true,
      headers: {
        'Content-Security-Policy': "default-src 'self' https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; frame-src https://open.spotify.com https://www.instagram.com https://www.youtube.com https://www.youtube-nocookie.com https://youtube.com;",
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  }
})

