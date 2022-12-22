// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.APP_ENV || 'local'}`) })

export default defineNuxtConfig({
  app: {
    head: {},
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.API_SECRET_KEY,
    // Keys within public are also exposed client-side
    public: {
      apiBaseURL: process.env.FND_API_BASE_URL,
    },
  },
  alias: {
    '@': '/<rootDir>',
    assets: '/<rootDir>/assets',
  },
  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    close: () => {
      // Nuxt lifecycle이 종료되는 시점
      console.log('close')
    },
  },
})
