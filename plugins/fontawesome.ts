import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLink, faArrowUpRightFromSquare, faTable, faEarthAmerica, faChevronRight, faUsers, faFaceGrin, faFlag } from '@fortawesome/free-solid-svg-icons'
import { faShieldCheck, faFileContract, faScaleBalanced, faBuildingShield, faUserShield, faPersonSign, faPersonCircleMinus, faUserMagnifyingGlass, faMonitorWaveform, faBinaryLock, faLaptopMobile, faServer, faCheckToSlot, faCameraCctv, faLightbulbOn, faFilterCircleDollar, faRobotAstromech, faCartShopping, faMagnifyingGlass, faMessageExclamation, faSliders, faClapperboardPlay, faMessageSmile, faCartShoppingFast, faAngleUp, faAngleDown, faSquareKanban, faTags, faTrophyStar, faArrowUpRightDots, faThumbsUp, faArrowRotateRight, faUserSecret, faMessageCheck, faMobile, faLaptop, faXmark, faBuildingColumns, faNewspaper, faBolt, faTag, faCode, faFaceDiagonalMouth, faPersonWalking, faLayerGroup, faCircleQuestion, faCloud, faPrintMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons'
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faTwitter, faLinkedin, faInstagram, faLink, faFacebook, faYoutube, faTiktok, faArrowUpRightFromSquare, faTable, faEarthAmerica, faChevronRight, faAngleUp, faShieldCheck, faFileContract, faScaleBalanced, faBuildingShield, faUserShield, faPersonCircleMinus, faPersonSign, faUserMagnifyingGlass, faMonitorWaveform, faBinaryLock, faLaptopMobile, faServer, faCheckToSlot, faCameraCctv, faUsers, faFaceGrin, faBolt, faFlag, faCartShopping, faLightbulbOn, faFilterCircleDollar, faRobotAstromech, faCartShopping, faMagnifyingGlass, faMessageExclamation, faSliders, faClapperboardPlay, faMessageSmile, faCartShoppingFast, faAngleDown, faSquareKanban, faTags, faTrophyStar, faArrowUpRightDots, faThumbsUp, faArrowRotateRight, faUserSecret, faMessageCheck, faMobile, faLaptop, faXmark, faBuildingColumns, faNewspaper, faTag, faCode, faFaceDiagonalMouth, faPersonWalking, faLayerGroup, faCircleQuestion, faCloud, faPrintMagnifyingGlass)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FaIcon', FontAwesomeIcon)
})
