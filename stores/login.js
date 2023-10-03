import { defineStore, acceptHMRUpdate } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const isLoggedIn = ref(false)

  function changeLogged(value) {
    isLoggedIn.value = value
  }

  return { isLoggedIn, changeLogged}
},
{
  persist: true
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot))
}
