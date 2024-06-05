import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const siteKey = runtimeConfig.public.recaptchaSiteKey

  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey,
    loaderOptions: {
      autoHideBadge: true,
    },
  })

  // const reCaptchaInstance = useReCaptcha()

  // return {
  //   provide: {
  //     recaptcha: reCaptchaInstance,
  //   },
  // }
})
