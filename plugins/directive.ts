import { IMaskDirective } from 'vue-imask'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('vImask', {
    updated() {
      return IMaskDirective.updated
    },
    unmounted() {
      return IMaskDirective.unmounted
    },
    beforeMount() {
      return IMaskDirective.beforeMount
    }
  })
})
