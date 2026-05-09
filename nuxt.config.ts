// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/linktree/',
    buildAssetsDir: 'assets'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image'],
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
        'Content-Security-Policy': [
          "default-src 'self';",
          "script-src 'self' 'unsafe-inline' https:;",
          "style-src 'self' 'unsafe-inline' https:;",
          "img-src 'self' https: data:;",
          "font-src 'self' https: data:;",
          "frame-src https://open.spotify.com https://www.instagram.com https://www.youtube.com https://www.youtube-nocookie.com https://youtube.com;",
          "connect-src 'self' https:;",
          "base-uri 'self';",
          "form-action 'self';"
        ].join(' '),
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
      }
    }
  }
})

