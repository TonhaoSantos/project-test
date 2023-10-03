import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([])

  const hasCountries = computed(() => {
    return !!(countries.value.length)
  })

  function setCountries(value) {
    countries.value = value
  }

  return { countries, hasCountries, setCountries }
},
{
  persist: true
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountriesStore, import.meta.hot))
}
