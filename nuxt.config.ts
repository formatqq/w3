// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Hammer',
      meta: [
        { name: 'description', content: 'Hammer Minner' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/img/logo.png' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    'element-plus/dist/index.css',
    '~/assets/less/fonts.less',
    '~/assets/less/index.less'
  ],
  vite: {
    css: {
      // 全局变量
      preprocessorOptions: {
        less: {
          additionalData: '@import "assets/less/index.less";'
        }
      }
    }
  }
})
