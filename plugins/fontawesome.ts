import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(fa1)
library.add(fa2)
library.add(fa3)
library.add(fa4)
library.add(fa5)
library.add(fa6)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
