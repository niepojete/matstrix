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
      //titleTemplate: "%s" // cannot be set in here, see: app.vue
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
  }
})