function validationField(field: string): boolean {
  return !!field
}

export default () => {
  const { getEnvValue } = useEnvs()

  const apiUrl = getEnvValue('apiRestCountries')
  const apiVersion = getEnvValue('apiRestCountriesVersion')
  const url = `${apiUrl}/${apiVersion}`

  return {
    async getByRegion(regionName: string): Promise<object> {
      if (!validationField(regionName)) throw Error('getByRegion: Region is required')

      const newUrl = `${url}/region/${regionName}`

      const result = await useFetch(newUrl, {
        transform(data: Record<string, any>[]): Record<string, any>[] {
          return data.map((country, index) => {
            let language = ''

            for (const lang in country.languages) {
              language = country.languages[lang]
            }

            return {
              id: index + 1,
              name: country.name.common,
              capital: country.capital[0],
              map: country.maps.googleMaps,
              languages: language,
              area: `${country.area}`,
              population: `${country.population}`,
              countryCode: `${country.cca2}`,
              continents: `${country.continents}`
            }
          })
        }
      })

      return result
    }
  }
}
