// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'
import dotenv from 'dotenv'
import eslintPlugin from 'vite-plugin-eslint'

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.DEPLOY_ENV || 'local'}`),
})

const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  app: {
    head: {},
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  telemetry: false, // Nuxt 사용자 개선 로그 전송 비활성화

  // Nitro 웹서버 설정
  nitro: {
    preset: isProd ? 'node-cluster' : 'node-server',
  },

  // vite
  vite: {
    plugins: [eslintPlugin()],
  },

  // 런타임 환경변수
  runtimeConfig: {
    // 서버 모드에서만 접근할 수 있는 환경변수
    apiSecret: process.env.API_SECRET_KEY,
    // public 안의 변수는 클라이언트 모드에서도 접근 가능
    public: {
      apiBaseURL: process.env.FND_API_BASE_URL,
    },
  },

  // vueuse 설정
  vueuse: {
    ssrHandlers: true,
  },

  // 경로 설정
  alias: {
    '@': '/<rootDir>',
    'assets': '/<rootDir>/assets',
  },

  // 빌드 옵션
  build: {
    transpile: ['@headlessui/vue'],
  },

  // 모듈
  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],

  // 전역 CSS
  css: ['~/assets/css/tailwind.css'],

  // postcss 설정, tailwindcss 설정하면서 추가됨
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Nuxt.config.ts Lifecycle Hook(build, close...)
  hooks: {
    close: () => {
      // Nuxt lifecycle이 종료되는 시점
      console.log('close')
    },
  },
})
