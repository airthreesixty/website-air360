import { install } from 'vue3-recaptcha-v2'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.vueApp.use(install, {
    sitekey: runtimeConfig.public.recaptchaSiteKey,
    cnDomains: false,
  })
})
