import { Tabs, Tab } from 'vue3-tabs-component'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component('tabs', Tabs)
    .component('tab', Tab)
})
