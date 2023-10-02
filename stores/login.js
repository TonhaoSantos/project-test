import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const isLoggedIn = ref(false)

  function changeLogged() {
    isLoggedIn.value = true
  }

  return { isLoggedIn, changeLogged}
})
