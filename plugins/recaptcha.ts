import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  let siteKey = ''

  if (nuxtApp.$config.public.platform === 'prod') {
    siteKey = runtimeConfig.public.recaptchaSiteKey
  } else {
    siteKey = runtimeConfig.public.recaptchaSiteKeyLocalhost
  }

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
