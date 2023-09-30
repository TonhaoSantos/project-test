import { objectIsEmpty, objectHasKey } from '../utils'

export const useEnvs = () => {
  const config = useRuntimeConfig()

  const getEnvValue = (envName: string): string => {
    if (!objectIsEmpty(config.public) && objectHasKey(config.public, envName)) return `${config.public[envName]}`

    return ''
  }

  return {
    getEnvValue
  }
}
