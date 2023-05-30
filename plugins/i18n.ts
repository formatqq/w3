import { createI18n } from 'vue-i18n'
import en from '~/locales/en-US'
import cn from '~/locales/zh-CN'
import ru from '~/locales/ru-RU'

export default defineNuxtPlugin(({ vueApp }) => {
  const locale = useCookie('locale')
  const i18n = createI18n({
    legacy: false,
    warnHtmlMessage: false,
    globalInjection: true,
    locale: locale.value || 'en',
    messages: {
      en,
      cn,
      ru
    }
  })
 
  vueApp.use(i18n)
})