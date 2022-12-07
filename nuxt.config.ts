// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-typed-router'],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'zh-CN',
        iso: 'zh-CN',
        file: 'zh-CN.json',
      },
      {
        code: 'zh-TW',
        iso: 'zh-TW',
        file: 'zh-TW.json',
      },
    ],
    defaultLocale: 'zh-TW',
    lazy: true,
    langDir: 'lang',
  },
});
