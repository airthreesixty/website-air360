import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLink, faArrowUpRightFromSquare, faTable, faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faTwitter)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faLink)
library.add(faFacebook)
library.add(faYoutube)
library.add(faTiktok)
library.add(faArrowUpRightFromSquare)
library.add(faTable)
library.add(faEarthAmerica)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
