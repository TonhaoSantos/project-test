import result from "postcss/lib/result"

function validationField(field: string): boolean {
  return !!field
}

const defaultAddress = {
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: ''
}

export default () => {
  const { getEnvValue } = useEnvs()

  const apiUrl = getEnvValue('apiViaCep')
  const url = `${apiUrl}`

  return {
    async getAddress(zipCode: string): Promise<object> {
      if (!validationField(zipCode)) throw Error('getAddress: Zip Code is required')

      const newUrl = `${url}/${zipCode}/json`

      const { data: result } = await useFetch(newUrl)

      if (result.error === true) return defaultAddress

      return result
    }
  }
}
