// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-17',
  ssr: false,
  devtools: { enabled: false },

  vite: {
    server: {
      hmr: {
        port: 3000
      }
    }
  },

  devServer: {
    watch: ['./']
  },

  // app
  app: {
  head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/icon256.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/icon128.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/icon64.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },

  // styles
  css: ['~/assets/scss/app.scss'],

  // modules
  modules: [
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@morev/vue-transitions/nuxt',
    '@zadigetvoltaire/nuxt-gtm'
  ],

  // plugins
  plugins:[
    { src: "~/plugins/use-scroll.ts", ssr: false, mode: "client" }
  ],

  // pinia
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // transitions
  vueTransitions: {
    // The same options as in the plugin itself.
  },

  // gtm
  gtm: {
    id: "GTM-K87VCLJZ",
    defer: false,
    enabled: true
  }
})