// 3rd's
import type { FetchOptions } from 'ofetch'
import type { AsyncDataOptions } from '#app'

// locals
import FetchFactory from '../factory'

type IRestCountries = {
  id: number
  name: string
  capital: string
  map: string
  languages: string
  area: number
  population: number
  countryCode: number
  continents: string
}

function validationField(field: string): boolean {
  return !!field
}

class RestCountriesModule extends FetchFactory<IRestCountries[]> {
  // private RESOURCE = '/zipCode/json'

  /**
   * Return the Address
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getByRegion(regionName: string, asyncDataOptions?: AsyncDataOptions<IRestCountries[]>) {
    if (!validationField(regionName)) throw Error('getByRegion: Region is required')

    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = undefined

      return this.call('GET', `/region/${regionName}`, body, fetchOptions)
    }, asyncDataOptions)
  }
}

export default RestCountriesModule
