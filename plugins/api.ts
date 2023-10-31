// 3rd's
import { $fetch, FetchOptions } from 'ofetch'

// locals
import viaCepModule from '../repository/modules/viaCep'
import restCountriesModule from '../repository/modules/restCountries'

interface IApiInstance {
  viaCep: viaCepModule,
  restCountries: restCountriesModule
}

export default defineNuxtPlugin(context => {
  const config = useRuntimeConfig()

  const viaCepOptions: FetchOptions = {
    baseURL: config.public.apiViaCep
  }
  const restCountriesOptions: FetchOptions = {
    baseURL: `${config.public.apiRestCountries}/${config.public.apiRestCountriesVersion}`
  }

  // Create a new instance of $fecther with custom option
  const apiViaCepFecther = $fetch.create(viaCepOptions)
  const apiRestCountriesFecther = $fetch.create(restCountriesOptions)

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    viaCep: new viaCepModule(apiViaCepFecther),
    restCountries: new restCountriesModule(apiRestCountriesFecther)
  }

  return {
    provide: {
      api: modules
    }
  }
})
