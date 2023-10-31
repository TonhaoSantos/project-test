// 3rd's
import type { FetchOptions } from 'ofetch'
import type { AsyncDataOptions } from '#app'

// locals
import FetchFactory from '../factory'

type IViaCep = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

class ViaCepModule extends FetchFactory<IViaCep> {
  // private RESOURCE = '/zipCode/json'

  /**
   * Return the Address
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async getAddress(zipCode: string, asyncDataOptions?: AsyncDataOptions<IViaCep>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<'json'> = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = undefined

      // return this.call('GET', `${this.RESOURCE}`, body, fetchOptions)
      return this.call('GET', `/${zipCode}/json`, body, fetchOptions)
    }, asyncDataOptions)
  }
}

export default ViaCepModule
