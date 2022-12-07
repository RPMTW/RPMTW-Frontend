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
  app: {
    head: {
      title: 'RPMTW 官方網站',
      meta: [
        {
          name: 'description',
          content:
            'RPMTW 致力於推廣 Minecraft 中文社群並開發相關工具，希望為 Minecraft 玩家提供更好的體驗。',
        },
        {
          name: 'author',
          content: 'The RPMTW Team',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon-dark.png',
          media: '(prefers-color-scheme: dark)',
        },
        {
          rel: 'icon',
          href: '/favicon-light.png',
          media: '(prefers-color-scheme: light)',
        },
      ],
    },
  },
});
