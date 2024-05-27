// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  css: [
    '@/assets/global.scss',
  ]
})
